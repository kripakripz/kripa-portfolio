export default function Contact() {
  return (
    <footer id="contact" className="py-28 text-center reveal text-ink">
      <div className="max-w-6xl mx-auto px-8">
        <div className="font-mono text-xs text-red mb-3 flex justify-center">// contact</div>
           <h2 className="font-sora font-extrabold text-3xl sm:text-5xl tracking-tight max-w-2xl mx-auto mb-4">
           Let's build something <span className="text-red">scalable</span>.
           </h2>
           <p className="text-inksoft text-base max-w-md mx-auto mb-8">
               Have a role in mind, a project to discuss, or just want to say hi? My inbox is always open.
           </p>
        <div className="flex justify-center gap-3.5 flex-wrap mb-16">
          <a
            href="mailto:kripakripzia@gmail.com"
            className="text-sm font-semibold bg-red text-white px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition"
          >
            kripakripzia@gmail.com
          </a>
          <a
            href="tel:+919744487440"
            className="text-sm font-semibold border border-border px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:border-inksoft transition"
          >
            +91 97444 87440
          </a>
          <a
            href="https://linkedin.com/in/kripa-kunjumon291b35314"
            target="_blank"
            rel="noopener"
            className="text-sm font-semibold border border-border px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:border-inksoft transition"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="font-mono text-xs text-inksoft pt-6 border-t border-border">
             © 2026 Kripa Kunjumon · Bengaluru, India · built with React, Tailwind CSS, GSAP &amp; Three.js
        </div>
      </div>
    </footer>
  );
}
