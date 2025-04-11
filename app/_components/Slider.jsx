"use client";
import { BiSolidInfoCircle } from "react-icons/bi";
import { HiCash } from "react-icons/hi";
import { FaPenClip, FaUserDoctor } from "react-icons/fa6";
import AuthBtn from "./AuthBtn";
import { useMyContext } from "./SliderProvider";
import { signInAction } from "@/actions/authActions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink";
import { useEffect } from "react";
import LogoutBtn from "@/app/_components/LogoutBtn";
import { FaBookMedical, FaTrash } from "react-icons/fa";
function Slider({ user }) {
  const { showSlider, setShowSlider } = useMyContext();

  useEffect(
    function () {
      function handleClick(e) {
        if (e.target.closest("#sidebar") || !showSlider) return;
        setShowSlider(false);
      }
      document.body.addEventListener("click", handleClick);

      return () => {
        document.body.removeEventListener("click", handleClick);
      };
    },
    [showSlider]
  );
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      id="sidebar"
      className={`${
        !showSlider
          ? "opacity-0 pointer-events-none -translate-x-full"
          : "translate-x-0 opacity-100"
      } flex justify-around shadow-sm items-center flex-col absolute top-0 h-full w-[50%]  transition-all duration-300 bg-white z-1`}
    >
      <div className=" grid h-[30%]  w-[90%] pl-1 ">
        {!pathname.includes("/app") ? (
          <>
            <CustomLink path="about">
              <BiSolidInfoCircle className="size-7 text-cyan-500" /> about
            </CustomLink>

            <CustomLink path="pricing">
              <HiCash className="size-7 text-cyan-500" /> pricing
            </CustomLink>

            <CustomLink path="doctors">
              <FaUserDoctor className="size-6 text-cyan-500" /> doctors
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink path="app/appointments">
              <FaBookMedical className="size-6 text-cyan-500" /> appointments
            </CustomLink>

            <CustomLink path="app/book-appointment">
              <FaPenClip className="size-6 text-cyan-500" /> book-appointment
            </CustomLink>

            <CustomLink path="app/profile">
              <FaTrash className="size-5 text-cyan-500" /> Delete Account
            </CustomLink>
          </>
        )}
      </div>
      {!user ? <AuthBtn name="Login" address="/login" /> : <LogoutBtn />}
    </div>
  );
}

export default Slider;
