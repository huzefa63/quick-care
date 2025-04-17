"use client";
import AppointmentCard from "@/app/_components/AppointmentCard";
import ContextMenu from "@/app/_components/ContextMenu";
import Link from "next/link";

import { useState } from "react";

const appointments = [
  {
    id: 1,
    doctor: {
      name: "Dr. James Harbour",
      specialty: "Cardiologist",
      photo: "/images/doctor1.jpg",
    },
    date: "March 10, 2025",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Emily Carter",
      specialty: "Dermatologist",
      photo: "/images/doctor2.jpg",
    },
    date: "March 15, 2025",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Emily Carter",
      specialty: "Dermatologist",
      photo: "/images/doctor2.jpg",
    },
    date: "March 15, 2025",
    time: "2:00 PM",
    status: "Pending",
  },
];
function AppointmentContainer({appointment,session}) {
    console.log(session);
  
    const [isContext, setIsContext] = useState(false);
    const [position, setPosition] = useState({ x: null, y: null });
    const [appointmentId,setAppointmentId] = useState('');
    console.log('appointment', appointment.appointments);
    if(appointment.appointments.length < 1) return (
      <div className=" mt-[30%] flex flex-col items-center w-full gap-5">
        <h1 className="text-2xl ">You have no appointments</h1>
        <Link href='/doctors' className="text-xl bg-emerald-500 px-3 py-1 rounded-sm text-gray-700">Book now</Link>
      </div>
    );
  return (
    <div className="h-full w-full mt-2 flex flex-col gap-3">
      {appointment.appointments.map((el,i) => (
        <AppointmentCard key={i} setAppointmentId={setAppointmentId}  appointment={el} position={position} isContext={isContext} setIsContext={setIsContext} setPosition={setPosition} />
      ))}
      {isContext && <ContextMenu setIsContext={setIsContext} position={position} appointmentId={appointmentId}/>}
    </div>
  );
}

export default AppointmentContainer;
