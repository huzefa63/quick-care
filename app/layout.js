import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import SliderProvider from "@/app/_components/SliderProvider";
import { auth } from "@/lib/googleAuth";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quick Care || always for you",
};

export default async function RootLayout({ children }) {
  const user = await auth();
  console.log(user);
  return (
    <html lang="en">
      <body
        className={`bg-gray-100 max-h-full ${poppins.className} antialiased`}
      >
        <Toaster position="top-right"/>
        <SliderProvider>
          <Navbar user={user}/>
          <div className="h-[90%] overflow-auto">{children}</div>
        </SliderProvider>
      </body>
    </html>
  );
}
