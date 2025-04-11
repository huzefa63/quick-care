"use client";

import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

function ModalWindow({closeModel}) {
    useEffect(function(){
        function handleClick(e){
            // if(e.tar)
            if(e.target.classList.contains('model') || e.target.classList.contains('review-card')) return;
            closeModel(false);
        }
        document.body.addEventListener('click',handleClick);
        return ()=>{
            document.body.removeEventListener('click',handleClick);
        }
    },[])
    return (
        <div className="model border-[1px] overflow-auto flex flex-col gap-6 h-[80%] w-[90%] bg-white fixed top-[55%] shadow-sm rounded-lg -translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    )
}

export default ModalWindow
