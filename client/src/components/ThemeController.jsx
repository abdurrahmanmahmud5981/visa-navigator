import { useState, useEffect } from "react";
import { BiMoon } from "react-icons/bi";

import { IoSunnySharp } from "react-icons/io5";

const ThemeController = () => {
  // Check for saved theme or default to system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) return savedTheme;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme());

  // Effect to apply theme and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Toggle dark class on html element for Tailwind dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="btn btn-circle  shadow-xl hover:bg-base-300 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <BiMoon size={24} className="text-primary" />
        ) : (
          <IoSunnySharp size={24} className="text-yellow-500" />
        )}
      </button>
    </div>
  );
};

export { ThemeController };
