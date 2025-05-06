import { Sun } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <button
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 d-none",
        "focus:outlin-hidden"
      )}
    >
      {/* <Sun className="h-6 w-6 text-yellow-300" /> */}
    </button>
  );
};
