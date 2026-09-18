import Section from './Section.jsx';
import { roots } from '../data.js';

export default function Stack() {
  return (
    <Section id="stack" alt eyebrow="// core build map" title="Where I operate across the stack.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {roots.map((r, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-red hover:-translate-y-1 transition">
            <span className="font-mono text-[11px] text-red block mb-3.5">{r.tag}</span>
            <div className="font-sora font-bold text-[17px] mb-2">{r.name}</div>
            <div className="text-[13px] text-inksoft mb-4.5">{r.desc}</div>
            <span className="font-mono text-[11px] bg-bg border border-border px-3 py-1.5 rounded-lg inline-block">
              {r.stack}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
