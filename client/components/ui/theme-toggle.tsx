import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "../ThemeProvider";

interface ThemeToggleProps {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  showText?: boolean;
}

export function ThemeToggle({
  variant = "ghost",
  size = "default",
  className = "",
  showText = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={className}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-5 h-5" />
          {showText && <span className="ml-2">Light Mode</span>}
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          {showText && <span className="ml-2">Dark Mode</span>}
        </>
      )}
    </Button>
  );
}
