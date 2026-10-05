import Chips from "../components/Chips";
import { PACKAGING, DOCUMENTS, EXPORT_MARKETS } from "../data/products";

export default function SupplyDetails() {
  return (
    <section className="bg-brand-sage py-16 text-brand-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium sm:text-3xl">Packaging Options</h2>
            <p className="mt-3 max-w-xl text-brand-dark/75">
              Packaging varies according to product type, specification, transportation requirements, and order quantity.
            </p>
            <Chips items={PACKAGING} className="mt-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium sm:text-3xl">Documentation Available</h2>
            <p className="mt-3 max-w-xl text-brand-dark/75">
              Depending on the product, supplier, and customer requirements, documentation may include:
            </p>
            <Chips items={DOCUMENTS} className="mt-5" />
          </div>
        </div>
        <div className="mt-14">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Export Markets</h2>
          <p className="mt-3 max-w-2xl text-brand-dark/75">
            We aim to serve customers across international markets. Export availability and shipment terms depend on the
            specific product, destination country, regulatory requirements, order quantity, and applicable transportation restrictions.
          </p>
          <Chips items={EXPORT_MARKETS} className="mt-5" />
        </div>
      </div>
    </section>
  );
}
