import background from '@/public/background.jpg';
import Image from "next/image";
import Button from "@/app/_components/Button";

import { Poppins } from "next/font/google";
import { auth } from '@/lib/googleAuth';
const poppins = Poppins({
    subsets:['latin'],
    weight:'700',
})
async function HomepageMain() {
  const session = await auth();
    console.log(session);
    return (
      <main className="flex flex-col relative items-center py-3 h-full ">
        <Image
          src={background}
          fill
          className="object-cover z-[-1]"
          quality={100}
          alt="bg image"
        />
        <div
          className={`${poppins.className} text-center text-xl tracking-wider relative top-1/9 text-blue-900`}
        >
          <h1 className=""> "Book Your Doctor's Appointment"</h1>

          <p className="font-bold tracking-widest mt-1">in Minutes!</p>
        </div>
        <div className="absolute top-[70%]">
          <Button session={session}>{!session ? "Login to Book Appointment" : "continue to app"}</Button>
        </div>
      </main>
    );
}

export default HomepageMain
