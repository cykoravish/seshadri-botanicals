import { Link } from "react-router-dom";
import { Factory, FlaskConical, Droplets, Pill, Sparkles } from "lucide-react";
import Chips from "../components/Chips";
import { PRODUCT_GROUPS, INDUSTRIES } from "../data/products";

const ICONS = [Factory, FlaskConical, Droplets, Pill, Sparkles];

export default function ProductRange() {
  return (
    <section id="products" className="bg-brand-cream py-16 text-brand-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Our Product Portfolio</h2>
          <p className="mt-3 text-brand-dark/70">
            We supply a broad range of specialty and industrial chemicals.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_GROUPS.map((group, i) => {
            const Icon = ICONS[i];
            return (
              <Link
                key={group.id}
                to="/shop"
                className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm transition-colors hover:border-brand-olive/50"
              >
                <Icon className="h-7 w-7 text-brand-olive" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-medium">{group.label}</h3>
                <p className="mt-2 text-sm text-brand-dark/70">{group.intro}</p>
                <p className="mt-3 text-xs text-brand-dark/55">
                  {group.items.slice(0, 4).join(" · ")} &hellip;
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-medium sm:text-2xl">Industries We Serve</h3>
          <p className="mt-2 text-brand-dark/70">Our chemical products are supplied to a wide range of industries, including:</p>
          <Chips items={INDUSTRIES} className="mt-5" />
        </div>
      </div>
    </section>
  );
}
