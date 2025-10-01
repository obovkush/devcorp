import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(currentTheme === 'tech' ? 'neomorphism' : 'tech');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-secondary border border-border transition-colors hover:bg-muted"
      aria-label="Переключить тему"
    >
      <span
        className={`inline-block h-7 w-7 transform rounded-full bg-primary transition-transform duration-200 ease-in-out flex items-center justify-center ${
          currentTheme === 'tech' ? 'translate-x-1' : 'translate-x-8'
        }`}
      >
        {currentTheme === 'tech' ? (
          <Moon className="h-4 w-4 text-primary-foreground" />
        ) : (
          <Sun className="h-4 w-4 text-primary-foreground" />
        )}
      </span>
    </button>
  );
};

export default ThemeSelector;