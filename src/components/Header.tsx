import { Button } from "@/components/ui/button";
import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/contexts/ThemeContext";
import { Zap, Menu, ChevronRight } from "lucide-react";

const Header = () => {
  const { currentTheme } = useTheme();

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
          <a href="#" className="text-primary font-medium">
            Главная
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            О нас
          </a>
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Проекты
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </a>
          {/* <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Тарифы
          </a> */}
          {/* <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Блог
          </a> */}
          {/* <div className="relative group">
            <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Страницы
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div> */}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* <ThemeSelector /> */}
          <Button
            className="app-button-primary btn-contact-wrap hidden md:inline-flex items-center gap-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Связаться
            <span className="btn-contact-circle">
              <ChevronRight className="w-4 h-4" />
            </span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;