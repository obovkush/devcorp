import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { currentTheme } = useTheme();
  const getSectionClass = () => {
    switch (currentTheme) {
      case 'tile':
        return "relative min-h-screen flex items-center justify-center overflow-hidden tile-pattern";
      case 'neomorphism':
        return "relative min-h-screen flex items-center justify-center overflow-hidden bg-background";
      default:
        return "relative min-h-screen flex items-center justify-center overflow-hidden";
    }
  };

  const getButtonClass = (isPrimary: boolean) => {
    if (currentTheme === 'neomorphism') {
      return isPrimary 
        ? 'neo-button bg-gradient-primary text-white text-lg px-8 py-3' 
        : 'neo-button border-primary text-primary text-lg px-8 py-3';
    }
    return isPrimary
      ? 'bg-gradient-primary hover:opacity-90 transition-opacity animate-glow text-lg px-8 py-3'
      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3';
  };

  return (
    <section className={getSectionClass()}>
      {/* Background Image - only for tech theme */}
      {currentTheme === 'tech' && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}
      
      {/* Gradient Overlay - different for each theme */}
      {currentTheme === 'tech' && <div className="absolute inset-0 bg-gradient-hero opacity-60" />}
      {currentTheme === 'minimal' && <div className="absolute inset-0 bg-gradient-secondary opacity-30" />}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Разработка{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              программного
            </span>{" "}
            обеспечения
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаем инновационные решения для вашего бизнеса. 
            Современные технологии, качественный код, надежные системы.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className={getButtonClass(false)}
            >
              Наши работы
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;