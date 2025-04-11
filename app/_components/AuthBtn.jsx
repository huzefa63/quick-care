"use client";
import Link from "next/link";
import { useMyContext } from "./SliderProvider";

function AuthBtn({name,address}) {
  const {setShowSlider} = useMyContext();
    return (
      
        <Link href={address} onClick={()=>setShowSlider(false)} className=" bg-cyan-500 text-white px-9 py-3 rounded-sm font-semibold tracking-widest">
          {name}
        </Link>
    );
}

export default AuthBtn
