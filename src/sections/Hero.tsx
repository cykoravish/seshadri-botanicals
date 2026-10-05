import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero-1.webp";
import hero2 from "../assets/images/hero-2.webp";
import hero3 from "../assets/images/hero-3.webp";
import hero4 from "../assets/images/hero-4.webp";

export default function Hero() {
  return (
  <section id="top" className="bg-brand-sage text-brand-dark">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">
          A Division of Seshadri Trading Company
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          Specialty &amp; Industrial Chemicals
        </h1>
       <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-brand-dark/75 sm:text-lg">
          Global supplier, exporter, trader and wholesale distributor of specialty and industrial chemicals, solvents,
          performance additives and chemical raw materials &mdash; serving manufacturers, distributors, OEMs, formulators
          and industrial users in India and worldwide.
        </p>
        <p className="mt-4 font-display text-lg font-medium text-brand-olive-dark">
          Reliable Supply. Consistent Quality. Global Reach.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
         <Link to="/shop" className="w-full rounded-full bg-brand-olive px-7 py-3 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-olive-dark sm:w-auto">
            Browse Our Products
          </Link>
         <Link to="/contact" className="w-full rounded-full border border-brand-dark/30 px-7 py-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-dark sm:w-auto">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-16 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8">
        <img src={hero1} alt="Product macro shot" className="aspect-3/4 w-full rounded-xl object-cover" loading="eager" />
        <img src={hero2} alt="Bottle on a stand" className="aspect-3/4 w-full rounded-xl object-cover" loading="lazy" />
        <img src={hero3} alt="Bottle with citrus and rosemary" className="aspect-3/4 w-full rounded-xl object-cover" loading="lazy" />
        <img src={hero4} alt="Hand holding a bottle" className="aspect-3/4 w-full rounded-xl object-cover" loading="lazy" />
      </div>
    </section>
  );
}