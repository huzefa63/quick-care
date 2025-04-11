"use server";
import { signIn, signOut } from "@/lib/googleAuth";

export async function signInAction(){
    await signIn("google", {
      redirectTo: "https://375b-103-166-188-235.ngrok-free.app/doctors",
    });
}
export async function signOutAction(){
    await signOut({redirectTo:'/'});
}