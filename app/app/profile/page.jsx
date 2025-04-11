import DeleteBtn from "@/app/_components/DeleteBtn";
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
          <DeleteBtn />
        </div>
      </div>
    );
}

export default page
