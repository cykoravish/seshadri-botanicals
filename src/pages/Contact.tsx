import ContactSection from "../sections/ContactSection";

export default function Contact() {
  return (
    <>
      <section className="bg-brand-dark px-4 pb-4 pt-16 text-center text-brand-cream sm:px-6 sm:pt-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">Get in Touch</p>
        <h1 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Let&rsquo;s Talk Botanicals</h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-cream/75">
          We welcome inquiries from manufacturers, distributors, wholesalers,
          importers and private-label brands worldwide.
        </p>
      </section>
      <ContactSection />
    </>
  );
}