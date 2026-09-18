import Section from './Section.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="// projects" title="Projects worth showing.">
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 hover:border-red hover:-translate-y-1 transition"
          >
            <span className="font-mono text-[11.5px] text-red bg-red/10 px-3 py-1.5 rounded-full self-start">
              {project.tag}
            </span>
            <div className="font-sora font-bold text-xl">{project.name}</div>
            <div className="text-sm text-inksoft">{project.desc}</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, i) => (
                <span key={i} className="font-mono text-[11.5px] text-inksoft bg-bg border border-border px-3 py-1.5 rounded-lg">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-red text-white px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition text-center"
              >
                Live Demo ↗
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold border border-border px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:border-inksoft transition text-center"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}