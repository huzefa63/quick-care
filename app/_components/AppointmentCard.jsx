"use client";
import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";
import doctor from '@/public/doctor-1.jpg';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MdOutlineCurrencyRupee } from "react-icons/md";
function AppointmentCard({ setAppointmentId, appointment,setPosition,setIsContext, isContext, position }) {
  // useEffect(function(){
  //   function handleClick(e){
  //     if(e.target.closest('.dots')) return;
  //     if(e.target.closest('.menu')) return;
  //     setIsContext(false);
  //   }
  //   document.body.addEventListener('click',handleClick)
  //   return ()=>{
  //     document.body.removeEventListener('click',handleClick); 
  //   }
  // },[])
  // const date = dayjs(appointment.date).format('MMMM D, YYYY');
  // const time = dayjs(appointment.date).format('h:mm A')
  return (
    <div className="border- pr-6 pl-3 bg-gray-100 relative border-gray-300 max-h-[20%] rounded-2xl [box-shadow:0px_6px_12px_rgba(0,0,0,0.1),0px_-6px_12px_rgba(0,0,0,0.05)]">
      <div className="rotate-[1deg] absolute right-2 top-3 dots">
        <HiOutlineDotsVertical
          size={18}
          onClick={(e) => {
            // if (appointment.status === "cancelled") return;
            setPosition({ x: e.clientX, y: e.clientY });
            setIsContext(!isContext);
            setAppointmentId(appointment._id);
          }}
        />
      </div>
      <div className="h-full flex">
        <div className="relative max-h-[85%] max-w-[30%] min-w-[30%] top-1/2 -translate-y-1/2 rounded-xl overflow-hidden">
          <Image sizes="90" src={`/${appointment.doctor.image}.jpg`} alt="nothing" fill />
        </div>
        <div className="w-full pl-4 py-2 flex flex-col justify-around">
          <h1 className=" font-semibold tracking-wider">
            {appointment.doctor.name}
          </h1>
          <h1 className="flex gap-2 text-sm">
            <span className="font-semibold">Date: </span>{" "}
            {appointment.date.split("T")[0]}
          </h1>
          <h1 className="flex gap-2 text-sm">
            <span className="font-semibold">Time: </span>{" "}
            {appointment.date.split("T")[1]}
          </h1>
          <h1 className="flex gap-2 text-sm">
            <span className="font-semibold">Consultation Fee: </span>{" "}
            <span className="flex items-center">
              {Number(appointment.fee) / 100} <MdOutlineCurrencyRupee />
            </span>
          </h1>
          <h1 className="flex gap-2 text-sm font-semibold">
            Status:
            <span
              className={` ${
                appointment.status === "cancelled" ? "text-red-500 tracking-wider" : "text-emerald-500 tracking-wider"
              }`}
            >
              {appointment.status}{" "}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard
