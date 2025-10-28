import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ImageGallery from "./ImageGallery";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const { currentTheme } = useTheme();
  const { elementRef, isVisible } = useScrollAnimation();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerRow, setCardsPerRow] = useState(4);
  const [transitioning, setTransitioning] = useState(false);

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

  const openGallery = (images: string[], initialIndex: number = 0) => {
    setGalleryImages(images);
    setGalleryInitialIndex(0); // Всегда начинаем с первого изображения
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  // Определяем количество карточек на строку по брейкпоинтам
  useEffect(() => {
    const computeCardsPerRow = (width: number) => {
      if (width >= 1280) return 4; // xl
      if (width >= 1024) return 3; // lg
      if (width >= 768) return 2;  // md
      return 1;                    // base
    };

    const apply = () => setCardsPerRow(computeCardsPerRow(window.innerWidth));
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  const goToPreviousProjects = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNextProjects = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Автоматическая ротация проектов
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTransitioning(true);

      // Меняем индекс в начале fade-in, а не в середине
      setTimeout(() => {
        setActiveProjectIndex((prev) => (prev + 1) % projects.length);
        setTransitioning(false);
      }, 2400); // середина анимации для более плавного перехода
    }, 4800);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  // Вычисляем проекты для отображения в карточках
  const getProjectForCard = (cardIndex: number) => {
    const totalCards = Math.min(cardsPerRow, projects.length);
    const index = (activeProjectIndex + cardIndex) % projects.length;
    return projects[index];
  };

  // Количество отображаемых карточек
  const totalCards = Math.min(cardsPerRow, projects.length);

  return (
    <section id="portfolio" className={getSectionClass()}>
      <div
        ref={elementRef}
        className="container mx-auto px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
          <h2 className="section-title text-foreground mb-8">
            Портфолио решений
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Проекты, которые меняют бизнес.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {Array.from({length: totalCards}).map((_, cardIndex) => {
             const project = getProjectForCard(cardIndex);
             return (
             <div
               key={cardIndex}
               className={`app-card group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col overflow-hidden ${
                 transitioning ? 'project-card-transitioning' : ''
               }`}
             >
               <div className="relative overflow-hidden rounded-t-xl">
                 <div
                   className="relative cursor-pointer project-card-content"
                   onClick={() => openGallery(project.images.slice(1), 0)}
                 >
                   <img
                     src={project.images[0]}
                     alt={project.title}
                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full">
                       <Search className="w-6 h-6 text-primary" />
                     </div>
                   </div>
                 </div>
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground backdrop-blur-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                  >
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="outline"
                    className="bg-background/90 border-primary/50 backdrop-blur-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150"
                  >
                    {project.year}
                  </Badge>
                </div>
              </div>

              <div className="project-card-content">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>

                {/* <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div> */}

                {/* <div className="flex gap-2 pt-4">
                  <Button
                    className={`app-button-primary rounded-full px-3 py-1 ${getButtonClass()} hover:scale-105 transition-transform duration-200`}
                    size="sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Демо
                  </Button>
                  <Button
                    variant="outline"
                    className={`rounded-full px-3 py-1 ${getButtonClass()} hover:scale-105 transition-transform duration-200 border-primary/30 hover:border-primary/60`}
                    size="sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Код
                  </Button>
                </div> */}
                </CardContent>
              </div>
            </div>
           );
           })}
        </div>

        {/* Кнопки навигации */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={goToPreviousProjects}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Предыдущие проекты"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* Индикатор точками */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveProjectIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeProjectIndex
                    ? 'bg-primary'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Перейти к проекту ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNextProjects}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Следующие проекты"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* <div className="text-center mt-12">
          <Button
            className={`app-button-primary rounded-full px-8 py-3 ${getButtonClass()} hover:scale-105 transition-transform duration-200`}
            size="lg"
          >
            Посмотреть все проекты
          </Button>
        </div> */}
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={galleryImages}
        isOpen={galleryOpen}
        onClose={closeGallery}
        initialIndex={galleryInitialIndex}
      />
    </section>
  );
};

export default Portfolio;