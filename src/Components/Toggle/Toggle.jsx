// ThemeToggle.js

import{ useEffect, useState } from 'react';
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Toggle a class on the HTML element
  };


  function changeTheme() {
    const html = document.documentElement
  
    if(mode == "light") {
      html.classList.remove("light")
      html.classList.add("dark")
      setMode("dark")
      localStorage.setItem("mode", "dark")
    }
    else{
      html.classList.remove("dark")
      html.classList.add("light")
      setMode("light")
      localStorage.setItem("mode", "light")
    }
  }
  
  useEffect( () => {
    const currentMode = localStorage.getItem("mode") || "light"
    setMode(currentMode)
    const html = document.documentElement
    html.classList.add(currentMode)
  }, [])

  return (
    <button
      className={`hidden md:block p-2 rounded-md border border-blue-400 ${
        isDarkMode ? ' text-2xl text-yellow-500' : 'text-2xl text-blue-400'
      } text-white font-bold focus:outline-none text-xl`}
      onClick={changeTheme, toggleTheme}
    >
      {isDarkMode ? <IoMoonSharp></IoMoonSharp> : <IoSunny></IoSunny>}
    </button>
  );
};

export default ThemeToggle;
