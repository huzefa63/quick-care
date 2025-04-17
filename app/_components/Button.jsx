import { signInAction } from "@/actions/authActions";
import Link from "next/link";

function Button({children,session}) {
    console.log(session);
    if(!session){
        return (
          <form action={signInAction}>
            <button className="bg-cyan-400 text-white px-5 shadow-sm text-lg py-3 rounded-sm tracking-widest ">
              {children}
            </button>
          </form>
        );
    }
    return (
      <Link href='/app/appointments' className="bg-cyan-400 text-white px-5 shadow-sm text-lg py-3 rounded-sm tracking-widest ">
        {children}
      </Link>
    );
}

export default Button
