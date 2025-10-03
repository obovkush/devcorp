import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Алексей Петров",
      position: "CEO, FinTech Startup",
      company: "Банковские решения",
      content: "SOLARM Tech создали для нас комплексную платформу платежей за рекордно короткое время. Команда профессионалов высокого уровня.",
      rating: 5,
      avatar: "АП"
    },
    {
      name: "Мария Сидорова",
      position: "CTO, Blockchain Company",
      company: "Блокчейн технологии",
      content: "Отличное техническое решение и подход к разработке. Рекомендует всем, кто ищет надежного технологического партнера.",
      rating: 5,
      avatar: "МС"
    },
    {
      name: "Дмитрий Козлов",
      position: "Директор по IT, Консалтинг",
      company: "Корпоративные системы",
      content: "Прекрасная работа с нашим проектом ИИ-аналитики. Система работает стабильно и обеспечивает точные прогнозы.",
      rating: 5,
      avatar: "ДК"
    },
    {
      name: "Анна Волкова",
      position: "Продуктовый менеджер",
      company: "Мобильные приложения",
      content: "SOLARM Tech помогли нам выйти на рынок с инновационным приложением. Отличная поддержка на каждом этапе разработки.",
      rating: 5,
      avatar: "АВ"
    },
    {
      name: "Сергей Морозов",
      position: "Основатель, E-commerce",
      company: "Веб-платформы",
      content: "Быстрая разработка высококачественного решения. Особенно впечатлила глубина технической экспертизы команды.",
      rating: 5,
      avatar: "СМ"
    },
    {
      name: "Елена Новикова",
      position: "HR Director, Tech Corp",
      company: "HR-системы",
      content: "Профессиональный подход к интеграции с существующими системами. Рекомендует для сложных корпоративных задач.",
      rating: 5,
      avatar: "ЕН"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div ref={elementRef} className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-roboto-bold text-foreground mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Что говорят о нас партнеры и клиенты, которые уже доверили нам свои проекты
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${isVisible ? 'scroll-fade-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="contact-card h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h4 className="font-roboto-semibold text-foreground text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className={`mt-16 text-center ${isVisible ? 'scroll-fade-up scroll-animation-delay-200' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-primary">150+</div>
              <p className="text-muted-foreground">Завершенных проектов</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold text-primary">5.0</div>
              <p className="text-muted-foreground">Средняя оценка</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
