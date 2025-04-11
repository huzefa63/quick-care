import Image from "next/image"
import photo from '@/public/doctor-1.jpg';
function ReviewCard() {
    return (
      <div className="review-card flex flex-col gap-3  shadow-sm py-3 px-2">
        <div className="grid grid-cols-7 ">
          <div className="h-[2.5rem] border w-[2.5rem] rounded-full relative">
            <Image src={photo} fill alt="photo" className="rounded-full" />
          </div>
          <div className="l-3 col-span-4">
            <h1 className="font-bold text-lg mflex flex-col justify-center ">
              John williams
            </h1>
            <p className="tracking-wider flex items-center text-sm">rated 4.6⭐</p>
          </div>
          <p className="font-bold flex items-center text-sm col-span-2" >1 month ago</p>
        </div>
        <p className="">
          {" "}
          <span className=" font-bold text-xl mr-3">&rarr;</span>
          Excellent Doctor! "Dr. James Harbour is one of the best doctors I’ve
          ever visited. He was very patient, listened carefully to my concerns,
          and provided a clear treatment plan. His expertise and kindness made
          me feel comfortable throughout the consultation. Highly recommend!" —
          Sonya Patel
        </p>
      </div>
    );
}

export default ReviewCard
