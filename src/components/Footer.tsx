import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const POLICY_LINKS = ["Privacy Policy", "Shipping Policy", "Terms & Conditions", "Refund Policy"];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <path d="M15 8h2V5h-2a4 4 0 0 0-4 4v2H9v3h2v7h3v-7h2.2l.8-3H14V9a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.6" fill="currentColor" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export default function Footer() {
  return (
   <footer className="bg-brand-dark text-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-medium">
              <Leaf className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              Seshadri Botanicals
            </Link>
            <p className="mt-3 text-sm text-brand-cream/75">Nature&rsquo;s Purity. Global Quality. Trusted Worldwide.</p>
            <div className="mt-4 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-brand-cream/70 hover:text-brand-cream"><InstagramIcon className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-brand-cream/70 hover:text-brand-cream"><FacebookIcon className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-brand-cream/70 hover:text-brand-cream"><LinkedinIcon className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-cream/60">Contact</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><a href="mailto:info@seshadribotanicals.com" className="hover:underline">info@seshadribotanicals.com</a></li>
              <li>+91 XXXXX XXXXX</li>
              <li>India</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-cream/60">Explore</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><Link to="/shop" className="hover:underline">Shop All</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-cream/60">Policies</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-brand-cream/75">
              {POLICY_LINKS.map((label) => <li key={label}>{label}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-cream/15 pt-6 text-xs text-brand-cream/60">
          &copy; {new Date().getFullYear()} Seshadri Botanicals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}