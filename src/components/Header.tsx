import { Button } from "@/components/ui/button";
// import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/contexts/ThemeContext";
import { Zap, Menu, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const Header = () => {
  // const { currentTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const sectionIds = useMemo(() => ["about", "services", "portfolio", "contact"], []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const headerOffset = 100; // approximate header height + padding

    const updateActive = () => {
      const current = window.scrollY + headerOffset;
      // Build list of sections with their offsetTop
      const sections: { id: string; top: number }[] = [];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) sections.push({ id, top: el.offsetTop });
      }

      // Find the last section whose top is above current scroll
      const active = sections
        .filter((s) => s.top <= current)
        .sort((a, b) => a.top - b.top)
        .slice(-1)[0];

      if (!active) {
        setActiveSection("home");
      } else {
        setActiveSection(active.id);
      }
    };

    // Initial and event bindings
    updateActive();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };
    const onResize = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [sectionIds]);

  const linkClass = (id: string, isHome?: boolean) =>
    id === activeSection || (isHome && activeSection === "home")
      ? "text-foreground font-medium"
      : "text-muted-foreground hover:text-foreground transition-colors";

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/95 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex md:grid md:grid-cols-3 items-center justify-between md:justify-stretch">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3 justify-start">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center">
            <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </div>
          <span className="text-lg md:text-2xl font-ksbistra text-foreground">SOLARM Tech</span>
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center space-x-8">
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }}
            className={linkClass("home", true)}
          >
            Главная
          </button>
          <button
            onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className={linkClass("services")}
          >
            Услуги
          </button>
          <button
            onClick={() => { document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className={linkClass("portfolio")}
          >
            Проекты
          </button>
          <button
            onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className={linkClass("about")}
          >
            О нас
          </button>
          <button
            onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className={linkClass("contact")}
          >
            Контакты
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          {/* <ThemeSelector /> */}
          <Button
            className="app-button-primary btn-contact-wrap hidden md:inline-flex items-center gap-3"
            onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
          >
            Связаться
            <span className="btn-contact-circle">
              <ChevronRight className="w-4 h-4" />
            </span>
          </Button>

          {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden [&_svg]:size-7"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
          {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 w-80 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg z-40">
          <div className="px-6 py-6 space-y-3">
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }}
                  className={`flex items-center justify-between w-full text-left py-3 px-3 rounded-lg ${linkClass('home', true)} hover:bg-primary/10`}
            >
              Главная
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
                  className={`flex items-center justify-between w-full text-left py-3 px-3 rounded-lg ${linkClass('services')} hover:bg-primary/10`}
            >
              Услуги
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
                  className={`flex items-center justify-between w-full text-left py-3 px-3 rounded-lg ${linkClass('portfolio')} hover:bg-primary/10`}
            >
              Проекты
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
                  className={`flex items-center justify-between w-full text-left py-3 px-3 rounded-lg ${linkClass('about')} hover:bg-primary/10`}
            >
              О нас
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
                  className={`flex items-center justify-between w-full text-left py-3 px-3 rounded-lg ${linkClass('contact')} hover:bg-primary/10`}
            >
              Контакты
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;