const Advantages = () => {
  const advantages = [
    {
      title: "Современные технологии",
      description: "Используем актуальный стек технологий для создания масштабируемых решений",
      icon: "⚡"
    },
    {
      title: "Гибкая методология",
      description: "Agile-подход позволяет быстро адаптироваться к изменениям требований",
      icon: "🔄"
    },
    {
      title: "Прозрачность процессов",
      description: "Регулярная отчетность и демонстрация промежуточных результатов",
      icon: "👁️"
    },
    {
      title: "Качественный код",
      description: "Следуем лучшим практикам разработки и проводим code review",
      icon: "✨"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-foreground mb-8">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наши преимущества делают сотрудничество эффективным и результативным
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl flex-shrink-0">{advantage.icon}</div>
              <div>
                <h3 className="subsection-title text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;