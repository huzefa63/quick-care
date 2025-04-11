"use client";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"; // Fix the import
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useMyContext } from "./SliderProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function DatePicker({ type }) {
  const [localDate, localSetDate] = useState(null);
  const [localDateTime, localSetDateTime] = useState(null);
  const { date, setDate, dateTime, setDateTime } = useMyContext();
  const router = useRouter();
  useEffect(() => {
    if (date) {
      console.log(date?.toISOString()); // Ensure safe access
      console.log(dayjs(date).format("YYYY-MM-DD"));
    }
  }, [date]);

  return (
    <div className="flex flex-col  items-center gap-1 w-3/4 ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[type === "date" ? "DatePicker" : "DateTimePicker"]}
        >
          {type === "date" ? (
            <MuiDatePicker
              label="Pick a date"
              value={localDate ? dayjs(localDate) : date ? dayjs(date) : null}
              onChange={(newDate) => {
                localSetDate(newDate);
                // setDate(newDate); // optional: sync with context
              }}
            />
          ) : (
            <DateTimePicker
              label="Pick date and time"
              value={
                localDateTime
                  ? dayjs(localDateTime)
                  : dateTime
                  ? dayjs(dateTime)
                  : null
              }
              onChange={(newDate) => {
                localSetDateTime(newDate);
                // setDateTime(newDate); // optional: sync with context
              }}
            />
          )}
        </DemoContainer>
      </LocalizationProvider>
      <button
        className="bg-teal-400 py-3 align-bottom text-sm px-2 rounded-lg w-[71%]"
        onClick={() => {
          if (type === "date") {
            setDate(localDate);
          } else {
            if(dateTime){
              router.replace("/doctors");
              toast.success("slot requested, an email will be sent to you", {
                duration: 6000,
              });
            
            }else{
              toast.error('please select date and time');
            }
          }
        }}
      >
        {type === "date" ? "check slots" : "request slot"}
      </button>
    </div>
  );
}

export default DatePicker;