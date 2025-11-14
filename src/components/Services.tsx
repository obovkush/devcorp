import { Code, Smartphone, Building2, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { currentTheme } = useTheme();
  const { elementRef, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: "Веб-разработка",
      description: "Создаем современные веб-приложения для роста бизнеса.",
      features: [
        "Адаптивный дизайн для всех устройств",
        "Высокая производительность и скорость загрузки",
        "Безопасность и защита данных",
        "Интеграция с внешними сервисами и API"
      ],
      benefits: "От консалтинга до запуска — полный цикл разработки с поддержкой на всех этапах."
    },
    {
      icon: Smartphone,
      title: "Мобильные приложения",
      description: "Разрабатываем нативные и кроссплатформенные приложения.",
      features: [
        "iOS и Android разработка",
        "Кроссплатформенные решения (Kotlin Multi Platform)",
        "Интуитивный UX/UI дизайн",
        "Интеграция платежей и аналитики"
      ],
      benefits: "От идеи до публикации в App Store и Google Play — приложения, которые скачивают и используют ежедневно."
    },
    {
      icon: Building2,
      title: "Корпоративные системы",
      description: "Строим масштабируемые корпоративные решения.",
      features: [
        "Системы управления документооборотом",
        "CRM и ERP интеграции",
        "Платформы для командной работы",
        "Безопасное хранение и обработка данных"
      ],
      benefits: "Централизованное управление бизнес-процессами с аналитикой и отчетностью в реальном времени."
    },
    {
      icon: Zap,
      title: "Автоматизация бизнес-процессов",
      description: "Устраняем рутину и повышаем продуктивность команды.",
      features: [
        "Автоматизация рабочих процессов",
        "Интеграция между системами",
        "Автоматические отчеты и уведомления",
        "Мониторинг и аналитика процессов"
      ],
      benefits: "Экономия времени сотрудников, упрощая рутинные задачи и фокусируясь на стратегических целях."
    }
  ];

  const getSectionClass = () => {
    switch (currentTheme) {
      case 'neomorphism':
        return "py-20 bg-background";
      default:
        return "py-20 bg-muted/30";
    }
  };

  return (
    <section id="services" className={getSectionClass()}>
      <div ref={elementRef} className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
          <h2 className="section-title text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Комплексные решения для цифровой трансформации вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`app-card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col ${isVisible ? 'scroll-fade-up' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="flex items-start md:h-32 md:items-center">
                    <div className="flex items-start gap-3 md:gap-4 w-full">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <CardTitle className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight break-words">
                                {service.title}
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed min-h-[4.5rem] md:min-h-[3rem]">
                                {service.description}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic min-h-[3rem]">
                      {service.benefits}
                    </p>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button
                      className="app-button-primary w-full group/btn"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Обсудить проект
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
