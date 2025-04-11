"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useMyContext } from "./SliderProvider";

function SliderBtn() {
    const {setShowSlider,showSlider} = useMyContext();
    console.log(showSlider)
  return (
    <button
      onClick={() => setShowSlider(!showSlider)}
      className="lg:hidden ml-4 z-2  p-2 rounded-full bg-gray-100"
    >
      {!showSlider ? (
        <RxHamburgerMenu className="size-5" />
      ) : (
        <MdOutlineClose className="size-5" />
      )}
    </button>
  );
}

export default SliderBtn;
