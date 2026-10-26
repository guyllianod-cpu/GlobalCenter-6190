import { z } from "zod";
import { ORPCError } from "@orpc/server";
import { eq } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

/**
 * Procédures des formulaires publics du site :
 * contact, partenariat, devis, newsletter.
 * Chaque procédure valide l'entrée (zod) puis enregistre en base.
 */

const lang = z.enum(["fr", "en", "ar"]).default("fr");
const email = z.string().trim().email().max(160);
const short = (max = 160) => z.string().trim().min(1).max(max);
const optional = (max = 2000) => z.string().trim().max(max).optional();

/** Champ « honeypot » anti-spam : doit rester vide */
const honeypot = z.string().max(0).optional();

export const contact = {
  submit: base
    .input(
      z.object({
        name: short(),
        email,
        phone: optional(40),
        subject: short(200),
        message: z.string().trim().min(10).max(5000),
        lang,
        website: honeypot,
      }),
    )
    .handler(async ({ input }) => {
      const { website: _hp, ...data } = input;
      await db.insert(schema.contactMessages).values(data);
      return { ok: true as const };
    }),
};

export const partnership = {
  submit: base
    .input(
      z.object({
        company: short(),
        contactName: short(),
        email,
        phone: short(40),
        country: short(80),
        activity: short(80),
        volume: optional(80),
        message: optional(5000),
        lang,
        website: honeypot,
      }),
    )
    .handler(async ({ input }) => {
      const { website: _hp, ...data } = input;
      await db.insert(schema.partnershipRequests).values(data);
      return { ok: true as const };
    }),
};

export const quote = {
  submit: base
    .input(
      z.object({
        name: short(),
        company: optional(160),
        email,
        phone: optional(40),
        products: short(2000),
        quantity: optional(120),
        message: optional(5000),
        lang,
        website: honeypot,
      }),
    )
    .handler(async ({ input }) => {
      const { website: _hp, ...data } = input;
      await db.insert(schema.quoteRequests).values(data);
      return { ok: true as const };
    }),
};

export const newsletter = {
  subscribe: base
    .input(z.object({ email, lang }))
    .handler(async ({ input }) => {
      const existing = await db
        .select({ id: schema.newsletterSubscribers.id })
        .from(schema.newsletterSubscribers)
        .where(eq(schema.newsletterSubscribers.email, input.email.toLowerCase()));
      if (existing.length > 0) {
        throw new ORPCError("CONFLICT", { message: "already_subscribed" });
      }
      await db
        .insert(schema.newsletterSubscribers)
        .values({ email: input.email.toLowerCase(), lang: input.lang });
      return { ok: true as const };
    }),
};

/** Regroupement de la fonctionnalité « formulaires » */
export const forms = { contact, partnership, quote, newsletter };
