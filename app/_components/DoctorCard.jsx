import Image from "next/image";
import Link from "next/link";

function DoctorCard({doctor,index}) {
    return (
      <div className="bg-white flex gap-3 relative shadow-sm rounded-lg w-full h-[12rem]">
        <div className="relative h-3/4 top-1/2 -translate-y-1/2 w-[5%] rounded-tr-full rounded-br-full bg-teal-600 "></div>
        <div className="w-[60%] flex flex-col justify-around">
          <h1 className="font-semibold">{doctor.name}</h1>
          <p className="border-teal-500 inline-block border-b-[1px]">
            {doctor.speciality}
          </p>
          <p>Rated {doctor.rating} ⭐</p>
          <p>{doctor.experience} years of experience</p>
          <div className="w-full flex gap-2">
            <Link href={`/doctor/${doctor._id}`} className="px-5 py-2 bg-cyan-400 rounded-sm">
              Profile
            </Link>
            <Link href={`/app/book-appointment/${doctor._id}`} className="px-4 py-2 bg-amber-40 bg-emerald-400 rounded-sm">
              appoint{" "}
            </Link>
          </div>
        </div>

        <div className="shadow-lg border-[0.5px] overflow-hidden h-[5rem] relative top-1/2 -translate-y-1/2 rounded-full w-[5rem] z-2">
          <Image
            fill
            className="object-cover"
            alt="nothing"
            src={`/doctor-${index + 1}.jpg`}
          />
        </div>

        <div
          className={`absolute right-0 top-0 h-full w-[30%] ${index % 2 === 0 ? 'bg-teal-500 ':'bg-cyan-400'}`}
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 85%, 40% 50%, 0 15%)",
          }}
        ></div>
      </div>
    );
}

export default DoctorCard



// ✅ Profile picture
// ✅ Name
// ✅ Specialization
// ✅ Rating (stars)
// ✅ Experience (years)
// ✅ Button to "View Profile" or "Book Appointment"