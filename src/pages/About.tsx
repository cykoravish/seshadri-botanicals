import { Link } from "react-router-dom";
import { Sprout, Target, Eye, ShieldCheck, Leaf, Lightbulb, Users } from "lucide-react";
import aboutHero from "../assets/images/about-hero.webp";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We never compromise on quality. Every batch is produced and evaluated with precision to ensure consistency, purity and customer satisfaction.",
  },
  {
    icon: Leaf,
    title: "Integrity",
    description:
      "Honesty, transparency and ethical business practices form the foundation of every relationship we build.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description:
      "We promote responsible sourcing, environmental stewardship and long-term partnerships that support both communities and nature.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our manufacturing processes, product portfolio and customer solutions to meet evolving market needs.",
  },
  {
    icon: Users,
    title: "Customer Commitment",
    description:
      "Our customers are at the centre of everything we do — dependable products, responsive service and long-term value.",
  },
];

const REGIONS = [
  "North America",
  "Europe",
  "Middle East",
  "Southeast Asia",
  "Australia",
  "Africa",
  "Latin America",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">
              Rooted in Nature. Driven by Quality.
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              About Seshadri Botanicals
            </h1>
            <p className="mt-5 text-brand-cream/80">
              Seshadri Botanicals is an India-based manufacturer and exporter
              specializing in premium essential oils, carrier oils, botanical
              extracts and floral waters &mdash; and, more recently,
              specialty &amp; industrial chemicals and dehydrated food
              ingredients. We combine traditional botanical knowledge with
              modern manufacturing technology to serve customers across
              cosmetics, pharmaceutical, aromatherapy, food &amp; beverage,
              fragrance, wellness and industrial sectors worldwide.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-brand-olive px-7 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-cream"
            >
              Get in Touch
            </Link>
          </div>
          <img
            src={aboutHero}
            alt="Seshadri Botanicals — botanical ingredients and natural products"
            className="aspect-4/3 w-full rounded-xl object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Who We Are</h2>
          <p className="mt-4 text-brand-dark/75">
            Quality begins at the source. Our procurement team works closely
            with trusted farmers, cultivators and supplier networks to obtain
            high-quality raw materials cultivated using responsible
            agricultural practices. Using advanced steam distillation,
            cold-press extraction and other modern processing techniques, we
            preserve the natural composition, aroma and beneficial properties
            of every ingredient we produce &mdash; whether that's a botanical
            extract, a specialty chemical, or a dehydrated food ingredient.
          </p>
          <p className="mt-4 text-brand-dark/75">
            Our commitment extends beyond manufacturing. We focus on building
            long-term relationships by offering reliable supply, transparent
            communication, customized solutions and exceptional customer
            service.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-dark py-16 text-brand-cream sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Eye className="h-7 w-7 text-brand-olive" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-medium">Our Vision</h3>
            <p className="mt-3 text-brand-cream/75">
              To become one of the world&rsquo;s most respected manufacturers
              and exporters of botanical ingredients by delivering exceptional
              quality, sustainable solutions and trusted partnerships.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Target className="h-7 w-7 text-brand-olive" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-medium">Our Mission</h3>
            <p className="mt-3 text-brand-cream/75">
              To provide natural ingredients that consistently exceed customer
              expectations while promoting sustainable business practices and
              continuous innovation across all three of our divisions.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Our Core Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-brand-dark/10 bg-white/40 p-6">
                <value.icon className="h-6 w-6 text-brand-olive-dark" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-medium">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-brand-dark py-16 text-brand-cream sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Our Global Presence</h2>
        <p className="mx-auto mt-4 max-w-2xl text-brand-cream/80">
            We proudly supply botanical ingredients, specialty chemicals and
            dehydrated foods to businesses across international markets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {REGIONS.map((region) => (
              <span
                key={region}
               className="rounded-full border border-brand-cream/20 bg-white/10 px-4 py-2 text-sm font-medium"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}