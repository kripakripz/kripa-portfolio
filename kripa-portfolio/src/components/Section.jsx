export default function Section({ id, alt, eyebrow, title, sub, children }) {
  return (
    <section id={id} className={`py-24 reveal text-ink ${alt ? 'bg-bgalt' : ''}`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-12">
          <div className="font-mono text-xs text-red mb-3">{eyebrow}</div>
          <h2 className="font-sora font-bold text-3xl md:text-4xl tracking-tight max-w-xl">{title}</h2>
          {sub && <p className="mt-3 text-inksoft max-w-md">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
