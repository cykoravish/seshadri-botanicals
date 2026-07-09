import PolicyLayout from "../../components/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" updated="July 2026">
      <p>
        Seshadri Botanicals (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
        privacy. This policy explains what information we collect through this
        website and how we use it.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you submit an inquiry through our contact form, we collect the
        information you provide &mdash; your name, email address, and
        message. We do not require account registration, and this is a
        static informational website with no e-commerce checkout, payment
        processing, or login functionality.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to product inquiries and quote requests.</li>
        <li>To communicate about bulk, wholesale, or private-label orders.</li>
        <li>To improve our website and product offerings.</li>
      </ul>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        We may use basic, privacy-respecting analytics to understand overall
        site traffic (e.g. which pages are visited). We do not use this data
        to build individual profiles for advertising purposes.
      </p>

      <h2>Third Parties</h2>
      <p>
        We do not sell or rent your personal information to third parties. We
        may share information with logistics or documentation partners only
        as necessary to fulfil an order you have requested.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of any personal
        information you have submitted to us by emailing{" "}
        <a href="mailto:seshadribotanicals@gmail.com">seshadribotanicals@gmail.com</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted
        on this page with a revised &ldquo;last updated&rdquo; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:seshadribotanicals@gmail.com">seshadribotanicals@gmail.com</a>.
      </p>
    </PolicyLayout>
  );
}