import Image from "next/image";
import Link from "next/link";
import "@/styles/components.css"
export default function Header(){
   return (
    <header>
      <nav>
        <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            color="white"
        />
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </nav>
    </header>
   )
}