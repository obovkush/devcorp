import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      title: "Веб-разработка",
      description: "Создание современных веб-приложений и сайтов с использованием актуальных технологий",
      icon: "💻"
    },
    {
      title: "Мобильные приложения",
      description: "Разработка нативных и кроссплатформенных мобильных приложений",
      icon: "📱"
    },
    {
      title: "Корпоративные системы",
      description: "Комплексные решения для автоматизации бизнес-процессов",
      icon: "🏢"
    },
    {
      title: "API и интеграции",
      description: "Разработка API и интеграция с внешними сервисами",
      icon: "🔗"
    },
    {
      title: "Консалтинг",
      description: "Техническое консультирование и аудит существующих решений",
      icon: "💡"
    },
    {
      title: "Поддержка",
      description: "Техническая поддержка и сопровождение готовых продуктов",
      icon: "🛠️"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${servicesImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки от идеи до готового продукта
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;