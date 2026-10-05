import { Link } from "react-router-dom";
import aboutHero from "../assets/images/about-hero.webp";
import Chips from "../components/Chips";
import Faq from "../sections/Faq";
import { BUSINESS_MODEL, EXPORT_MARKETS } from "../data/products";

export default function About() {
  return (
    <>
      <section className="bg-brand-sage text-brand-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">
              A Division of Seshadri Trading Company
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              About Seshadri Chemicals
            </h1>
            <p className="mt-5 text-brand-dark/75">
              Seshadri Chemicals operates as the Specialty Chemicals &amp; Industrial Chemicals division of Seshadri
              Trading Company. The division was established to develop a dedicated business platform for sourcing and
              supplying chemical products to industries in India and international markets.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-brand-olive px-7 py-3 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-olive-dark"
            >
              Get in Touch
            </Link>
          </div>
          <img src={aboutHero} alt="Seshadri Chemicals" className="aspect-4/3 w-full rounded-xl object-cover" loading="eager" />
        </div>
      </section>

      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Who We Are</h2>
          <p className="mt-4 text-brand-dark/75">
            Seshadri Chemicals focuses on the sourcing, trading, distribution, import, export, and supply of specialty
            chemicals, industrial chemicals, solvents, performance additives, and chemical raw materials. We serve
            manufacturers, distributors, OEMs, formulators, industrial users, research organizations, and businesses
            across domestic and international markets.
          </p>
          <p className="mt-4 text-brand-dark/75">
            We work with customers to understand their technical, commercial, packaging, and delivery requirements and
            identify suitable products and supply options. Our objective is to develop long-term relationships by
            providing dependable sourcing and responsive service.
          </p>
          <h3 className="mt-10 font-display text-xl font-medium">Our business model combines</h3>
          <Chips items={BUSINESS_MODEL} className="mt-4" />
        </div>
      </section>

      <section className="bg-brand-sage py-16 text-brand-dark sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Quality Commitment</h2>
          <p className="mt-4 text-brand-dark/75">
            Quality and consistency are important considerations throughout our sourcing and supply process. Seshadri
            Chemicals, a division of Seshadri Trading Company, works with established manufacturers, suppliers, and
            sourcing partners to identify products that meet agreed customer specifications.
          </p>
          <p className="mt-4 text-brand-dark/75">
            Where applicable, product documentation and batch-related information can be provided for customer review.
            Our objective is to build dependable long-term supply relationships while maintaining transparency regarding
            product specifications, sourcing, documentation, and delivery.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Export Markets</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-dark/75">
            We aim to serve customers across international markets, subject to product-specific regulations, logistics
            and destination-country requirements.
          </p>
          <Chips items={EXPORT_MARKETS} className="mt-8 justify-center" />
        </div>
      </section>

      <Faq />
    </>
  );
}
