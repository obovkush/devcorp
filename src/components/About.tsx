const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            О нашей компании
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            DevCorp — это команда опытных разработчиков, специализирующихся на создании 
            высококачественного программного обеспечения. Мы помогаем бизнесу 
            автоматизировать процессы и внедрять современные технологии.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">5+</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Лет опыта</h3>
              <p className="text-muted-foreground">
                В разработке программного обеспечения
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Проектов</h3>
              <p className="text-muted-foreground">
                Успешно реализованных решений
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Довольных клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;