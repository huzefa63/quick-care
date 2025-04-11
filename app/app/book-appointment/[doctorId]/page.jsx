import TimeSlot from '@/app/_components/TimeSlot';
import photo from '@/public/doctor-1.jpg';
import Image from 'next/image';

import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import DatePicker from '@/app/_components/DatePicker';
import { auth } from '@/lib/googleAuth';
import { redirect } from 'next/navigation';
import axios from 'axios';
import AppSlots from '@/app/_components/AppSlots';
import CustomizedSlot from '@/app/_components/customizedSlot';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// const stripePromise = loadStripe(
//   "pk_test_51RCHkERqyP2tLMLl4CLnpbj8vBk1Oindy2jnc7LY7wdHRpAotTEryZxy93krKIsMfTboEG9yuhwno3GM0ueUB3r400QGmWSIxC"
// );
// const doctor = {
//   id: 1,
//   name: "Dr. Sarah Johnson",
//   specialty: "Cardiologist",
//   experience: "15 years",
//   location: "New York, USA",
//   rating: 4.8,
//   reviews: 120,
//   bio: "Dr. Sarah Johnson is a board-certified cardiologist with extensive experience in treating heart-related diseases. She is known for her compassionate care and advanced medical techniques.",
//   specialties: ["Heart Checkup,", "ECG Analysis,", "Hypertension Treatment"],
//   photo: "/doctor1.jpg",
//   contact: {
//     phone: "+1 234 567 890",
//     email: "sarah.johnson@hospital.com",
//     website: "www.drsarahjohnson.com",
//   },
//   availability: [
//     { day: "Monday", time: "9:00 AM - 5:00 PM" },
//     { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
//     { day: "Friday", time: "8:00 AM - 4:00 PM" },
//   ],
// };
async function page({params}) {

  const session = await auth();
  if(!session) redirect('/login');

  const { doctorId } =await  params;

  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_ROOT_URL}/doctors/getDoctor`,
    { id: doctorId }
  );
  const [doctor] = data.data.doctor;
  return (
    
      <div className="h-full flex flex-col items-center py-3 px-2 gap-5 ">
        <h1 className="font-bold px-5 py-2 bg-emerald-400 text-gray-800 rounded-xl text-2xl">
          Book An Appointment
        </h1>
        <div className="w-full h-[20%]">
          <div className="flex gap-5 [box-shadow:0px_6px_12px_rgba(0,0,0,0.1),0px_-6px_12px_rgba(0,0,0,0.05)] h-full w-full  py-3 px-2 rounded-2xl ">
            <div className="w-[26%] border rounded-full h-full relative  gap-3">
              <Image
                alt="doctor"
                src={`/${doctor.image}.jpg`}
                fill
                className="rounded-full shadow-sm"
              />
            </div>
            <div className="px-3 flex flex-col justify-around pt-1.5">
              <h1 className="tracking-wider font-semibold">
                <span className="font-[900] text-gray-800 break-words hyphens-auto ">
                  {doctor.name}
                </span>
                .
              </h1>

              <p className="font-semibold">{doctor.speciality}</p>
              <p className="font-semibold">
                experience:{" "}
                <span className="font-semibold text-gray-800">
                  {doctor.experience} years
                </span>
                .
              </p>
              <p className="font-semibold">
                Rating:{" "}
                <span className="font-semibold text-gray-800">
                  {doctor.rating}⭐
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <AppSlots doctorId={doctorId} user={session.user} />
        </div>
        <CustomizedSlot />
      </div>

  );
}

export default page;
