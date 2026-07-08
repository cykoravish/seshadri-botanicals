import { Link } from "react-router-dom";
import { Droplet, FlaskConical, Wheat } from "lucide-react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import lavender from "../assets/images/lavender.webp";
import teaTree from "../assets/images/tea-tree.webp";
import peppermint from "../assets/images/peppermint.webp";
import rosehip from "../assets/images/rosehip.webp";
import greenTea from "../assets/images/green-tea.webp";
import calendula from "../assets/images/calendula.webp";

const DIVISIONS = [
  {
    icon: Droplet,
    title: "Essential Oils & Botanicals",
    description:
      "Essential oils, carrier oils, herbal extracts and floral waters for cosmetics, aromatherapy, pharma and wellness.",
  },
  {
    icon: FlaskConical,
    title: "Specialty & Industrial Chemicals",
    description:
      "Solvents, surfactants, acids and performance additives for paints, textiles, water treatment and manufacturing.",
  },
  {
    icon: Wheat,
    title: "Dehydrated Foods",
    description:
      "Naturally dried vegetables, fruits, herbs and spices for food processing, seasoning and retail brands.",
  },
];

const FEATURED_OILS = [
  {
    name: "Lavender Essential Oil",
    note: "Fresh, floral, sweet",
    image: lavender,
  },
  {
    name: "Tea Tree Essential Oil",
    note: "Fresh, medicinal, woody",
    image: teaTree,
  },
  { name: "Peppermint Essential Oil", note: "Fresh, minty", image: peppermint },
  { name: "Calendula Extract", note: "Soothing skincare actives", image: calendula },
  { name: "Green Tea Extract", note: "Antioxidant-rich", image: greenTea },
  { name: "Rosehip Seed Oil", note: "Nourishing, lightweight", image: rosehip },
];

export default function ProductRange() {
  return (
    <section
      id="products"
     className="bg-brand-cream py-16 text-brand-dark sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Our Product Range
          </h2>
    <p className="mt-3 text-brand-dark/70">
            Three specialized divisions, one commitment to purity and quality.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {DIVISIONS.map((division) => (
            <Link
              key={division.title}
              to="/shop"
             className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm transition-colors hover:border-brand-olive/50"
            >
              <division.icon
                className="h-7 w-7 text-brand-olive"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 font-display text-xl font-medium">
                {division.title}
              </h3>
      <p className="mt-2 text-sm text-brand-dark/70">
                {division.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-xl font-medium sm:text-2xl">
              Popular in Essential Oils &amp; Botanicals
            </h3>
            <Link
              to="/shop"
          className="shrink-0 text-sm font-medium text-brand-olive hover:text-brand-olive-dark"
            >
              Shop all &rarr;
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {FEATURED_OILS.map((product) => (
              <div key={product.name} className="group">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <ImagePlaceholder
                    label={product.name}
                    icon={Droplet}
                    tone="cream"
                    className="aspect-square rounded-xl"
                  />
                )}
                <p className="mt-3 text-sm font-medium">{product.name}</p>
              <p className="text-xs text-brand-dark/60">{product.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
