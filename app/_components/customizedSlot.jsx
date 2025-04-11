'use client';

import DatePicker from "@/app/_components/DatePicker";
import { useMyContext } from "@/app/_components/SliderProvider";

function CustomizedSlot() {
  const {date} = useMyContext();
  console.log('abcd',date)
  console.log('abcd',date.$d)
    if(date) return (
      <div className="p-2 flex flex-col gap-3 items-center">
        <h1 className="text-xl ">Want a personalised time slot ?</h1>
        <p className="text-center">
          select date and time as per your comfort , Our doctor will contact you
        </p>
        <DatePicker />
      </div>
    );
}

export default CustomizedSlot