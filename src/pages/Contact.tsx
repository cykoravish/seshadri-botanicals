import Chips from "../components/Chips";
import { INQUIRY_FROM } from "../data/products";
import ContactSection from "../sections/ContactSection";

export default function Contact() {
  return (
    <>
      <section className="bg-brand-sage px-4 pb-4 pt-16 text-center text-brand-dark sm:px-6 sm:pt-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">Get in Touch</p>
        <h1 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Contact Seshadri Chemicals</h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-dark/70">
          Whether you require industrial chemicals, specialty chemicals, solvents, polymer additives, performance additives, or customized chemical sourcing solutions, our team is ready to assist.
        </p>
        <p className="mt-8 text-sm font-medium">We welcome inquiries from:</p>
        <Chips items={INQUIRY_FROM} className="mx-auto mt-3 max-w-3xl justify-center" />
      </section>
      <ContactSection />
    </>
  );
}