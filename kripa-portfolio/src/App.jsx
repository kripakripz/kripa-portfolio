import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stack from './components/Stack.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Hero entrance animation
    gsap.fromTo(
      '.hero-fade',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out' }
    );

    // Scroll-triggered reveal for each section
    const triggers = [];
    document.querySelectorAll('.reveal').forEach((el) => {
      const st = gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        }
      );
      triggers.push(st);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
