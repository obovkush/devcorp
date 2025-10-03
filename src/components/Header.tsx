import { Button } from "@/components/ui/button";
import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/contexts/ThemeContext";
import { Zap, Menu, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { currentTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/95 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-ksbistra text-foreground">SOLARM Tech</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }}
            className="text-primary font-medium"
          >
            Главная
          </button>
          <button
            onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            О нас
          </button>
          <button
            onClick={() => { document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Проекты
          </button>
          <button
            onClick={() => { document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Отзывы
          </button>
          <button
            onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Контакты
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
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
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
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
              className="flex items-center justify-between w-full text-left py-3 px-3 rounded-lg text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              Главная
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
              className="flex items-center justify-between w-full text-left py-3 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              О нас
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
              className="flex items-center justify-between w-full text-left py-3 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              Проекты
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
              className="flex items-center justify-between w-full text-left py-3 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              Отзывы
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); closeMobileMenu(); }}
              className="flex items-center justify-between w-full text-left py-3 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
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