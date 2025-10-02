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
      title: "Банковская экосистема TechBank",
      description: "Комплексная банковская платформа с мобильным приложением, интернет-банкингом, системой платежей и аналитикой в реальном времени.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Blockchain"],
      category: "FinTech",
      year: "2024"
    },
    {
      title: "Платформа криптовалютных платежей",
      description: "Безопасная платформа для обработки криптовалютных транзакций с поддержкой основных криптовалют и DeFi интеграциями.",
      image: project2Image,
      technologies: ["React Native", "Solidity", "Web3.js", "MongoDB"],
      category: "Blockchain",
      year: "2024"
    },
    {
      title: "AI-система кредитного скоринга",
      description: "Интеллектуальная система оценки кредитных рисков с машинным обучением и предиктивной аналитикой для банков.",
      image: project3Image,
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      category: "AI/ML",
      year: "2024"
    }
  ];

  const getCardClass = () => {
    switch (currentTheme) {
      case 'neomorphism':
        return "neo-card bg-primary/50 group cursor-pointer overflow-hidden";
      default:
        return "bg-primary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden";
    }
  };

  const getSectionClass = () => {
    switch (currentTheme) {
      case 'neomorphism':
        return "py-20 bg-background";
      default:
        return "py-20 bg-secondary/50";
    }
  };

  const getButtonClass = () => {
    if (currentTheme === 'neomorphism') {
      return 'text-sm px-3 py-1';
    }
    return 'text-sm px-3 py-1 transition-colors';
  };

  return (
    <section id="portfolio" className={getSectionClass()}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-foreground mb-8">
            Портфолио решений
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Проекты, которые меняют индустрию.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="app-card group cursor-pointer"
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
                <CardTitle className="subsection-title text-foreground group-hover:text-primary transition-colors">
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
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className={getButtonClass()}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Код
                  </Button> */}
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className={currentTheme === 'neomorphism' ? 'px-8 py-3' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3'}
          >
            Посмотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;