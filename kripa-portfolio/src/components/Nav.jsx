export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <a href="#" className="font-sora font-bold text-lg text-ink hover:opacity-80 transition">kripa kunjumon<span className="text-red">.</span></a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-inksoft">
          <a href="#about" className="hover:text-ink transition">About</a>
          <a href="#stack" className="hover:text-ink transition">Stack</a>
          <a href="#experience" className="hover:text-ink transition">Experience</a>
          <a href="#projects" className="hover:text-ink transition">Projects</a>
          <a href="#contact" className="hover:text-ink transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}
