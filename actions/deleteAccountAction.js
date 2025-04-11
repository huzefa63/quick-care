'use server';
import { auth, signOut } from "@/lib/googleAuth";

export async function deleteAccountAction(){
    const session = await auth();
   const res = await fetch(
     "https://quick-care-53-api.onrender.com/appointments/deleteAccount",
     {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ email: session?.user?.email }),
     }
   );
    await signOut({redirectTo:'/'});
}
