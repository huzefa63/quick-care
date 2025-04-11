import Image from "next/image"
import logo from '@/public/logo.webp';
import Slider from "./Slider";
import SliderBtn from "./SliderBtn";
import DarkMode from "./DarkMode";
import { BiSolidInfoCircle } from "react-icons/bi";
import { HiCash } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/lib/googleAuth";
const poppins = Poppins({
    subsets:['latin'],
    weight:'500',
})
function Navbar({user}){
    return (
      <div className="border-b h-[10%]  border-gray-400  z-[5000] ">
        <div className="bg-white  z-9 w-full lg:min-h-[10%] h-full flex items-center py-4 justify-between relative">
          <SliderBtn />
          <Link href="/" className="flex items-center gap-2 ml-3 z-2">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={30}
              className="rounded-full lg:ml-5 ml-2"
            />
            <h1 className={`${poppins.className} text-2xl`}>Quick Care</h1>
          </Link>
          <div className="hidden lg:flex  gap-18 text-xl tracking-widest">
            <Link
              href="/about"
              className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-800"
            >
              <BiSolidInfoCircle className="size-6 text-cyan-500 " /> about
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-800"
            >
              <HiCash className="size-6 text-cyan-500" /> pricing
            </Link>
            <Link
              href="/doctors"
              className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-800"
            >
              <FaUserDoctor className="size-5 text-cyan-500" /> doctors
            </Link>
          </div>

          {!user ? (
            <FaUserCircle size={30} className="mr-10  hover:cursor-pointer" />
          ) : (
            <div className="w-[10%] relative h-[95%] mr-10">
              <Image src={user.user.image} fill alt="user" className="rounded-full" />
            </div>
          )}
        </div>
        {/* slider */}
        <Slider user={user} />
      </div>
    );
}
// }

export default Navbar
       
