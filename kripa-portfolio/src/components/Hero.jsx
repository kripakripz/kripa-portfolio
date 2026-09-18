import HeroCanvas from './HeroCanvas.jsx';
import { tagStrip } from '../data.js';

export default function Hero() {
  return (
    <header className="relative pt-16 overflow-hidden text-ink">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="hero-fade">
         
          <h1 className="font-sora font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-[58px]">
            Hi, I'm Kripa —<br />I build <span className="text-red">scalable</span><br />front-ends.
          </h1>
          <p className="mt-6 text-inksoft text-base max-w-md">
            A Front-End Developer with 2+ years crafting responsive, component-driven web apps in Angular and React — now extending into full-stack with the MERN stack.
          </p>
          <div className="flex gap-4 mt-9 flex-wrap">
            <a href="#projects" className="text-sm font-semibold bg-red text-white px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red/30 transition">
              View my work →
            </a>
            <a href="#contact" className="text-sm font-semibold border border-border px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:border-inksoft transition">
              Contact me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center hero-fade">
         <div
            className="relative w-full max-w-[360px] aspect-[3/4] overflow-hidden flex items-center justify-center"
             style={{ background: 'transparent' }}
          >
            <HeroCanvas />
            <img
              src="/assets/kripa-portrait.png"
              alt="Kripa Kunjumon"
              className="relative z-10 rounded-full"
              style={{
                width: '76%',
                height: '76%',
                objectFit: 'contain',
                boxShadow: '0 0 0 1px rgba(255,45,61,0.25)',
              }}
            />
          </div>

          
        </div>
      </div>

      <div className="mt-20 border-t border-b border-border bg-bgalt overflow-hidden relative z-10">
        <div className="flex gap-3.5 py-[18px] w-max tagstrip-track">
          {[...tagStrip, ...tagStrip].map((t, i) => (
            <span key={i} className="font-mono text-xs text-inksoft border border-border px-[18px] py-2 rounded-full whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
