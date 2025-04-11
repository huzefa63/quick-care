import { auth } from "@/lib/googleAuth"
import { redirect } from "next/dist/server/api-utils";

async function page() {
    const session = await auth();
    if(!session){
        redirect("/login");
        return null;
    };
    if(session){
        redirect("/app/appointments");
        return null;
    };
    return (
        <div>
            
        </div>
    )
}

export default page
