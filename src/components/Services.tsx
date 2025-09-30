import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const { currentTheme } = useTheme();
  const services = [
    {
      title: "Банковские системы",
      description: "Разработка комплексных банковских платформ с интернет-банкингом и мобильными приложениями",
      icon: "🏛️"
    },
    {
      title: "Платежные решения",
      description: "Создание безопасных платежных систем с поддержкой различных методов оплаты",
      icon: "💳"
    },
    {
      title: "Блокчейн технологии",
      description: "Внедрение блокчейн-решений, криптовалютных платформ и DeFi протоколов",
      icon: "⛓️"
    },
    {
      title: "ИИ и аналитика",
      description: "Системы машинного обучения для скоринга, фрод-мониторинга и предиктивной аналитики",
      icon: "🤖"
    },
    {
      title: "Кибербезопасность",
      description: "Комплексные решения по защите финансовых данных и соответствию регуляторным требованиям",
      icon: "🛡️"
    },
    {
      title: "Консалтинг",
      description: "Стратегическое планирование цифровой трансформации финансовых услуг",
      icon: "💡"
    }
  ];

  const getCardClass = () => {
    switch (currentTheme) {
      case 'neomorphism':
        return "neo-card bg-card backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-slide-up";
      default:
        return "bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up";
    }
  };

  const getSectionClass = () => {
    switch (currentTheme) {
      case 'neomorphism':
        return "py-20 relative bg-background";
      default:
        return "py-20 relative";
    }
  };

  return (
    <section id="services" className={getSectionClass()}>
      {/* Background - only for tech theme */}
      {currentTheme === 'tech' && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${servicesImage})` }}
        />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Финтех решения
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Комплексные финансовые технологии от концепции до внедрения. 
            Создаем безопасные, масштабируемые и инновационные решения для финансовой индустрии
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="banking-card p-6 space-y-4 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;