import Image from "next/image"
import image1 from '@/public/doctor-1.jpg'
import Tab from "@/app/_components/Tab";
import  Accordion  from "@/app/_components/Accordion";
function Page() {
    return (
      <div className="h-full">
        <div className="pt-5 flex flex-col items-center gap-5">
          <h1 className="text-xl text-center mt-3 tracking-wide font-bold">
            <span className="bg-cyan-300  px-3 py-2 rounded-full shadow-sm">
              About Quick Care and our mission
            </span>
          </h1>

          <div className=" w-full mt-10 px-3 ">
            <div className="flex gap-3">
              <div className="relative min-w-[40%]">
                <Image
                  src={image1}
                  alt="doctor "
                  className="rounded-sm shadow-sm z-[-1]"
                  fill
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-lg tracking-widest">
                  We care about you
                </p>
                <p className="break-words hyphens-auto">
                  “Empowering you to find the right healthcare professionals and
                  easily book your appointments online.
                </p>
              </div>
            </div>
          </div>

          <div className=" w-[95%] p-5 flex flex-col items-center">
            <div className=" text-center ">
              <h1 className="tracking-widest shadow-sm rounded-bl-full rounded-tr-full px-12 py-2 font-semibold inline-block bg-emerald-300 text-2xl ">
                Our Mission
              </h1>
            </div>
            <div className="bg-white w-[95%] tracking-wide rounded-xl shadow-sm break-words hyphens-auto p-5  mt-4">
              <h1>
                Our mission is to simplify healthcare by making doctor
                appointments easy, fast, and accessible for everyone. We aim to
                bridge the gap between patients and doctors, offering a smooth
                and secure platform for both.
              </h1>
            </div>
          </div>

          <div className=" h-[22rem] w-[95%] flex flex-col items-center gap-5 ">
            <h1 className="tracking-widest shadow-sm rounded-tl-full rounded-br-full px-12 py-2 font-semibold inline-block bg-teal-400 text-2xl ">
              Reviews
            </h1>
            <Tab />
          </div>

          <div className="w-[95%] left-1/2 text-center items-center h-[22rem] flex flex-col gap-5">
            <h1 className="tracking-widest shadow-sm  rounded-full px-12 py-2 font-semibold inline-block bg-teal-400 text-2xl ">
              FAQS
            </h1>
            <Accordion />
          </div>
        </div>
      </div>
    );
}

export default Page
