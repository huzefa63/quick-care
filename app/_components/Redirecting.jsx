'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";

function Redirecting() {
    const router = useRouter();
    const [seconds,setSeconds] = useState(7);
    useEffect(function(){
        const interval = setInterval(() => {
            setSeconds(prev => {
                if(prev > 0){
                    return prev - 1;
                }else{
                    clearInterval(interval);
                    return 0;
                };
            });
        }, 1000);
        return () => clearInterval(interval);
    },[])
    useEffect(function(){
        if(seconds === 0){
            router.replace('/app/appointments');
        }
    },[seconds])
    return (
      <p className="flex items-center text-gray-700  text-sm gap-1 mt-3">
        <ImSpinner2 className="animate-spin text-blue-500" /> redirecting to
        appointments page in <span className="font-bold text-black">{seconds}</span>{" "}
        seconds
      </p>
    );
}

export default Redirecting;