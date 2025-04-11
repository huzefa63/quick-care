'use client';
import { useMyContext } from "@/app/_components/SliderProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { format } from "date-fns";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdCurrencyRupee, MdOutlineCancel } from "react-icons/md";

const stripePromise = loadStripe(
  "pk_test_51RCHkERqyP2tLMLl4CLnpbj8vBk1Oindy2jnc7LY7wdHRpAotTEryZxy93krKIsMfTboEG9yuhwno3GM0ueUB3r400QGmWSIxC"
);

function TimeSlot({slot,doctorId,user,index}) {
  const {date} = useMyContext();
  const formatted = format(date,'dd MMMM , yyyy');
  console.log(formatted);
  const newDate = new Date("23 April , 2025 10:30 AM");
  const router = useRouter();
  const [isSlot,setIsSlot] = useState(false);
  // async function handleBookAppointment(){
  //   const dateTime = `${formatted}T${slot.time}`;
  //           const appointment = {
  //             date: dateTime,
  //             doctor: doctorId,
  //             userId: user.email,
  //             status: "upcoming",
  //             fee:300,
  //           };

  //           try {
  //             const isSlot = await axios.post(
  //               `${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/createAppointment`,
  //               { appointment }
  //             );
  //             console.log(isSlot);
  //             if (isSlot.data.isAvailable) {
  //               toast.success("Appointment booked");
  //               router.replace("/app/appointments");
  //             }
  //           } catch (err) {
  //             console.log(err);
  //           }
  // }
  async function handleCheckSlot(){
     const dateTime = `${formatted}T${slot.time}`;
     const appointment = {
       date: dateTime,
       doctor: doctorId,
       userId: user.email,
       status: "upcoming",
     };
    try{
       const isSlot = await axios.post(
         `${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/checkSlot`,
         { appointment }
       );
       console.log(isSlot);
        if (isSlot.data.isSlot) setIsSlot(true);
        if (!isSlot.data.isSlot) toast.error("slot is not available");
       console.log(isSlot);
    }catch(err){
      toast.error('something went wrong!');
      console.log(err);
    }
    
  }
    return (
    
        <div className="w-full border-b-1 text-sm border-gray-300 pl-2 gap-0.5 py-2 grid grid-cols-9">
          <p className="col-span-3 my-auto flex gap-1">
            <span>{index + 1})</span> {formatted}
          </p>
          <p className="col-span-2 my-auto">{slot.time} </p>
          <p className="my-auto col-span-2 flex items-center">
            {slot.fee} <MdCurrencyRupee />
          </p>
          <button
            onClick={handleCheckSlot}
            className="px-4 m-auto py-1 bg-cyan-400 col-span-2 rounded-lg"
          >
            check
          </button>
          {isSlot ? (
            <>
              <div className="h-full w-full fixed backdrop-blur-[0.9px]  z-50 top-0 left-0"></div>
              <div
                style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
                className="w-3/4  z-[51] p-5 bg-white rounded-lg  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <MdOutlineCancel
                  size={30}
                  className="absolute right-2 top-2"
                  onClick={() => setIsSlot(false)}
                />
                <h1 className="text-center text-lg font-extrabold tracking-wider">
                  Slot Is Available!
                </h1>
                <p className="text-center mt-1 text-lg text-gray-800 font-semibold tracking-wider">
                  Book now ?
                </p>
                <div className="flex justify-center gap-6 mt-6">
                  <button
                    // onClick={handleBookAppointment}
                    onClick={async () => {
                       const dateTime = `${formatted}T${slot.time}`;
                       const appointment = {
                         date: dateTime,
                         doctor: doctorId,
                         userId: user.email,
                         status: "upcoming",
                         fee: 300,
                       };
                      const stripe = await stripePromise;
                      const session = await axios.post(
                        `${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/checkout-session`,
                        {
                          date: dateTime,
                          doctor: doctorId,
                          userId: user.email,
                          status: "upcoming",
                          fee: '300',
                        }
                      );
                      await stripe.redirectToCheckout({sessionId:session.data.session.id});
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium shadow"
                  >
                    Book
                  </button>
                  <button
                    onClick={() => setIsSlot(false)}
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition font-medium shadow"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
    
    );
}

export default TimeSlot
