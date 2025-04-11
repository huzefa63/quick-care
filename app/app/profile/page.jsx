import { auth } from "@/lib/googleAuth";
import { MdDelete } from "react-icons/md";
async function page() {
     const session = await auth();
     if(!session) redirect('/login');
    return (
      <div className="h-full flex items-center p-3">
        <div className="py-5 bg-white shadow-sm w-full h-[40%] flex flex-col items-center gap-5">
          <h1 className="text-red-600 font-bold tracking-wider text-xl">
            delete your account
          </h1>
          <div className="w-3/4">
            <p className="text-center">
              Are you sure you want to delete your account ? This action is{" "}
              <span className="text-red-500 font-bold">permanent</span> and
              cannot be <span className="text-red-500 font-bold">undone</span> ,
              all of your data will be lost
            </p>
          </div>
          <button className="bg-red-500 gap-2 text-white px-4 py-2 flex items-center">
            <MdDelete />
            Delete Account
          </button>
        </div>
      </div>
    );
}

export default page
