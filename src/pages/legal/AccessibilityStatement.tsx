import PolicyLayout from "../../components/PolicyLayout";

export default function AccessibilityStatement() {
  return (
    <PolicyLayout title="Accessibility Statement" updated="July 2026">
      <p>
        Seshadri Botanicals is committed to ensuring digital accessibility
        for people of all abilities. We are continually improving the user
        experience for everyone and applying relevant accessibility
        standards.
      </p>

      <h2>Our Standard</h2>
      <p>
        This website aims to conform to the Web Content Accessibility
        Guidelines (WCAG) 2.2, Level AA. These guidelines explain how to make
        web content more accessible for people with disabilities.
      </p>

      <h2>Measures We Take</h2>
      <ul>
        <li>Visible focus indicators for keyboard navigation.</li>
        <li>Descriptive alt text for meaningful images.</li>
        <li>Sufficient colour contrast between text and backgrounds.</li>
        <li>Semantic, structured page headings and landmarks.</li>
      </ul>

      <h2>Feedback</h2>
      <p>
        If you encounter any accessibility barriers on this website, please
        let us know at{" "}
        <a href="mailto:info@seshadribotanicals.com">info@seshadribotanicals.com</a>{" "}
        &mdash; include the page and a description of the issue, and we will
        do our best to address it.
      </p>
    </PolicyLayout>
  );
}