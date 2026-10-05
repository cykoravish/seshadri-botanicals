import { FAQS } from "../data/products";

export default function Faq() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-xl border border-brand-dark/10 bg-white/60 p-5">
              <summary className="cursor-pointer list-none font-medium marker:hidden">{f.q}</summary>
              <p className="mt-3 text-sm text-brand-dark/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
