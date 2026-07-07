import type { ReactNode } from "react";

type PolicyLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function PolicyLayout({ title, updated, children }: PolicyLayoutProps) {
  return (
    <>
      <section className="bg-brand-dark px-4 py-16 text-center text-brand-cream sm:px-6 sm:py-20 lg:px-8">
        <h1 className="font-display text-4xl font-medium sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-brand-cream/60">Last updated: {updated}</p>
      </section>
      <section className="bg-brand-cream py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-brand-dark/85 sm:px-6 lg:px-8 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-brand-dark [&_h2:first-child]:mt-0 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1.5 [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </section>
    </>
  );
}