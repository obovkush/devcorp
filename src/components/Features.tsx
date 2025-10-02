import { Shield, Zap, Users, Globe, Clock, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Безопасность банковского уровня",
      description: "Многоуровневая система защиты данных с шифрованием военного стандарта",
      color: "text-emerald-500"
    },
    {
      icon: Zap,
      title: "Молниеносные транзакции",
      description: "Обработка платежей в режиме реального времени с гарантией доставки",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Персональный сервис",
      description: "Индивидуальный подход к каждому клиенту с персональным менеджером",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Глобальное покрытие",
      description: "Работаем в 56 странах мира с поддержкой всех основных валют",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Круглосуточная поддержка",
      description: "Техническая поддержка 24/7 на 15 языках мира",
      color: "text-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Аналитика и инсайты",
      description: "Продвинутая аналитика расходов с ИИ-рекомендациями по оптимизации",
      color: "text-green-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предоставляем услуги разработки с использованием
            передовых технологий
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="app-card p-6 space-y-4 group transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="subsection-title text-foreground">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Features;