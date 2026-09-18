import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="Tools I reach for daily.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {skills.map((s, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 hover:border-red hover:-translate-y-1 transition">
            <div className="font-sora font-bold text-sm mb-1">{s.n}</div>
            <div className="text-xs text-inksoft">{s.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
