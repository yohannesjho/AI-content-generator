import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-lime-500 flex justify-between p-2 ">
        <Link href='/' className="hover:bg-purple-700 hover:px-2 hover:text-white duration-300 px-2 py-1 rounded-md" >Home</Link>
        <Link href='/dashboard'><Button>Go to dashboard</Button></Link>
      </div>
      <div className="bg-homepage h-screen bg-cover bg-center ">
        
      </div>
    </main>
  );
}
