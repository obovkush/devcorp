import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.avif";

const Hero = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            {/* <div className="flex justify-center lg:justify-start">
              <div className="app-badge inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Новое: Интеграция с ИИ запускается 01 января 2025
              </div>
            </div> */}

            {/* Main Heading */}
            <h1 className="font-roboto text-4xl md:text-6xl lg:text-5xl font-bold text-foreground leading-tight text-center lg:text-center">
              Профессиональная разработка <br/> для частных лиц и компаний
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground text-center">
              Создаем инновационные решения для вашего будущего. <br/>
              Современные технологии и надежность в каждом проекте.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                className="app-button-primary btn-contact-wrap btn-cta"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Начать проект
                <span className="btn-contact-circle">
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </span>
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="app-stats">70K</div>
                <p className="text-muted-foreground">Транзакций</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="app-stats">56</div>
                <p className="text-muted-foreground">Стран работы</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="app-stats flex items-center justify-center lg:justify-start">
                  24/7
                </div>
                <p className="text-muted-foreground">Поддержка</p>
              </div>
            </div> */}
          </div>

          {/* Right Content - App Interface Mock */}
          {/* <div className="relative animate-slide-up"> */}
            {/* Main Card */}
            {/* <div className="app-card p-6 space-y-6"> */}
              {/* Join the future input */}
              {/* <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <input
                  type="text"
                  placeholder="Присоединиться к будущему"
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
                <Button size="sm">
                  Go
                </Button>
              </div> */}

              {/* Bank Card */}
              {/* <div className="bg-primary p-6 rounded-2xl text-white space-y-4">
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
              </div> */}

              {/* Features */}
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">Безопасность</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">Команда</span>
                </div>
              </div> */}
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;