import exclusiveDeals from "../assets/images/exclusive-deals.webp";

export default function ExclusiveDeals() {
  return (
    <section className="bg-brand-cream px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl sm:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-sand px-8 py-12 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive-dark">Limited-Time Offers</p>
          <h2 className="mt-3 font-display text-3xl font-medium">Exclusive Bulk Deals</h2>
          <p className="mt-4 text-brand-dark/75">
            Take advantage of special pricing on bulk orders across essential
            oils, botanical extracts, specialty chemicals and dehydrated food
            ingredients. Elevate your product line at competitive rates.
          </p>
          <a href="#contact" className="mt-6 inline-block w-fit rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-dark-light">
            Request Bulk Pricing
          </a>
        </div>
        <img src={exclusiveDeals} alt="Amber essential oil bottle, editorial styling" className="min-h-64 w-full object-cover sm:min-h-full" loading="lazy" />
      </div>
    </section>
  );
}