"use client";
import { CiClock1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FaMoneyBillWave, FaSquarePen } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { PiMoneyWavy } from "react-icons/pi";
import TimeSlot from "./TimeSlot";
import { useMyContext } from "./SliderProvider";
import DatePicker from "./DatePicker";
import dayjs from "dayjs";

const slots = [
  {
    time:'10:00 AM',
    fee:300,
  },
  {
    time:'10:30 AM',
    fee:300,
  },
  {
    time:'11:00 AM',
    fee:300,
  },
  {
    time:'11:30 AM',
    fee:300,
  }
]

function AppSlots({doctorId,user}) {
    const {date,setDate} = useMyContext();
    console.log(date.$y);
return (
  <div>
    <div className="w-full flex flex-col items-center gap-5">
      <h1 className="flex mb-5 rounded-bl-full rounded-tr-full items-center gap-2 font-bold text-xl py-2 w-fit tracking-widest px-8 bg-teal-400">
        <FaSquarePen className="text-white" /> Appointment Slots
      </h1>
      <div className="flex flex-col items-center w-full ">
        <h1 className="text-2xl text-center">
          {!date ? "Please select a date to see available slots" : ""}
        </h1>
        <DatePicker type="date" />
      </div>

      {date && (
        <>
          <div className="w-full bg-gray-300 py-2 pl-2 grid grid-cols-9">
            <p className="col-span-3 flex items-center gap-2">
              <SlCalender /> Date
            </p>
            <p className="col-span-2 flex items-center gap-2">
              <FaRegClock /> Time
            </p>
            <p className="flex col-span-2 items-center gap-2">
              <PiMoneyWavy /> Fee
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            {slots.map((el,i) => <TimeSlot index={i} user={user} doctorId={doctorId} key={el.time} slot={el}/>)}
          </div>
        </>
      )}
    </div>
  </div>
);
//  return(
    
//  )
}

export default AppSlots;
