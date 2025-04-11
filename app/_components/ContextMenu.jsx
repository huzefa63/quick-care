'use client';
import { revalidateAppointments } from "@/actions/generalActions";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { revalidatePath } from "next/cache";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

function ContextMenu({position,appointmentId,setIsContext}) {
  const [isCancelled,setIsCancelled] = useState(false);
  const [loading,setLoading] = useState(true);
  useEffect(function(){
    async function getAppointment(){
      try {
        const appointment = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/getAppointmentById`,
          { id: appointmentId }
        );
        if (appointment.data.status === "cancelled") setIsCancelled(true);
        else setIsCancelled(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getAppointment();
  },[])

  async function cancelAppointment(){
    const confirmed = window.confirm('are you sure you want to cancel appointment ?');
    if(!confirmed) return;
    try{
      const req = await axios.post(`${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/cancelAppointment`,{appointmentId}); 
      await revalidateAppointments();
      toast.success('appointment cancelled');
      setIsContext(false);
      setIsCancelled(true);
    }catch(err){
      toast.error('failed to cancelled appointment');
    }
  }

  async function removeAppointment() {
    try {
      const req = await axios.post(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/removeAppointment`,
        {id:appointmentId}
      );
      if(req.data.isDeleted) {
        await revalidateAppointments();
        toast.success("appointment removed");
      }
    } catch (err) {
      toast.error("failed to remove appointment");
    }
    setIsContext(false);
  }

  if(loading) return null;
    if(!isCancelled) return (
      <div
        className="absolute font-bold menu py-2 w-[8rem] rounded-sm bg-white z-10 shadow-sm tracking-widest"
        style={{ top: position.y, left: position.x - 140 }}
      >
        <button className="flex w-full items-center gap-2 text-rose-600 h-1/2 px-3" onClick={cancelAppointment}>
          <FaDeleteLeft /> cancel
        </button>
      </div>
    );

    return(
       <div
        className="absolute font-bold menu py-2 w-[8rem] rounded-sm bg-white z-10 shadow-sm tracking-widest"
        style={{ top: position.y, left: position.x - 140 }}
      >
        <button onClick={removeAppointment}  className="flex w-full items-center gap-2 text-rose-600 h-1/2 px-3">
          <FaDeleteLeft /> remove
        </button>
      </div>
    );
}

export default ContextMenu
