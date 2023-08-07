import Link from "next/link";
import YinYang from "@/components/YinYang";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-amber-950 to-amber-600">
      <Link href='/main'>
       <YinYang />
      </Link>
    </div>
  )
}
