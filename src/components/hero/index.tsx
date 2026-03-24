import Link from "next/link";

export function Hero() {
  return (
    <div id="inicio" className="w-full flex flex-col items-center gap-5">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
        Desenvolvedor <br />
        Full Stack
      </h1>
      <p className="text-sm">Aplicações modernas, rápidas e escaláveis.</p>
      <div className="flex gap-10">
        <Link
          href="/#portfolio"
          className=" border border-[#D9D9D9] hover:border-blue-500 transition-colors duration-300  text-sm px-4 py-2 rounded-lg"
        >
          Ver Projetos
        </Link>
        <Link
          href="/#contato"
          className=" border border-[#D9D9D9] hover:border-blue-500 transition-colors duration-300 text-sm px-4 py-2 rounded-lg"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}
