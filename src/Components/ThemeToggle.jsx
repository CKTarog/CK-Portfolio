import { useEffect, useState } from "react";
import { TbMoonStars } from "react-icons/tb";
import { LuSunMedium } from "react-icons/lu";

const Theme = ({children}) => {

  const getTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getTheme);

  useEffect(() => {
  const root = document.documentElement;

  if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(prev => !prev);
  }
  
  return (
    <div className={`${dark ? "dark" : ""} transition-colors duration-500 bg-[#fff1dc] dark:bg-[#270E12] select-none`}>
      {children}
    
    <div className="fixed z-10 right-9 bottom-9">
      <button onClick={toggleDarkMode} className="p-2 rounded-full backdrop-blur-sm">
        {dark ? (<LuSunMedium className="w-6 h-6 md:text-[#d2b48c]/30 text-[#d2b48c] md:hover:text-[#d2b48c] hover:scale-120 duration-200 transition-transform"/>) : (<TbMoonStars className="w-6 h-6 md:text-[#270E12]/30 md:hover:text-[#270E12] text-[#270E12] hover:scale-120 duration-200"/>)}
      </button>
    </div>
    </div>
  );
};

export default Theme;
