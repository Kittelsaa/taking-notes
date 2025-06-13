import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; 

function cx(...args) {
  return args.filter(Boolean).join(' ');
}

const THEME_MAP = {
  light: {
    label: "Light",
    icon: <Sun className="w-5 h-5" />, 
  },
  dark: {
    label: "Dark",
    icon: <Moon className="w-5 h-5" />, 
  },
};

export const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme: activeTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (!activeTheme || activeTheme === 'system') {
      setTheme('light');
    }
  }, [activeTheme, setTheme]);

  if (!mounted) return null;

  return (
    <div
      className={cx(
        "flex items-center p-1", 
        "bg-[#EAF1E8] dark:bg-[#2F3A2C]", 
        "rounded-2xl border border-gray-200 dark:border-gray-600", 
        "shadow-inner" 
      )}
    >
      <button
        onClick={() => setTheme("light")}
        className={cx(
          "flex-1 flex items-center justify-center gap-1", 
          "py-2 px-4 rounded-xl", 
          "transition-all duration-200 ease-in-out", 
          activeTheme === "light"
            ? "bg-[#80FF00] text-[#363737] shadow-md font-semibold transform scale-105" 
            : "text-gray-600 hover:text-[#F8BCD6] hover:[#F8BCD6]]/50 dark:text-gray-300 dark:hover:text-[#F8BCD6] dark:hover:bg-[#80FF00]" 
        )}
        aria-label={THEME_MAP.light.label} 
        title={THEME_MAP.light.label} 
      >
        <span className={cx(
          "transition-colors duration-200",
          activeTheme === "light" ? "text-[#363737]" : ""
        )}>
          {THEME_MAP.light.icon}
        </span>
        <span className={cx(
          "hidden sm:inline transition-colors duration-200",
          activeTheme === "light" ? "text-[#363737]" : ""
        )}>
          {THEME_MAP.light.label}
        </span> 
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={cx(
          "flex-1 flex items-center justify-center gap-1", 
          "py-2 px-4 rounded-xl", 
          "transition-all duration-200 ease-in-out", 
          activeTheme === "dark"
            ? "bg-[#F8BCD6] text-[#363737] shadow-md font-semibold transform scale-105" 
            : "text-gray-900 hover:text-[#F8BCD6] hover:bg-white/50 dark:text-gray-300 dark:hover:text-[#80FF00] dark:hover:bg-gray-700/50" 
        )}
        aria-label={THEME_MAP.dark.label} 
        title={THEME_MAP.dark.label} 
      >
        <span className={cx(
          "transition-colors duration-200",
          activeTheme === "dark" ? "text-[#363737]" : ""
        )}>
          {THEME_MAP.dark.icon}
        </span>
        <span className={cx(
          "hidden sm:inline transition-colors duration-200",
          activeTheme === "dark" ? "text-[#363737]" : ""
        )}>
          {THEME_MAP.dark.label}
        </span> 
      </button>
    </div>
  );
};

export default ThemeSelect;