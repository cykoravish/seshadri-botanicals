import PolicyLayout from "../../components/PolicyLayout";

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy" updated="July 2026">
      <p>
        As a bulk, wholesale, and private-label supplier, our refund and
        returns process is handled per individual sales agreement or
        purchase order rather than a fixed retail policy.
      </p>

      <h2>Damaged or Defective Goods</h2>
      <p>
        Claims for damaged, defective, or mis-specified goods must be
        reported within 7 days of delivery, with supporting evidence
        (photos, batch numbers, and Certificate of Analysis discrepancies
        where relevant).
      </p>

      <h2>Custom &amp; Private-Label Orders</h2>
      <p>
        Orders involving custom formulations, custom packaging, or private
        labeling are non-refundable once production has begun, except where
        the goods do not conform to agreed specifications.
      </p>

      <h2>Bulk &amp; Container Orders</h2>
      <p>
        Refunds or replacements for bulk/container-load orders are assessed
        case-by-case in line with the terms agreed at the time of purchase.
      </p>

      <h2>How to Request a Refund or Replacement</h2>
      <p>
        Contact our team at{" "}
        <a href="mailto:info@seshadribotanicals.com">info@seshadribotanicals.com</a>{" "}
        with your order details and supporting documentation, and we will
        review your request promptly.
      </p>
    </PolicyLayout>
  );
}