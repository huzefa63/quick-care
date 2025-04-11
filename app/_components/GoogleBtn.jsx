"use client";

import { signInAction } from "@/actions/authActions";
import Image from "next/image";

function GoogleBtn() {
    return (
      <form action={signInAction}>
        <button className="flex rounded-xl shadow-sm bg-white px-5 py-2 gap-1 text-xl">
          <Image
            alt="photo"
            width={30}
            height={20}
            src="https://ssl.gstatic.com/images/branding/product/1x/gsa_512dp.png"
          />
          Continue with google
        </button>
      </form>
    );
}

export default GoogleBtn
