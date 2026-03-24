import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="w-full flex flex-col items-center justify-center text-center gap-6 py-32"
    >
      <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">
        Desenvolvedor <br />
        <span className="text-[#4361EE]">Full Stack</span>
      </h1>

      <p className="text-white/60 text-sm sm:text-base max-w-[500px]">
        Aplicações modernas, rápidas e escaláveis com foco em performance e
        experiência do usuário.
      </p>

      <div className="flex gap-4 mt-4">
        <Link
          href="/#portfolio"
          className="px-5 py-2.5 rounded-lg border border-white/20 hover:border-[#4361EE] hover:text-[#4361EE] transition"
        >
          Ver Projetos
        </Link>

        <Link
          href="/#contato"
          className="px-5 py-2.5 rounded-lg bg-[#4361EE] text-white hover:opacity-90 transition"
        >
          Contato
        </Link>
      </div>
    </section>
  );
}
