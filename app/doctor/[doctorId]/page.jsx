import Image from "next/image"
import photo from '@/public/doctor-1.jpg'
import TextExpander from '@/app/_components/TextExpander';
import { GrLocation } from "react-icons/gr";
import { FaRegHourglass } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import DoctorInfo from "@/app/_components/DoctorInfo";
import Link from "next/link";
import Reviews from "@/app/_components/Reviews";
import axios from "axios";
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
  const {doctorId} = params;
  const data = await axios.post(`${process.env.NEXT_PUBLIC_ROOT_URL}/doctors/getDoctor`,{id:doctorId});
  const [doctor] = data.data.doctor;
  console.log(doctor);
    return (
      <div className="h-full flex flex-col gap-8 items-center ">
        <h1 className="text-gray-800 tracking-widest mt-5 text-2xl font-semibold text-center shadow-sm italic bg-cyan-400 px-10 py-2 rounded-bl-full rounded-tr-full">
          Doctor's Profile
        </h1>
        <div className=" w-full flex flex-col  gap-5 bg-white shadow-sm rounded-2xl p-3 ">
          <div className="flex shadow-sm h-[30%] w-full  py-3 px-2 rounded-2xl ">
            <div className="w-[28%] border rounded-full h-full relative  gap-3">
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
                <span className="font-semibold text-gray-800">{doctor.speciality}</span>.
              </p>
              <p className="font-semibold">
                Rating:{" "}
                <span className="font-semibold text-gray-800">{doctor.rating}</span>
              </p>
            </div>
          </div>
          <div className=" p-3 pb-8 flex flex-col gap-5 ">
            {/* <p className="font-bold">Bio:</p> */}
            <TextExpander placeholder="Bio : " icon={<GoBook />}>
              {doctor.bio}
            </TextExpander>

            <div>
              <span className="font-bold flex gap-1 items-center">
                <GoBook /> Specialities :
              </span>{" "}
              <span className="mr-1">
                {" "}
                {doctor.specialities.map((el) => el).join(", ")}
              </span>
            </div>

            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
                <DoctorInfo placeholder="Location" text={doctor.location}>
                  <GrLocation />
                </DoctorInfo>
                <DoctorInfo placeholder="Experience" text={doctor.experience}>
                  <FaRegHourglass />
                </DoctorInfo>
                <DoctorInfo placeholder="Phone" text={doctor.phone}>
                  <FiPhone />
                </DoctorInfo>
                <DoctorInfo placeholder="Email" text={doctor.email}>
                  <MdOutlineMail />
                </DoctorInfo>
              </div>
            </div>
              <Link
                href={`/app/book-appointment/${doctor._id}`}
                className="bg-emerald-400 text-center shadow-sm  text-gray-800 font-semibold px-3 py-2 rounded-lg"
              >
                Select appointment Slots
              </Link>
          </div>
          
        </div>
      </div>
    );
}
export default page