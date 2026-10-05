import { Layers, Network, Boxes, Globe2, FileText, Ship, Search, BadgePercent, Headset } from "lucide-react";
import whyPartner1 from "../assets/images/why-partner-1.webp";
import whyPartner2 from "../assets/images/why-partner-2.webp";
import whyPartner3 from "../assets/images/why-partner-3.webp";
import whyPartner4 from "../assets/images/why-partner-4.webp";

const FEATURES = [
  { icon: Layers, title: "Extensive Product Portfolio", description: "A wide range of industrial and specialty chemicals from reliable manufacturers and suppliers." },
  { icon: Network, title: "Reliable Supply Chain", description: "Our sourcing network identifies suitable domestic and international supply options for your requirement." },
  { icon: Boxes, title: "Bulk Supply Capability", description: "From smaller industrial quantities to bulk shipments and container-load orders, subject to availability." },
  { icon: Globe2, title: "Domestic & International Sourcing", description: "We can explore supply options from India and international markets." },
  { icon: FileText, title: "Technical Documentation", description: "Relevant documentation provided for applicable products, subject to supplier availability." },
  { icon: Ship, title: "Global Export Support", description: "Export documentation, logistics coordination, packaging and international shipment support." },
  { icon: Search, title: "Customized Sourcing", description: "Not listed? Share the product name, CAS number, specification, application, quantity or target price." },
  { icon: BadgePercent, title: "Competitive Pricing", description: "Multiple sourcing channels to identify commercially competitive supply options." },
  { icon: Headset, title: "Responsive Customer Service", description: "Prompt, professional support from initial inquiry to delivery coordination." },
];

export default function WhyPartner() {
  return (
    <section id="about" className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <div className="flex flex-col gap-4">
              <img src={whyPartner1} alt="Ingredient preparation" className="aspect-4/5 w-full rounded-xl object-cover" loading="lazy" />
              <img src={whyPartner2} alt="Liquid being dropped into a bowl" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <img src={whyPartner3} alt="Ingredient detail shot" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
              <img src={whyPartner4} alt="Bottle styled with fresh sprigs" className="aspect-4/5 w-full rounded-xl object-cover" loading="lazy" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Why Choose Seshadri Chemicals?</h2>
            <p className="mt-4 text-brand-dark/75">
              Reliable sourcing, consistent quality and dependable delivery &mdash; for manufacturers, distributors, formulators and industrial users worldwide.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature.title} className="flex gap-3">
                  <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-olive-dark" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="mt-1 text-sm text-brand-dark/65">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}