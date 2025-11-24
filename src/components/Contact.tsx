import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, HelpCircle, Copy, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { CONTACT_INFO } from "@/constants/contact";


const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const whatsappImg = '/images/whatsapp.png';
  const telegramImg = '/images/telegram.png';
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div ref={elementRef} className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-roboto-bold text-foreground mb-6">
            Свяжитесь с нами!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы ценим ваши отзывы и запросы. Свяжитесь с нашей командой
            для получения любой помощи или информации о наших услугах.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'scroll-fade-up scroll-animation-delay-100' : ''}`}>
          {/* Phone */}
          <div className="contact-card p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-roboto-semibold text-lg text-foreground">Позвонить</h3>
            <div className="space-y-3">
              <div className="relative flex items-center justify-center group">
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.phone)}
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary/10 rounded ml-2"
                  style={{ left: 'calc(50% + 70px)' }}
                >
                  {isCopied(CONTACT_INFO.phone) ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="contact-card p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-roboto-semibold text-lg text-foreground">Написать</h3>
            <div className="space-y-3">
              <div className="relative flex items-center justify-center group">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-primary transition-colors">
          {CONTACT_INFO.email}
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT_INFO.email)}
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary/10 rounded ml-2"
                  style={{ left: 'calc(50% + 70px)' }}
                >
                  {isCopied(CONTACT_INFO.email) ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  )}
                </button>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <a
                href={CONTACT_INFO.messengers.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="messenger-icon"
              >
                <img src={whatsappImg} alt="WhatsApp" className="w-10 h-10 object-contain" />
              </a>
              <a
                href={CONTACT_INFO.messengers.telegram}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="messenger-icon"
              >
                <img src={telegramImg} alt="Telegram" className="w-10 h-10 object-contain" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact-card p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-roboto-semibold text-lg text-foreground">Встретиться</h3>
              <p className="text-muted-foreground">
                {CONTACT_INFO.location}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`${isVisible ? 'scroll-fade-up scroll-animation-delay-200' : ''}`}>
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
                answer: "Мы работаем с широким спектром отраслей. Независимо от сферы деятельности, в каждом случае мы разрабатываем проект с учетом необходимых технологий и решений для достижения наилучшего результата."
              },
              {
                question: "Как узнать, какая услуга или технология подходит для моего бизнеса?",
                answer: "Все начинается с разговора. Во время общения мы узнаем о ваших целях, потребностях и возможностях, а затем, исходя из условий, рекомендуем наиболее оптимально подходящие услуги и технологические решения."
              },
              {
                question: "Предлагаете ли вы индивидуальные решения?",
                answer: "Безусловно! Мы предлагаем гибкий подход, основанный на поэтапной, итеративной разработке продуктов, подбираем фреймворки и инструменты под специфику проекта для достижения максимального эффекта."
              },
              {
                question: "Как начать работу с SOLARM Tech?",
                answer: "Начать работу просто: свяжитесь с нами одним из удобных для Вас способов. Обрисуем следующие шаги, определим оптимальный путь движения вперёд и подготовим индивидуальный план действий."
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