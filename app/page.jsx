import HomepageMain from "@/app/_components/HomepageMain";
import { auth } from "@/lib/googleAuth";
import { redirect } from "next/navigation";

export const metadata = {
  title:'quick cure'
}

export default async function Home() {
  const session = await auth();
  
  
  return (
    <div className=" h-full overflow-hidden border">
      <HomepageMain session={session}/>
    </div>
  );
}
