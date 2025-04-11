"use client";
import { LuPen } from "react-icons/lu";
import ReviewCard from "@/app/_components/ReviewCard";
import ModalWindow from "./ModalWindow";
import { useState } from "react";
function Reviews() {
    return (
      <div className="py-3 flex flex-col items-center gap-5">
        <div className="flex text-2xl border-b-2 bg-amber-400 w-fit px-8 py-1 rounded-lg justify-center font-semibold tracking-wider items-center gap-3">
          <LuPen />
          <h1 className="">Reviews</h1>
        </div>

        <div className="flex flex-col gap-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

        <div className="w-full">
          <button
            onClick={() => setIsModal(true)}
            className="bg-gray-300 w-full py-2 font-bold tracking-wider"
          >
            View all reviews
          </button>
        </div>
      </div>
    );
}

export default Reviews
