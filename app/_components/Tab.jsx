"use client";

import { useState } from "react";
import { useMyContext } from "./SliderProvider";

const reviews = [
  {
    name: "Emily Roberts",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Quick Care made booking a doctor so easy! The interface is simple, and I got my appointment within minutes. Highly recommended!",
  },
  {
    name: "James Carter",
    rating: "⭐️⭐️⭐️⭐️",
    review:
      "Great app for scheduling doctor visits! The process was smooth, but I’d love to see more filtering options for specialists.",
  },
  {
    name: "Sophia Patel",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Finally, an app that makes healthcare accessible! I love how I can see doctor availability and book instantly. A lifesaver!",
  },
];


function Tab() {
    const [activeTab,setActiveTab] = useState(0);
    const {showSlider} = useMyContext();
    return (
      <div className={` w-[95%] h-[70%] mt-8 bg-white shadow-sm rounded-xl ${showSlider ? 'z-[-1]':''} `}>
        <div className="flex justify-around -translate-y-4 ">
          <button
            onClick={() => setActiveTab(0)}
            className={`bg-cyan-300 px-6 font-semibold tracking-widest py-1 rounded-full ${
              activeTab === 0 ? "-translate-y-2" : ""
            }`}
          >
            {" "}
            Emily
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`bg-teal-300 px-6 font-semibold tracking-widest py-1 rounded-full ${
              activeTab === 1 ? "-translate-y-2" : ""
            }`}
          >
            {" "}
            James
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`bg-emerald-300 shadow-sm px-6 font-semibold tracking-widest py-1 rounded-full ${
              activeTab === 2 ? "-translate-y-2" : ""
            }`}
          >
            {" "}
            Sophia
          </button>
        </div>
        <div className="w-[90%] relative left-1/2 -translate-x-1/2 h-[80%] bg-white rounded-2xl">
          <div className="flex flex-col gap-8 mt-3">
            <div className="flex justify-between text-xl font-semibold tracking-widest">
              <h1>{reviews[activeTab].name}</h1>
              <p>{reviews[activeTab].rating}</p>
            </div>
            <p className="">"{reviews[activeTab].review}"</p>
          </div>
        </div>
      </div>
    );
}

export default Tab
