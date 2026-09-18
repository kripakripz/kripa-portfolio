import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <a href="#" className="font-sora font-bold text-lg text-ink hover:opacity-80 transition">
          kripa kunjumon<span className="text-red">.</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-inksoft">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition">
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 w-7 h-7 items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-8 pb-6 text-sm font-medium text-inksoft border-t border-border">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 hover:text-ink transition border-b border-border last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}