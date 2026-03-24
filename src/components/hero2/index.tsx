import home from "../../../public/Home.png";
import Image from "next/image";

export function Hero2() {
  return (
    <div id="inicio" className="relative flex justify-center items-center">
      {/* Glow */}
      <div className="absolute w-80 h-80 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

      {/* Corpo do iPhone */}
      <div className="relative w-[230px] h-[460px] bg-black rounded-[40px] p-2 shadow-2xl border border-white/10">
        {/* Tela */}
        <div className="z-5 w-full h-full bg-black rounded-[30px] overflow-hidden relative">
          {/* Notch (Dynamic Island fake) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-6 bg-black rounded-full z-10"></div>

          {/* Imagem do app */}
          <Image
            src={home}
            alt="App Vacinas"
            className="w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
