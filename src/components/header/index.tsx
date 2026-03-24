import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logoofc.png";
import { Drawer } from "@/components/drawer";

export function Header() {
  return (
    <header className="fixed w-full border-b border-[#D9D9D940] z-10 bg-[#111111]">
      <div className="w-full max-w-7xl flex items-center justify-between mx-auto">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo do site"
            quality={100}
            width={150}
            height={100}
            className="hover:scale-105 transition-all duration-600"
          />
        </Link>
        <div className="md:hidden">
          <Drawer />
        </div>
        <nav className="md:flex gap-6 text-sm hidden">
          <Link
            href="/#inicio"
            className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Ínicio
          </Link>
          <Link
            href="/#sobre"
            className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Sobre
          </Link>

          <Link
            href="/#portfolio"
            className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Portfólio
          </Link>
          <Link
            href="/#contato"
            className="relative text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
