export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <div className="font-sora font-bold text-lg text-ink">kripa kunjumon<span className="text-red">.</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-inksoft">
          <a href="#about" className="hover:text-ink transition">About</a>
          <a href="#stack" className="hover:text-ink transition">Stack</a>
          <a href="#experience" className="hover:text-ink transition">Experience</a>
          <a href="#projects" className="hover:text-ink transition">Projects</a>
        </div>

      </div>
    </nav>
  );
}
