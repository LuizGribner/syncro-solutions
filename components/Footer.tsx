import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  onContactClick?: () => void;
};

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="bg-[#2e3a48] text-white pt-14 pb-6 mt-24 relative z-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center gap-10">
        {/* Logo & Slogan */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/assets/lg.png"
            alt="Logo Syncro Solutions"
            width={120}
            height={40}
            className="mb-2"
          />
          <span className="text-base opacity-70">
            Automação & IA para empresas que querem resultado de verdade.
          </span>
        </div>

        {/* Links rápidos */}
        <nav>
          <ul className="flex gap-8 flex-wrap text-base font-medium">
            <li>
              <Link href="/servicos" className="hover:text-[#f18a1f] transition-colors">
                Serviços
              </Link>
            </li>
              <button
                onClick={onContactClick}
                className="hover:text-[#f18a1f] transition-colors bg-transparent border-none outline-none cursor-pointer p-0"
                style={{ font: 'inherit' }}
                type="button"
              >
                Contato
              </button>
          </ul>
        </nav>

        {/* Redes Sociais com SVG */}
        <div className="flex gap-5 items-center">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/solutionssyncro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
              className="hover:text-[#f18a1f] transition-colors"
            >
              <path
                fill="currentColor"
                d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 1.5A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5h10zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 1.5A3.5 3.5 0 1 1 8.5 12A3.5 3.5 0 0 1 12 8.5zm5.25-1.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/syncro-solutions/ "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
              className="hover:text-[#f18a1f] transition-colors"
            >
              <path
                fill="currentColor"
                d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-7 7.8v7.2h2.4v-4c0-1.14.88-2.06 2-2.06c1.12 0 2 .92 2 2.06v4h2.4V12c0-2.36-1.92-4.3-4.4-4.3c-2.48 0-4.4 1.94-4.4 4.3zm-6 7.2h2.4v-7.2H6zm1.2-8.52a1.44 1.44 0 1 1 0 2.88a1.44 1.44 0 0 1 0-2.88z"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5541992017296?text=Olá%20Syncro%20Solutions%2C%20tenho%20interesse!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
              className="hover:text-[#f18a1f] transition-colors"
            >
              <path
                fill="currentColor"
                d="M12 2C6.475 2 2 6.478 2 12c0 1.996.587 3.848 1.597 5.412L2 22l4.682-1.522A10.002 10.002 0 0 0 12 22c5.522 0 10-4.478 10-10S17.522 2 12 2zm0 1.833A8.168 8.168 0 0 1 20.167 12c0 1.771-.553 3.418-1.509 4.8l.983 3.027l-3.094-.974a8.166 8.166 0 1 1-6.963-15.02zm-2.166 5.5c-.162-.372-.332-.38-.483-.387a4.447 4.447 0 0 0-.389-.018c-.163 0-.333.047-.507.258a2.06 2.06 0 0 0-.56 1.413c0 .832.488 1.646 1.092 2.347c.57.664 1.352 1.317 2.37 1.826c.908.45 1.288.497 1.556.497c.222 0 .358-.036.494-.233c.135-.198.56-.685.56-.868c0-.184-.125-.264-.263-.347c-.137-.084-.83-.411-.96-.457c-.13-.047-.225-.073-.32.073c-.094.146-.368.457-.45.549c-.082.093-.165.105-.308.036c-.143-.07-.605-.223-1.15-.711c-.426-.381-.713-.847-.797-.99c-.083-.144-.009-.222.063-.295c.065-.065.146-.17.22-.258c.073-.087.097-.147.15-.241c.054-.095.028-.192-.019-.264c-.048-.072-.421-1.03-.595-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="w-full border-t border-[#f18a1f]/20 mt-10 mb-3"></div>
      {/* Direitos */}
      <div className="text-center text-sm opacity-50">
        © {new Date().getFullYear()} Syncro Solutions. Todos os direitos reservados.
      </div>
    </footer>
  );
}
