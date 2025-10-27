import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { Search } from "lucide-react";
import smeta1 from "@/assets/smeta/smeta-1.png";
import smeta2 from "@/assets/smeta/smeta-2.png";
import smeta3 from "@/assets/smeta/smeta-3.png";
import smeta4 from "@/assets/smeta/smeta-4.png";
import smeta5 from "@/assets/smeta/smeta-5.png";
import smeta6 from "@/assets/smeta/smeta-6.png";
import asia1 from "@/assets/asia/asia-1.jpg";
import asia2 from "@/assets/asia/asia-2.jpg";
import asia3 from "@/assets/asia/asia-3.jpg";
import asia4 from "@/assets/asia/asia-4.jpg";
import asia5 from "@/assets/asia/asia-5.jpg";
import parfume1 from "@/assets/parfume/parfume-1.png";
import parfume2 from "@/assets/parfume/parfume-2.png";
import parfume3 from "@/assets/parfume/parfume-3.png";
import parfume4 from "@/assets/parfume/parfume-4.png";
import parfume5 from "@/assets/parfume/parfume-5.png";
import backery1 from "@/assets/backery/backery-1.png";
import backery2 from "@/assets/backery/backery-2.png";
import backery3 from "@/assets/backery/backery-3.png";
import backery4 from "@/assets/backery/backery-4.png";
import backery5 from "@/assets/backery/backery-5.png";
import backery6 from "@/assets/backery/backery-6.png";
import backery7 from "@/assets/backery/backery-7.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ImageGallery from "./ImageGallery";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const { currentTheme } = useTheme();
  const { elementRef, isVisible } = useScrollAnimation();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const projects = [
    {
      title: "Магазин азиатской кухни",
      description: "Мобильное приложение для заказа блюд из кафе и ресторанов азиатской кухни.",
      images: [asia1, asia2, asia3, asia4, asia5],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Магазин парфюмерии",
      description: "Мобильное приложение для покупки парфюмерии и косметики с доставкой на дом.",
      images: [parfume1, parfume2, parfume3, parfume4, parfume5],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Британские пекарни",
      description: "Мобильное приложение для заказа свежей выпечки и десертов из британских пекарен.",
      images: [backery1, backery2, backery3, backery4, backery5, backery6, backery7],
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Калькулятор сметы",
      description: "Комплексная платформа для расчета сметных работ с формированием печатных форм.",
      images: [smeta1, smeta2, smeta3, smeta4, smeta5, smeta6],
      category: "E-commerce",
      year: "2024"
    },
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

  const openGallery = (images: string[], initialIndex: number = 0) => {
    setGalleryImages(images);
    setGalleryInitialIndex(0); // Всегда начинаем с первого изображения
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
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
    const index = (activeProjectIndex + cardIndex) % projects.length;
    return projects[index];
  };

  return (
    <section id="portfolio" className={getSectionClass()}>
      <div ref={elementRef} className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'scroll-fade-up' : ''}`}>
          <h2 className="section-title text-foreground mb-8">
            Портфолио решений
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Проекты, которые меняют бизнес.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {Array.from({length: 4}).map((_, cardIndex) => {
             const project = getProjectForCard(cardIndex);
             return (
             <div
               key={cardIndex}
               className={`app-card group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col ${
                 transitioning ? 'project-card-transitioning' : ''
               }`}
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
             >
               <div className="relative overflow-hidden">
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