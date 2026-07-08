import { useState, type FormEvent } from "react";
import { Mail, Clock } from "lucide-react";
import contactChamomile from "../assets/images/contact-chamomile.webp";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
   <section id="contact" className="bg-brand-sage py-16 text-brand-dark sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:px-8">
        <img src={contactChamomile} alt="Chamomile flowers, close up" className="aspect-4/3 w-full rounded-xl object-cover md:aspect-auto md:h-full" loading="lazy" />
        <div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Connect with Us</h2>
<p className="mt-3 max-w-md text-brand-dark/70">
            Have questions or need bulk pricing? Reach out to Seshadri Botanicals for inquiries about any of our products or services.
          </p>
         <div className="mt-6 flex flex-col gap-3 text-sm text-brand-dark/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-olive" aria-hidden="true" />
             <a href="mailto:info@seshadribotanicals.com" className="hover:text-brand-dark">info@seshadribotanicals.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-olive" aria-hidden="true" />
              <span>Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM (IST)</span>
            </div>
          </div>

          {submitted ? (
           <div role="status" className="mt-8 rounded-xl border border-brand-olive/40 bg-white/60 p-6 text-sm">
              Thanks &mdash; your message has been noted. Our team will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">First name <span aria-hidden="true">*</span>
                  <input type="text" name="firstName" required autoComplete="given-name" className="rounded-md border border-brand-dark/20 bg-white/50 px-3 py-2 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-olive" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">Last name <span aria-hidden="true">*</span>
                  <input type="text" name="lastName" required autoComplete="family-name" className="rounded-md border border-brand-dark/20 bg-white/50 px-3 py-2 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-olive" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-sm">Email <span aria-hidden="true">*</span>
                <input type="email" name="email" required autoComplete="email" className="rounded-md border border-brand-dark/20 bg-white/50 px-3 py-2 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-olive" />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">Message <span aria-hidden="true">*</span>
                <textarea name="message" required rows={4} className="rounded-md border border-brand-dark/20 bg-white/50 px-3 py-2 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-olive" />
              </label>
          <button type="submit" className="w-full rounded-full bg-brand-olive px-6 py-3 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-olive-dark sm:w-fit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}