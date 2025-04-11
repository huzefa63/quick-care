import DoctorCard from "@/app/_components/DoctorCard";
import axios from "axios";

// const doctors = [
//   {
//     id: "doc1",
//     name: "Dr. Emily Carter",
//     specialization: "Cardiologist",
//     experience: 12, // years
//     rating: 4.8,
//     reviews: 120,
//     image: "/images/doctors/emily-carter.jpg",
//     hospital: "City Health Care",
//     location: "New York, NY",
//     consultationFee: 50, // in dollars
//     availableSlots: ["10:00 AM", "2:30 PM", "5:00 PM"],
//     description:
//       "Dr. Emily Carter is a highly experienced cardiologist specializing in heart disease prevention and treatment. With over a decade of experience, she provides personalized care for all her patients.",
//   },
//   {
//     id: "doc2",
//     name: "Dr. Michael Brown",
//     specialization: "Orthopedic Surgeon",
//     experience: 15,
//     rating: 4.7,
//     reviews: 98,
//     image: "/images/doctors/michael-brown.jpg",
//     hospital: "Health Plus Orthopedics",
//     location: "Los Angeles, CA",
//     consultationFee: 75,
//     availableSlots: ["9:00 AM", "1:00 PM", "4:00 PM"],
//     description:
//       "Dr. Michael Brown is an orthopedic surgeon specializing in sports injuries and joint replacement surgeries. He is known for his compassionate approach and effective treatments.",
//   },
//   {
//     id: "doc3",
//     name: "Dr. Sarah Lee",
//     specialization: "Pediatrician",
//     experience: 8,
//     rating: 4.9,
//     reviews: 200,
//     image: "/images/doctors/sarah-lee.jpg",
//     hospital: "Bright Future Pediatrics",
//     location: "Chicago, IL",
//     consultationFee: 45,
//     availableSlots: ["10:30 AM", "3:00 PM", "6:00 PM"],
//     description:
//       "Dr. Sarah Lee is a pediatrician with a passion for child care. She provides excellent healthcare services for children from birth through adolescence.",
//   },
//   {
//     id: "doc4",
//     name: "Dr. James Wilson",
//     specialization: "Dermatologist",
//     experience: 10,
//     rating: 4.6,
//     reviews: 150,
//     image: "/images/doctors/james-wilson.jpg",
//     hospital: "Skin Health Clinic",
//     location: "Miami, FL",
//     consultationFee: 60,
//     availableSlots: ["11:00 AM", "2:00 PM", "5:30 PM"],
//     description:
//       "Dr. James Wilson is a skilled dermatologist, specializing in skin conditions such as acne, eczema, and psoriasis. He is known for his gentle approach to treatments.",
//   },
//   {
//     id: "doc5",
//     name: "Dr. Linda Smith",
//     specialization: "Gynecologist",
//     experience: 18,
//     rating: 4.7,
//     reviews: 85,
//     image: "/images/doctors/linda-smith.jpg",
//     hospital: "Women's Health Center",
//     location: "San Francisco, CA",
//     consultationFee: 70,
//     availableSlots: ["8:30 AM", "12:00 PM", "4:30 PM"],
//     description:
//       "Dr. Linda Smith is an experienced gynecologist, offering a wide range of services including regular checkups, prenatal care, and menopause treatment.",
//   },
//   {
//     id: "doc6",
//     name: "Dr. Daniel Johnson",
//     specialization: "Neurologist",
//     experience: 20,
//     rating: 4.5,
//     reviews: 110,
//     image: "/images/doctors/daniel-johnson.jpg",
//     hospital: "NeuroCare Institute",
//     location: "Dallas, TX",
//     consultationFee: 90,
//     availableSlots: ["9:30 AM", "1:30 PM", "3:30 PM"],
//     description:
//       "Dr. Daniel Johnson is a neurologist specializing in diagnosing and treating neurological disorders such as migraines, epilepsy, and Alzheimer's disease.",
//   },
//   {
//     id: "doc7",
//     name: "Dr. Jessica Davis",
//     specialization: "Dentist",
//     experience: 10,
//     rating: 4.8,
//     reviews: 160,
//     image: "/images/doctors/jessica-davis.jpg",
//     hospital: "Smile Dental Clinic",
//     location: "Boston, MA",
//     consultationFee: 55,
//     availableSlots: ["9:00 AM", "12:30 PM", "2:00 PM"],
//     description:
//       "Dr. Jessica Davis is a skilled dentist who offers general dental services, including cleanings, fillings, and orthodontic treatments, with a focus on patient comfort.",
//   },
//   {
//     id: "doc8",
//     name: "Dr. Kevin Martinez",
//     specialization: "General Practitioner",
//     experience: 13,
//     rating: 4.6,
//     reviews: 130,
//     image: "/images/doctors/kevin-martinez.jpg",
//     hospital: "Greenwood Medical Center",
//     location: "Houston, TX",
//     consultationFee: 50,
//     availableSlots: ["10:00 AM", "1:00 PM", "4:30 PM"],
//     description:
//       "Dr. Kevin Martinez is a compassionate general practitioner who provides primary care for patients of all ages, from routine checkups to urgent care.",
//   },
// ];



async function page() {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_ROOT_URL}/doctors/allDoctors`);
  const doctors = data.data.doctors;
  console.log(doctors);
  return (
    <div className="h-full overflow-auto pt-4 px-5 flex  flex-col gap-3">
      <h1 className="font-semibold shadow-sm relative left-1/2 -translate-x-1/2 px-5 py-2 -skew-x-12 bg-emerald-400 w-fit text-gray-800 text-center text-3xl">
        Our Doctors
      </h1>
      <p className="text-center text-lg">
        "Your health is our priority. Find the best doctors for your needs with
        ease."
      </p>
      <div className=" h-fit p-4 flex flex-col justify-between  gap-5">
        {doctors.map((doctor, i) => (
          <DoctorCard key={doctor._id} index={i} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default page;
