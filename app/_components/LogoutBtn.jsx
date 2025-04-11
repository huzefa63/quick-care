"use client";
import { signOutAction } from "@/actions/authActions";
import { useMyContext } from "./SliderProvider";
import { CiLogout } from "react-icons/ci";
function LogoutBtn() {
    const {setShowSlider} = useMyContext();
    return (
      <form action={signOutAction}>
        <button
          onClick={() => setShowSlider(false)}
          className=" bg-cyan-500 flex items-center gap-3 text-white px-9 py-3 rounded-sm font-semibold tracking-widest"
        >
          <CiLogout className="size-5 font-bold"/> Logout
        </button>
      </form>
    );
}

export default LogoutBtn
