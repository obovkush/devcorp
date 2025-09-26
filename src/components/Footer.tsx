const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">DevCorp</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Создаем программные решения, которые помогают бизнесу развиваться 
              и достигать новых высот в цифровую эпоху.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Мобильные приложения</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Корпоративные системы</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Консалтинг</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">hello@devcorp.ru</li>
              <li className="text-muted-foreground">+7 (495) 123-45-67</li>
              <li className="text-muted-foreground">Москва, ул. Технологическая, 15</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 DevCorp. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;