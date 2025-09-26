import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";
import project3Image from "@/assets/project-3.jpg";

const Portfolio = () => {
  const { currentTheme } = useTheme();

  const projects = [
    {
      title: "Интернет-магазин TechStore",
      description: "Современный e-commerce сайт с интуитивным интерфейсом, корзиной покупок, системой фильтров и интеграцией с платежными системами.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Мобильное приложение FinanceTracker",
      description: "Приложение для управления личными финансами с аналитикой расходов, планированием бюджета и синхронизацией между устройствами.",
      image: project2Image,
      technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
      category: "Mobile App",
      year: "2023"
    },
    {
      title: "CRM-система для управления клиентами",
      description: "Корпоративная система управления взаимоотношениями с клиентами с модулями продаж, маркетинга и аналитики.",
      image: project3Image,
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      category: "Enterprise",
      year: "2023"
    }
  ];

  const getCardClass = () => {
    switch (currentTheme) {
      case 'neomorphism':
        return "neo-card bg-card group cursor-pointer overflow-hidden";
      case 'tile':
        return "bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden shadow-lg";
      default:
        return "bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden";
    }
  };

  const getSectionClass = () => {
    switch (currentTheme) {
      case 'tile':
        return "py-20 bg-secondary/30 tile-pattern";
      case 'neomorphism':
        return "py-20 bg-background";
      default:
        return "py-20 bg-secondary/50";
    }
  };

  const getButtonClass = () => {
    if (currentTheme === 'neomorphism') {
      return 'neo-button text-sm px-3 py-1';
    }
    return 'text-sm px-3 py-1 hover:scale-105 transition-transform';
  };

  return (
    <section id="portfolio" className={getSectionClass()}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Наши работы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры успешно реализованных проектов различной сложности
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={getCardClass()}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 text-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 border-primary/50">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={getButtonClass()}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Демо
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={getButtonClass()}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Код
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className={currentTheme === 'neomorphism' ? 'neo-button px-8 py-3' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3'}
          >
            Посмотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;