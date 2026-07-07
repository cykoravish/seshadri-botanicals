import { Award, Leaf as LeafIcon, Factory, Globe2, Boxes, HeartHandshake } from "lucide-react";

const FEATURES = [
  { icon: Award, title: "Premium Quality", description: "Carefully selected raw materials and advanced extraction techniques in every batch." },
  { icon: LeafIcon, title: "Sustainable Sourcing", description: "Environmentally responsible farming practices and ethical sourcing partnerships." },
  { icon: Factory, title: "Modern Manufacturing", description: "State-of-the-art facilities ensuring consistency and operational efficiency." },
  { icon: Globe2, title: "International Standards", description: "Processes designed to meet internationally recognized quality expectations." },
  { icon: Boxes, title: "Bulk Supply Capability", description: "From small wholesale quantities to full container shipments." },
  { icon: HeartHandshake, title: "Customer-Centric Approach", description: "Long-term partnerships built on transparency, consistency and responsive service." },
];

export default function WhyPartner() {
  return (
    <section id="about" className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <div className="flex flex-col gap-4">
              <img src="https://static.wixstatic.com/media/88aac0_18785fd3a3a9463fb117c03b699baf15~mv2.png" alt="Hands preparing botanical ingredients with mortar and pestle" className="aspect-4/5 w-full rounded-xl object-cover" loading="lazy" />
              <img src="https://static.wixstatic.com/media/88aac0_5e5c32ce94bd4bcab5274e5b76d570fa~mv2.png" alt="Oil being dropped into a bowl" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <img src="https://static.wixstatic.com/media/88aac0_b1f7cefc60304f65b8230e8ecedd620b~mv2.png" alt="Botanical ingredient detail shot" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
              <img src="https://static.wixstatic.com/media/88aac0_20854400971b40a787833958e41706fc~mv2.png" alt="Lavender essential oil bottle styled with fresh sprigs" className="aspect-4/5 w-full rounded-xl object-cover" loading="lazy" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Why Partner with Seshadri Botanicals</h2>
            <p className="mt-4 text-brand-dark/75">
              From cultivation and sourcing to extraction, quality testing and
              global distribution, every step of our process reflects our
              dedication to excellence &mdash; across essential oils,
              specialty chemicals and dehydrated foods alike.
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