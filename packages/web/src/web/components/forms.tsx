/**
 * Formulaires du site (react-hook-form + mutations oRPC).
 * Accessibles : labels associés, aria-invalid, messages d'erreur reliés
 * par aria-describedby, annonce du résultat via role="status".
 */
import { useId, useState, type ReactNode } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { Link } from "wouter";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { useContactSubmit, useNewsletterSubscribe, usePartnershipSubmit, useQuoteSubmit } from "../queries/forms";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ------------------------------------------------------------------ */
/* Briques                                                             */
/* ------------------------------------------------------------------ */

interface FieldProps {
  label: string;
  error?: FieldError;
  optional?: boolean;
  children: (props: { id: string; "aria-invalid": boolean; "aria-describedby"?: string }) => ReactNode;
  className?: string;
}

export function Field({ label, error, optional, children, className = "" }: FieldProps) {
  const id = useId();
  const { ui } = useI18n();
  const errId = `${id}-err`;
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label} {optional ? <span className="font-normal text-slate">{ui.form.optional}</span> : <span aria-hidden="true" className="text-[#b03a2e]">*</span>}
      </label>
      {children({ id, "aria-invalid": !!error, "aria-describedby": error ? errId : undefined })}
      {error && (
        <p id={errId} className="mt-1.5 text-sm text-[#b03a2e]">
          {error.message}
        </p>
      )}
    </div>
  );
}

function Consent({ register, error }: { register: ReturnType<typeof useForm>["register"]; error?: FieldError }) {
  const { ui } = useI18n();
  const id = useId();
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          className="mt-1 size-5 shrink-0 accent-[#0B5C8C]"
          aria-invalid={!!error}
          {...register("consent", { required: ui.form.consentRequired })}
        />
        <label htmlFor={id} className="text-sm text-slate">
          {ui.form.consent}{" "}
          <Link href="/confidentialite" className="text-blue underline">
            {ui.footer.privacy}
          </Link>
        </label>
      </div>
      {error && <p className="mt-1.5 text-sm text-[#b03a2e]">{error.message}</p>}
    </div>
  );
}

/** Champ caché anti-robots */
function Honeypot({ register }: { register: ReturnType<typeof useForm>["register"] }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input tabIndex={-1} autoComplete="off" {...register("website")} />
      </label>
    </div>
  );
}

export function FormSuccess({ children }: { children: ReactNode }) {
  return (
    <output className="flex items-start gap-3 rounded-2xl bg-mint p-5 text-leaf-ink">
      <CheckCircle2 className="mt-0.5 size-6 shrink-0" aria-hidden="true" />
      <span className="font-semibold">{children}</span>
    </output>
  );
}

function FormError({ children }: { children: ReactNode }) {
  return (
    <div role="alert" className="flex items-start gap-3 rounded-2xl bg-[#fdecea] p-4 text-[#8a2a20]">
      <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <p className="text-sm">{children}</p>
    </div>
  );
}

function SubmitButton({ pending, label }: { pending: boolean; label?: string }) {
  const { ui } = useI18n();
  return (
    <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={pending}>
      {pending ? <Loader2 className="size-5 animate-spin" aria-hidden="true" /> : <Send className="size-4 rtl:-scale-x-100" aria-hidden="true" />}
      {pending ? ui.cta.sending : (label ?? ui.cta.send)}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

type ContactValues = { name: string; email: string; phone: string; subject: string; message: string; consent: boolean; website: string };

export function ContactForm({ subjects }: { subjects: string[] }) {
  const { ui, lang } = useI18n();
  const m = useContactSubmit();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>();

  const onSubmit = handleSubmit(({ consent: _c, ...v }) =>
    m.mutate({ ...v, phone: v.phone || undefined, website: v.website || undefined, lang }, { onSuccess: () => reset() }),
  );

  if (m.isSuccess) return <FormSuccess>{ui.form.success}</FormSuccess>;

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot register={register as never} />
      <Field label={ui.form.name} error={errors.name}>
        {(a) => <input {...a} className="field" autoComplete="name" {...register("name", { required: ui.form.required })} />}
      </Field>
      <Field label={ui.form.email} error={errors.email}>
        {(a) => (
          <input {...a} type="email" className="field" autoComplete="email" {...register("email", { required: ui.form.required, pattern: { value: EMAIL_RE, message: ui.form.invalidEmail } })} />
        )}
      </Field>
      <Field label={ui.form.phone} optional error={errors.phone}>
        {(a) => <input {...a} type="tel" className="field" autoComplete="tel" dir="ltr" {...register("phone")} />}
      </Field>
      <Field label={ui.form.subject} error={errors.subject}>
        {(a) => (
          <select {...a} className="field" {...register("subject", { required: ui.form.required })} defaultValue="">
            <option value="" disabled>
              —
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        )}
      </Field>
      <Field label={ui.form.message} error={errors.message} className="sm:col-span-2">
        {(a) => (
          <textarea {...a} rows={6} className="field resize-y" {...register("message", { required: ui.form.required, minLength: { value: 10, message: ui.form.tooShort } })} />
        )}
      </Field>
      <div className="sm:col-span-2">
        <Consent register={register as never} error={errors.consent} />
      </div>
      {m.isError && <div className="sm:col-span-2"><FormError>{ui.form.error}</FormError></div>}
      <div className="sm:col-span-2">
        <SubmitButton pending={m.isPending} />
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Partenariat                                                         */
/* ------------------------------------------------------------------ */

type PartnerValues = {
  company: string; contactName: string; email: string; phone: string; country: string;
  activity: string; volume: string; message: string; consent: boolean; website: string;
};

export function PartnershipForm({ labels, activities, volumes }: {
  labels: { company: string; contactName: string; country: string; activity: string; volume: string; message: string; submit: string };
  activities: string[];
  volumes: string[];
}) {
  const { ui, lang } = useI18n();
  const m = usePartnershipSubmit();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PartnerValues>();

  const onSubmit = handleSubmit(({ consent: _c, ...v }) =>
    m.mutate(
      { ...v, volume: v.volume || undefined, message: v.message || undefined, website: v.website || undefined, lang },
      { onSuccess: () => reset() },
    ),
  );

  if (m.isSuccess) return <FormSuccess>{ui.form.success}</FormSuccess>;

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot register={register as never} />
      <Field label={labels.company} error={errors.company}>
        {(a) => <input {...a} className="field" autoComplete="organization" {...register("company", { required: ui.form.required })} />}
      </Field>
      <Field label={labels.contactName} error={errors.contactName}>
        {(a) => <input {...a} className="field" autoComplete="name" {...register("contactName", { required: ui.form.required })} />}
      </Field>
      <Field label={ui.form.email} error={errors.email}>
        {(a) => <input {...a} type="email" className="field" autoComplete="email" {...register("email", { required: ui.form.required, pattern: { value: EMAIL_RE, message: ui.form.invalidEmail } })} />}
      </Field>
      <Field label={ui.form.phone} error={errors.phone}>
        {(a) => <input {...a} type="tel" dir="ltr" className="field" autoComplete="tel" {...register("phone", { required: ui.form.required })} />}
      </Field>
      <Field label={labels.country} error={errors.country}>
        {(a) => <input {...a} className="field" autoComplete="country-name" {...register("country", { required: ui.form.required })} />}
      </Field>
      <Field label={labels.activity} error={errors.activity}>
        {(a) => (
          <select {...a} className="field" defaultValue="" {...register("activity", { required: ui.form.required })}>
            <option value="" disabled>—</option>
            {activities.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        )}
      </Field>
      <Field label={labels.volume} optional className="sm:col-span-2">
        {(a) => (
          <select {...a} className="field" defaultValue="" {...register("volume")}>
            <option value="">—</option>
            {volumes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        )}
      </Field>
      <Field label={labels.message} optional className="sm:col-span-2">
        {(a) => <textarea {...a} rows={5} className="field resize-y" {...register("message")} />}
      </Field>
      <div className="sm:col-span-2"><Consent register={register as never} error={errors.consent} /></div>
      {m.isError && <div className="sm:col-span-2"><FormError>{ui.form.error}</FormError></div>}
      <div className="sm:col-span-2"><SubmitButton pending={m.isPending} label={labels.submit} /></div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Devis                                                               */
/* ------------------------------------------------------------------ */

type QuoteValues = { name: string; company: string; email: string; phone: string; products: string; quantity: string; message: string; consent: boolean; website: string };

export function QuoteForm({ defaultProducts = "" }: { defaultProducts?: string }) {
  const { ui, lang } = useI18n();
  const m = useQuoteSubmit();
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteValues>({ defaultValues: { products: defaultProducts } });

  const onSubmit = handleSubmit(({ consent: _c, ...v }) =>
    m.mutate({
      ...v,
      company: v.company || undefined,
      phone: v.phone || undefined,
      quantity: v.quantity || undefined,
      message: v.message || undefined,
      website: v.website || undefined,
      lang,
    }),
  );

  if (m.isSuccess) return <FormSuccess>{ui.form.success}</FormSuccess>;

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-4 sm:grid-cols-2">
      <Honeypot register={register as never} />
      <Field label={ui.form.name} error={errors.name}>
        {(a) => <input {...a} className="field" autoComplete="name" {...register("name", { required: ui.form.required })} />}
      </Field>
      <Field label={ui.form.company} optional>
        {(a) => <input {...a} className="field" autoComplete="organization" {...register("company")} />}
      </Field>
      <Field label={ui.form.email} error={errors.email}>
        {(a) => <input {...a} type="email" className="field" autoComplete="email" {...register("email", { required: ui.form.required, pattern: { value: EMAIL_RE, message: ui.form.invalidEmail } })} />}
      </Field>
      <Field label={ui.form.phone} optional>
        {(a) => <input {...a} type="tel" dir="ltr" className="field" autoComplete="tel" {...register("phone")} />}
      </Field>
      <Field label={ui.quote.products} error={errors.products} className="sm:col-span-2">
        {(a) => <textarea {...a} rows={2} className="field resize-y" {...register("products", { required: ui.form.required })} />}
      </Field>
      <Field label={ui.quote.quantity} optional className="sm:col-span-2">
        {(a) => <input {...a} className="field" {...register("quantity")} />}
      </Field>
      <Field label={ui.form.message} optional className="sm:col-span-2">
        {(a) => <textarea {...a} rows={3} className="field resize-y" {...register("message")} />}
      </Field>
      <div className="sm:col-span-2"><Consent register={register as never} error={errors.consent} /></div>
      {m.isError && <div className="sm:col-span-2"><FormError>{ui.form.error}</FormError></div>}
      <div className="sm:col-span-2"><SubmitButton pending={m.isPending} /></div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Newsletter                                                          */
/* ------------------------------------------------------------------ */

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const { ui, lang } = useI18n();
  const m = useNewsletterSubscribe();
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const id = useId();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) return setInvalid(true);
    setInvalid(false);
    m.mutate({ email, lang });
  };

  const conflict = m.error && (m.error as { code?: string }).code === "CONFLICT";

  return (
    <div>
      {m.isSuccess ? (
        <output className={`flex items-center gap-2 font-semibold ${dark ? "text-[#bfe3a3]" : "text-leaf-ink"}`}>
          <CheckCircle2 className="size-5" aria-hidden="true" /> {ui.newsletter.success}
        </output>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col gap-3 sm:flex-row">
          <input
            id={id}
            aria-label={ui.newsletter.placeholder}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={ui.newsletter.placeholder}
            autoComplete="email"
            aria-invalid={invalid}
            className="field flex-1"
          />
          <button type="submit" className={`btn ${dark ? "btn-white" : "btn-primary"}`} disabled={m.isPending}>
            {m.isPending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            {ui.newsletter.button}
          </button>
        </form>
      )}
      <div aria-live="polite" className={`mt-2 text-sm ${dark ? "text-white/80" : "text-slate"}`}>
        {invalid && ui.form.invalidEmail}
        {conflict && ui.newsletter.exists}
        {m.isError && !conflict && ui.newsletter.error}
        {!invalid && !m.isError && !m.isSuccess && ui.newsletter.legal}
      </div>
    </div>
  );
}
