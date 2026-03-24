import Image from "next/image";
import eu from "../../../public/eu.png";

export function About() {
  return (
    <section
      id="sobre"
      className="w-full min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-5xl w-full bg-[#111] border border-white/10 rounded-2xl p-6 md:p-10 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
          Sobre mim
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* IMAGEM */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition"></div>

            <Image
              src={eu}
              alt="Foto do Wallace Rodrigues"
              quality={100}
              priority
              width={280}
              height={280}
              className="relative rounded-2xl object-cover border border-white/10"
            />
          </div>

          {/* TEXTO */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Wallace Rodrigues
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              Desenvolvedor Full Stack com foco em criação de aplicações
              modernas e escaláveis. Experiência com Node.js, React, Next.js e
              integração com APIs e bancos de dados.
            </p>

            {/* STACK */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {[
                "Node.js",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "HTML",
                "CSS",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
