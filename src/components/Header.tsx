import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-foreground">DevCorp</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            О нас
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Услуги
          </a>
          <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
            Преимущества
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>
        
        <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
          Связаться с нами
        </Button>
      </div>
    </header>
  );
};

export default Header;