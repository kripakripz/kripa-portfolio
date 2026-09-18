import Section from './Section.jsx';

export default function About() {
  return (
    <Section id="about" eyebrow="// about" title="Two years of shipping interfaces that hold up.">
      <div className="grid md:grid-cols-2 gap-14">
        <p className="text-inksoft text-base leading-relaxed">
          I build responsive, component-driven web applications — mostly in Angular, with growing depth in React
          and the MERN stack. My work has spanned client-facing UI builds, REST API integration, and applications
          where validation and data integrity actually matter.
        </p>
        <p className="text-inksoft text-base leading-relaxed">
          Most recently at Strokx Technologies, I worked across the front-end architecture of production apps —
          data binding, directives, lifecycle hooks — while collaborating with cross-functional teams to ship
          features that held up across browsers and devices. Right now I'm extending that into full-stack work
          through MERN, and looking for my next SDE or full-stack role.
        </p>
      </div>
    </Section>
  );
}
