import { Award, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Превосходя ожидания более{" "}
                <span className="text-primary">
                  10 лет
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                 SOLARM Tech — это не просто финансовая платформа. Мы создаем экосистему,
                которая помогает людям и бизнесу достигать финансовых целей,
                используя передовые технологии и индивидуальный подход.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Миссия</h3>
                  <p className="text-muted-foreground">
                    Делать финансовые услуги доступными, понятными и выгодными для каждого.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Качество</h3>
                  <p className="text-muted-foreground">
                    Высочайшие стандарты разработки и обслуживания в каждом проекте.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Забота</h3>
                  <p className="text-muted-foreground">
                    Персональный подход и круглосуточная поддержка наших клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">70K+</div>
              <div>
                <h3 className="font-semibold text-foreground">Активных пользователей</h3>
                <p className="text-sm text-muted-foreground">Растем каждый день</p>
              </div>
            </div>

            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">56</div>
              <div>
                <h3 className="font-semibold text-foreground">Стран работы</h3>
                <p className="text-sm text-muted-foreground">По всему миру</p>
              </div>
            </div>

            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">24/7</div>
              <div>
                <h3 className="font-semibold text-foreground">Поддержка</h3>
                <p className="text-sm text-muted-foreground">Всегда на связи</p>
              </div>
            </div>

            <div className="app-card p-6 text-center space-y-4">
              <div className="app-stats">99.9%</div>
              <div>
                <h3 className="font-semibold text-foreground">Аптайм</h3>
                <p className="text-sm text-muted-foreground">Стабильность</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;