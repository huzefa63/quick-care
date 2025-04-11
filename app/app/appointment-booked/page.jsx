import { FaCheckCircle } from "react-icons/fa";
import Redirecting from '@/app/_components/Redirecting';
async function Page() {
  return (
    <div className="h-[90%] flex flex-col justify-center items-center text-center px-4">
      <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-2" />
      <h1 className="text-3xl font-semibold mb-2">Thank You!</h1>
      <p className="text-lg text-gray-800">
        Your appointment has been successfully booked.
      </p>
        <Redirecting />
    </div>
  );
}

export default Page;
