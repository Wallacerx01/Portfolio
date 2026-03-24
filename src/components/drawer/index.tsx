"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="relative z-50">
      {/* BOTÃO MENU */}
      <button onClick={toggleMenu} className="mr-5">
        <IoMdMenu size={26} className="text-white" />
      </button>

      {/* DRAWER */}
      <div
        className={`fixed inset-0 transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={toggleMenu}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* MENU */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-[#0F0F0F] p-6 flex flex-col gap-8 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* CLOSE */}
          <div className="flex justify-end">
            <IoCloseSharp
              size={30}
              className="text-white cursor-pointer hover:scale-110 transition"
              onClick={toggleMenu}
            />
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-6 text-white text-lg font-medium">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#sobre", label: "Sobre" },
              { href: "#portfolio", label: "Portfólio" },
              { href: "#contato", label: "Contato" },
            ].map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                onClick={toggleMenu}
                className="relative w-fit text-white/70 hover:text-white transition"
              >
                {item.label}

                {/* underline animado */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4361EE] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
