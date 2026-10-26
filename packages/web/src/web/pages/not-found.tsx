/** Page 404 */
import { Link } from "wouter";
import { Leaf } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { Seo } from "../components/seo";

export default function NotFound() {
  const { ui } = useI18n();
  return (
    <>
      <Seo title={ui.notFound.title} description={ui.notFound.text} path="/404" />
      <section className="mesh flex min-h-[70vh] items-center pt-28 pb-16">
        <div className="container-gcp text-center">
          <Leaf className="float-soft mx-auto size-12 text-leaf" aria-hidden="true" />
          <p className="mt-4 text-6xl font-extrabold text-blue" style={{ fontFamily: "var(--font-display)" }}>404</p>
          <h1 className="h2 mt-4">{ui.notFound.title}</h1>
          <p className="lead mx-auto mt-3 max-w-md">{ui.notFound.text}</p>
          <Link href="/" className="btn btn-primary mt-8">{ui.notFound.back}</Link>
        </div>
      </section>
    </>
  );
}
