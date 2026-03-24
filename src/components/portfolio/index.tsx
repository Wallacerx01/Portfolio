export function Portfolio() {
  const projetos = [
    {
      titulo: "App Vacinas (TCC)",
      descricao: "Aplicativo para controle de vacinas com QR Code.",
      techs: ["FlutterFlow", "Supabase", "Firebase"],
      link: "https://github.com/Wallacerx01/App-carteira-de-vacina-o/tree/main/public/projects/app-vacinas",
    },
    {
      titulo: "Sistema de gerênciamento Pedidos",
      descricao: "Dashboard com pedidos em tempo real usando React e Supabase.",
      techs: ["React", "Supabase", "Tailwind"],
      link: "https://painel-reluzente.vercel.app/",
    },
    {
      titulo: "Cardapio digital",
      descricao: "Painel para os clientes fazer pedidos.",
      techs: ["HTML", "JavaScript", "CSS"],
      link: "https://cardapioreluzente.netlify.app",
    },
    {
      titulo: "Landing page de escritório",
      descricao: "Landing page profissional para escritório de advocacia.",
      techs: ["React", "TypeScript", "Tailwind"],
      link: "https://www.merodriguesadvogados.com.br/",
    },
    {
      titulo: "CriptoMoedas",
      descricao: "Projeto desenvolvido no curso do Sujeito Programador",
      techs: ["React", "TypeScript", "CSS"],
      link: "https://devcurrencywr.netlify.app/",
    },
    {
      titulo: "Snake Game",
      descricao: "Projeto de um jogo da cobrinha",
      techs: ["HTML", "JavaScript", "CSS"],
      link: "https://snakegamewallacerx01.netlify.app/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
          Portfólio
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition duration-300 group"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition">
                {projeto.titulo}
              </h2>

              <p className="text-gray-400 text-sm mb-4">{projeto.descricao}</p>

              {/* Techs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projeto.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botão */}
              <a
                href={projeto.link}
                target="_blank"
                className="inline-block mt-auto text-sm text-blue-500 hover:underline"
              >
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
