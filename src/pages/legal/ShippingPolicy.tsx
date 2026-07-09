import PolicyLayout from "../../components/PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy" updated="July 2026">
      <p>
        Seshadri Botanicals supplies customers worldwide across essential
        oils &amp; botanicals, specialty chemicals, and dehydrated foods.
        Shipping terms are agreed on a per-order basis and summarized below.
      </p>

      <h2>Shipping Methods</h2>
      <ul>
        <li><strong>Air Freight</strong> &mdash; for urgent shipments and smaller quantities.</li>
        <li><strong>Sea Freight</strong> &mdash; for bulk and full-container shipments.</li>
        <li><strong>Courier Services</strong> &mdash; for samples, documentation, and small-volume orders.</li>
      </ul>

      <h2>Documentation</h2>
      <p>
        Depending on the product and destination, we can provide a
        Commercial Invoice, Packing List, Certificate of Analysis (COA),
        Technical Data Sheet (TDS), Material Safety Data Sheet (MSDS),
        Certificate of Origin, and Phytosanitary Certificate where
        applicable.
      </p>

      <h2>Customs &amp; Duties</h2>
      <p>
        Import duties, taxes, and customs clearance in the destination
        country are the responsibility of the buyer, unless otherwise agreed
        in writing.
      </p>

      <h2>Delivery Timelines</h2>
      <p>
        Timelines vary by product, order volume, destination, and shipping
        method, and will be confirmed at the time of quotation. Delays caused
        by customs authorities or carriers are outside our control.
      </p>

      <h2>Contact</h2>
      <p>
        For shipping questions on a specific order, contact{" "}
        <a href="mailto:seshadribotanicals@gmail.com">seshadribotanicals@gmail.com</a>.
      </p>
    </PolicyLayout>
  );
}