import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="bg-brand-dark text-brand-cream">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">
          Manufacturer &middot; Exporter &middot; Wholesale Supplier
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          Enhance Your Formulations with Nature&rsquo;s Best
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-brand-cream/80 sm:text-lg">
          Seshadri Botanicals is a trusted manufacturer and exporter of premium
          essential oils, carrier oils and botanical extracts &mdash; now
          expanded into specialty chemicals and dehydrated food ingredients.
          Nature&rsquo;s purity, delivered to global industries with uncompromising quality.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/shop" className="w-full rounded-full bg-brand-olive px-7 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-cream sm:w-auto">
            Browse Our Products
          </Link>
          <Link to="/contact" className="w-full rounded-full border border-brand-cream/30 px-7 py-3 text-sm font-medium text-brand-cream transition-colors hover:border-brand-cream sm:w-auto">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-16 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8">
        <img src="https://static.wixstatic.com/media/88aac0_12ab8c8f327844229589668bfa0f1b29~mv2.png" alt="Essential oil being poured, macro shot" className="aspect-3/4 w-full rounded-xl object-cover" loading="eager" />
        <img src="https://static.wixstatic.com/media/88aac0_c87de1a7946048d4bed7a16475aefd2e~mv2.png" alt="Lavender essential oil bottle on a stand" className="aspect-3/4 w-full rounded-xl object-cover" loading="lazy" />
        <img src="https://static.wixstatic.com/media/88aac0_c4a36f57e8954f34a233daaa8c4ba906~mv2.png" alt="Essential oil bottle with citrus and rosemary" className="aspect-3/4 w-full rounded-xl object-cover" loading="lazy" />
        <img src="https://static.wixstatic.com/media/88aac0_2bdde78ca21a42e0918af3ff5089b915~mv2.png" alt="Hand holding an essential oil bottle" className="aspect-3/4 w-full rounded-xl object-cover" loading="lazy" />
      </div>
    </section>
  );
}