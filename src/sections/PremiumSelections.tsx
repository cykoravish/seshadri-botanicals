import lavender from "../assets/images/lavender.webp";
import teaTree from "../assets/images/tea-tree.webp";
import peppermint from "../assets/images/peppermint.webp";

const SELECTIONS = [
  { name: "Organic Lavender Oil", description: "Experience the calming benefits of our Organic Lavender Oil. Perfect for cosmetics and personal care products, it promotes relaxation and enhances overall wellness.", image: lavender       },
  { name: "Pure Tea Tree Oil", description: "Harness the antiseptic power of our Pure Tea Tree Oil. Ideal for skincare formulations, it helps maintain skin health and clarity, making it a must-have for personal care brands.", image: teaTree },
  { name: "Refreshing Peppermint Oil", description: "Invigorate your products with our Refreshing Peppermint Oil. Its uplifting aroma and beneficial properties make it perfect for aromatherapy and wellness-related applications.", image: peppermint },
];

export default function PremiumSelections() {
  return (
    <section className="bg-brand-dark py-16 text-brand-cream sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Discover Our Premium Selections</h2>
        <div className="mt-10 flex flex-col gap-10">
          {SELECTIONS.map((item, index) => (
            <div key={item.name} className={`flex flex-col items-center gap-6 sm:gap-8 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <img src={item.image} alt={item.name} className="aspect-video w-full rounded-xl object-cover md:aspect-4/3 md:w-72 md:shrink-0" loading="lazy" />
              <div>
                <h3 className="font-display text-xl font-medium sm:text-2xl">{item.name}</h3>
                <p className="mt-3 max-w-xl text-brand-cream/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}