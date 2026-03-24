import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-white/10 mt-20 py-10 flex flex-col items-center text-white"
    >
      <h2 className="text-xl font-semibold mb-6">Contato</h2>

      <div className="flex gap-6">
        <Link
          href="https://github.com/Wallacerx01"
          target="_blank"
          className="flex items-center gap-2 text-white/70 hover:text-white transition"
        >
          <FaGithub size={20} />
          <span className="hidden sm:block">GitHub</span>
        </Link>

        <Link
          href="https://wa.me/5562992033954"
          target="_blank"
          className="flex items-center gap-2 text-white/70 hover:text-green-400 transition"
        >
          <FaWhatsapp size={20} />
          <span className="hidden sm:block">WhatsApp</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/wallace-rodrigues-237448218/"
          target="_blank"
          className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition"
        >
          <FaLinkedin size={20} />
          <span className="hidden sm:block">LinkedIn</span>
        </Link>
      </div>

      <p className="text-white/40 text-sm mt-10 text-center">
        © 2026 WR — Todos os direitos reservados
      </p>
    </footer>
  );
}
