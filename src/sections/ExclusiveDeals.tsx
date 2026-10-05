import { Link } from "react-router-dom";
import exclusiveDeals from "../assets/images/exclusive-deals.webp";

export default function ExclusiveDeals() {
  return (
    <section className="bg-brand-cream px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl sm:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-sand px-8 py-12 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive-dark">Customized Chemical Sourcing</p>
          <h2 className="mt-3 font-display text-3xl font-medium">Looking for a Chemical That Isn&rsquo;t Listed?</h2>
          <p className="mt-4 text-brand-dark/75">
            Our portfolio represents only a portion of the products we can potentially source. If you need a specific
            chemical, additive, raw material, intermediate, solvent, or industrial formulation component, send us:
          </p>
          <p className="mt-3 text-sm font-medium text-brand-dark">
            Product Name | CAS Number | Specification | Application | Quantity | Destination
          </p>
          <p className="mt-3 text-brand-dark/75">
            Our team can evaluate available sourcing options and provide a suitable commercial response where possible.
          </p>
          <Link to="/contact" className="mt-6 inline-block w-fit rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-dark-light">
            Send Your Requirement
          </Link>
        </div>
        <img src={exclusiveDeals} alt="Amber bottle, editorial styling" className="min-h-64 w-full object-cover sm:min-h-full" loading="lazy" />
      </div>
    </section>
  );
}
