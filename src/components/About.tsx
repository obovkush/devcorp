import { Award, Target, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div ref={elementRef} className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'scroll-fade-up' : ''}`}>
            <div className="text-center mb-16">
              <h2 className="section-title text-foreground mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы предоставляем услуги разработки с использованием
                передовых технологий.
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Опыт разработки более 10 лет.
              </p>
            </div>
            {/* <div className="space-y-6">
              <h2 className="section-title text-foreground">
                Опыт разработки более{" "}
                <span className="text-primary">
                  10 лет
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                 SOLARM Tech — помогаем технологиям помогать людям.
              </p>

            </div> */}

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="subsection-title text-foreground mb-2">Миссия</h3>
                  <p className="text-muted-foreground">
                    Делать полезные сервисы доступными, понятными и выгодными для каждого.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="subsection-title text-foreground mb-2">Качество</h3>
                  <p className="text-muted-foreground">
                    Высочайшие стандарты разработки и обслуживания в каждом проекте.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="subsection-title text-foreground mb-2">Забота</h3>
                  <p className="text-muted-foreground">
                    Персональный подход и поддержка наших клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          {/* <div className="grid grid-cols-2 gap-6">
            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">70K+</div>
              <div>
                <h3 className="font-roboto-medium text-foreground">Активных пользователей</h3>
                <p className="text-sm text-muted-foreground">Растем каждый день</p>
              </div>
            </div>

            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">56</div>
              <div>
                <h3 className="font-roboto-medium text-foreground">Стран работы</h3>
                <p className="text-sm text-muted-foreground">По всему миру</p>
              </div>
            </div>

            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">24/7</div>
              <div>
                <h3 className="font-roboto-medium text-foreground">Поддержка</h3>
                <p className="text-sm text-muted-foreground">Всегда на связи</p>
              </div>
            </div>

            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">99.9%</div>
              <div>
                <h3 className="font-roboto-medium text-foreground">Аптайм</h3>
                <p className="text-sm text-muted-foreground">Стабильность</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;