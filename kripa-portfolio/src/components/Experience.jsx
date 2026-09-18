import Section from './Section.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <Section id="experience" alt eyebrow="// experience" title="Where I've worked.">
      <div className="flex flex-col">
        {experience.map((e, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-[140px_1fr] gap-7 py-8 border-t border-border ${
              i === experience.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="font-mono text-xs text-inksoft pt-0.5">{e.date}</div>
            <div>
              <div className="font-sora font-bold text-lg">{e.role}</div>
              <div className="text-red text-sm font-semibold my-1 mb-3">{e.co}</div>
              <ul className="flex flex-col gap-2 max-w-xl">
                {e.points.map((p, j) => (
                  <li key={j} className="text-sm text-inksoft pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-red"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
