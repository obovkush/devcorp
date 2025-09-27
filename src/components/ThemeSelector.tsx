import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(currentTheme === 'tech' ? 'neomorphism' : 'tech');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleTheme}
      className="gap-2"
    >
      {currentTheme === 'tech' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      {currentTheme === 'tech' ? 'Светлая' : 'Темная'}
    </Button>
  );
};

export default ThemeSelector;