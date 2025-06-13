import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

function cx(...args: (string | boolean | undefined | null)[]): string {
  return args.filter(Boolean).join(' ');
}

const THEME_MAP = {
  light: {
    label: "Light",
    icon: <Sun size={16} />,
  },
  dark: {
    label: "Dark",
    icon: <Moon size={16} />,
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
    <div className="flex bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl p-1 shadow-lg">
      <button
        onClick={() => setTheme("light")}
        className={cx(
          "flex-1 flex items-center justify-center gap-1",
          "py-2 px-4 rounded-xl",
          "transition-all duration-200 ease-in-out",
          activeTheme === "light"
            ? "bg-[#80FF00] text-[#363737] shadow-md font-semibold transform scale-105"
            : "text-gray-600 hover:text-[#F8BCD6] hover:bg-[#F8BCD6]/50 dark:text-gray-300 dark:hover:text-[#F8BCD6] dark:hover:bg-[#80FF00]"
        )}
        aria-label={THEME_MAP.light.label}
        title={THEME_MAP.light.label}
      >
        {THEME_MAP.light.icon}
        {THEME_MAP.light.label}
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
        {THEME_MAP.dark.icon}
        {THEME_MAP.dark.label}
      </button>
    </div>
  );
};

export default ThemeSelect;