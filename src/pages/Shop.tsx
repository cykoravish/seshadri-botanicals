import { useRef, useState } from "react";
import { DIVISIONS } from "../data/products";

export default function Shop() {
  const [activeId, setActiveId] = useState(DIVISIONS[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = DIVISIONS.findIndex((d) => d.id === activeId);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + delta + DIVISIONS.length) % DIVISIONS.length;
    setActiveId(DIVISIONS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  const active = DIVISIONS[activeIndex];

  return (
    <>
      <section className="bg-brand-dark px-4 py-16 text-center text-brand-cream sm:px-6 sm:py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-olive">Our Product Range</p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
          Shop All Products
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-brand-cream/75">
          Browse our full catalogue across essential oils &amp; botanicals,
          specialty chemicals, and dehydrated foods. All products are
          available for bulk, wholesale and private-label supply.
        </p>
      </section>

      <section className="bg-brand-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div role="tablist" aria-label="Product divisions" className="flex flex-wrap gap-2">
            {DIVISIONS.map((division, index) => {
              const isActive = division.id === activeId;
              return (
                <button
                  key={division.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  id={`tab-${division.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${division.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(division.id)}
                  onKeyDown={handleKeyDown}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-dark text-brand-cream"
                      : "bg-white/60 text-brand-dark/70 hover:bg-white"
                  }`}
                >
                  {division.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            tabIndex={0}
            className="mt-8"
          >
            <p className="max-w-2xl text-brand-dark/75">{active.intro}</p>

            <div className="mt-8 flex flex-col gap-8">
              {active.categories.map((category) => (
                <div key={category.name}>
                  <h2 className="font-display text-xl font-medium">{category.name}</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-brand-dark/15 bg-white/50 px-3.5 py-1.5 text-sm text-brand-dark/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}