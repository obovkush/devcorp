import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight, Users, HelpCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-roboto-bold text-foreground mb-6">
            Свяжитесь с нами!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы ценим ваши отзывы и запросы. Свяжитесь с нашей командой
            для получения любой помощи или информации о наших услугах.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="contact-card p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto contact-card">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-roboto-semibold text-lg text-foreground">Номер телефона</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">+7 (495) 123-45-68</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-card p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto contact-card">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-roboto-semibold text-lg text-foreground">Наш email</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">hello@solarmtech.ru</p>
              <p className="text-muted-foreground">info@solarmtech.ru</p>
            </div>
          </div>

          {/* Location */}
          <div className="contact-card p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto contact-card">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-roboto-semibold text-lg text-foreground">Наше местоположение</h3>
            <p className="text-muted-foreground">
              Москва, ул. Технологическая, 15
            </p>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="max-w-4xl mx-auto mb-20">
          <div className="contact-card p-8">
            <h3 className="text-2xl font-roboto-semibold text-foreground mb-8 text-center">
              Контактные данные
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Имя *
                  </label>
                  <Input
                    type="text"
                    placeholder="Введите ваше имя"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Фамилия *
                  </label>
                  <Input
                    type="text"
                    placeholder="Введите вашу фамилию"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Номер телефона *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение *
                </label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full min-h-[120px]"
                />
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="app-button-primary bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold"
                >
                  Отправить
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div> */}

        {/* Team Section */}
        {/* <div className="mb-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-roboto-semibold text-foreground">
              Познакомьтесь с нашей командой
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-card/50 backdrop-blur-sm border-border text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-roboto-semibold text-lg text-foreground mb-2">
                    {item === 1 ? 'Алексей Иванов' :
                     item === 2 ? 'Мария Петрова' :
                     item === 3 ? 'Дмитрий Сидоров' :
                     item === 4 ? 'Анна Козлова' :
                     item === 5 ? 'Сергей Волков' : 'Елена Морозова'}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item === 1 ? 'Генеральный директор' :
                     item === 2 ? 'Технический директор' :
                     item === 3 ? 'Руководитель разработки' :
                     item === 4 ? 'Дизайнер UX/UI' :
                     item === 5 ? 'Backend разработчик' : 'Frontend разработчик'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-roboto-semibold text-foreground">
              Часто задаваемые вопросы
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Какие отрасли обслуживает SOLARM Tech?",
                answer: "Мы работаем с широким спектром отраслей, включая финансы, здравоохранение, технологии, производство и профессиональные услуги. Наши стратегии разработаны так, чтобы быть адаптивными, чтобы лидеры в любой сфере могли достичь измеримых результатов."
              },
              {
                question: "Как узнать, какая услуга подходит для моего бизнеса?",
                answer: "Все начинается с разговора. Во время первоначальной консультации мы узнаем о ваших целях, проблемах и возможностях, а затем порекомендуем услуги, будь то планирование роста, стратегия талантов или оптимизация производительности, лучше всего подходящие для ваших потребностей."
              },
              {
                question: "Предлагаете ли вы индивидуальные решения?",
                answer: "И то, и другое. Мы предоставляем проверенные фреймворки и инструменты в качестве основы, а затем адаптируем их к уникальному контексту вашего бизнеса. Никакие две организации не одинаковы, поэтому никакие два решения не идентичны."
              },
              {
                question: "Как начать работу с SOLARM Tech?",
                answer: "Начать работу просто: запросите консультацию через наш сайт, и один из наших консультантов свяжется с вами. Оттуда мы обрисуем следующие шаги и разработаем план, адаптированный к вашим бизнес-целям."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-primary/5 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <h4 className="font-roboto-semibold text-lg text-foreground mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;