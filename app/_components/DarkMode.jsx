"use client";
import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
function DarkMode() {
    const [isDark,setIsDark] = useState(false);
  return (
    <div>
      <button onClick={()=>{
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
        
      }}>
        {!isDark ? <MdLightMode size={25} className="mr-10 hover:cursor-pointer" /> : <MdDarkMode size={25} className="mr-10 hover:cursor-pointer"/>}
      </button>
    </div>
  );
}

export default DarkMode;
