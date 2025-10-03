import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-app border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-ksbistra text-primary-foreground">SOLARM Tech</span>
            </div>
            <p className="muted-text max-w-md">
              Помогаем технологиям помогать бизнесу.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-roboto-medium text-primary-foreground mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="transition-colors">Корпоративные системы</a></li>
              <li><a href="#" className="transition-colors">Консалтинг</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-roboto-medium text-primary-foreground mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@solarmtech.ru" className="font-ksbistra muted-text hover:text-primary-foreground transition-colors">hello@solarmtech.ru</a></li>
              <li><a href="tel:+74951234567" className="font-ksbistra muted-text hover:text-primary-foreground transition-colors">+7 (495) 123-45-67</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-ksbistra muted-text">
            © 2025 SOLARM Tech. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;