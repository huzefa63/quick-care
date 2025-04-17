import AppointmentCard from "@/app/_components/AppointmentCard";
import AppointmentContainer from "@/app/_components/AppointmentContainer";
import { auth } from "@/lib/googleAuth";
import axios from "axios";
import { redirect } from "next/navigation";




async function  page() {
    const session = await auth();
    console.log(session);
    let data = [];
    if(!session){
      redirect("/login");
    }
    try{
        console.log('req made');
         const response = await fetch(
       `${process.env.NEXT_PUBLIC_ROOT_URL}/appointments/getAppointment`,
       {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email: session.user.email }),
         cache: "no-store", // Ensures fresh data
       }
     );
     data = await response.json();
        console.log('hello from try');
    }catch(err){
        console.log('hello from catch');
        return (
      <div className="h-full flex items-center justify-center text-red-600">
        something went wrong! Please refresh the page or try again later.
      </div>
    );
    }
    
    return (
      <div className="h-full flex flex-col items-center py-3">
        <h1 className="text-gray-800 mb-5 tracking-widest mt-5 text-2xl font-semibold text-center shadow-sm italic bg-cyan-400 px-10 py-2 rounded-bl-full rounded-tr-full">
          My Appointments
        </h1>

        <div className="w-[95%] h-full  ">
          <AppointmentContainer appointment={data} session={session}/>
        </div>
      </div>
    );
}

export default page
