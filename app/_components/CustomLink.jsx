"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMyContext } from "./SliderProvider";

function CustomLink({children,path}) {
    const pathname = usePathname();
    const {setShowSlider} = useMyContext(); 
    return (
      <Link
      onClick={()=>setShowSlider(false)}
        href={`/${path}`}
        className={`flex h-13 rounded-lg transition-all duration-[0.3s]  pl-3 items-center gap-3 ${
          pathname === `/${path}` || pathname.includes(`/${path.slice(0,-1)}`) ? "bg-gray-300" : ""
        }`}
      >
        {children}
      </Link>
    );
}

export default CustomLink
