import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда открыты для новых задач и интересных решений
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  hello@devcorp.ru
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span>Телефон</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  +7 (495) 123-45-67
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span>Офис</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Москва, ул. Технологическая, 15
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-primary p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Начнем работу вместе
              </h3>
              <p className="text-white/90 mb-6">
                Расскажите о своем проекте, и мы подготовим для вас персональное предложение
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;