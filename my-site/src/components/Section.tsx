type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, subtitle, children, className }: Props) {
  return (
    <section className={className}>
      <div className="mb-6">
        {eyebrow && (
          <div className="mb-2 text-xs uppercase tracking-widest text-brand-300">
            {eyebrow}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-2 text-[color:var(--muted)]">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
