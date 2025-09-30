import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";

const Hero = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 banking-orb rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 banking-orb rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 banking-orb rounded-full"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="banking-badge inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Новое: Интеграция с ИИ запускается 01 января 2025
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-center lg:text-left">
              Превосходство в{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                финансовых
              </span>{" "}
              технологиях
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center lg:text-left">
              Создаем инновационные финансовые решения для вашего будущего. 
              Передовые технологии, безопасность и надежность в каждом проекте.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                className="banking-button-primary group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Начать работу
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="banking-stats">70K</div>
                <p className="text-muted-foreground">Транзакций</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="banking-stats">56</div>
                <p className="text-muted-foreground">Стран работы</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="banking-stats flex items-center justify-center lg:justify-start">
                  24/7
                </div>
                <p className="text-muted-foreground">Поддержка</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Banking Interface Mock */}
          <div className="relative animate-slide-up">
            {/* Main Card */}
            <div className="banking-card p-6 space-y-6">
              {/* Join the future input */}
              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <input 
                  type="text" 
                  placeholder="Присоединиться к будущему"
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Go
                </Button>
              </div>
              
              {/* Bank Card */}
              <div className="bg-gradient-primary p-6 rounded-2xl text-white space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-white/80 text-sm">Credit Card No.</p>
                    <p className="text-lg font-bold">1602 0911 2019 2021</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-white/30"></div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/80 text-sm">Name</p>
                    <p className="font-semibold">Иванов Алексей</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Exp</p>
                    <p className="font-semibold">09/11</p>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">Безопасность</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">Команда</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;