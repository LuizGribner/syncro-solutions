import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/assets/lg.png";

type HeaderProps = {
  onContactClick?: () => void;
};

export default function Header({ onContactClick }: HeaderProps) {
  const [redirecting, setRedirecting] = useState(false);

  function handleDiferenciaisClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = '/diferenciais';
    }, 750);
  }

  return (
    <>
      {/* Overlay Portal */}
      {redirecting && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none animate-fadeToPortal">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f18a1f] via-[#38bdf8] to-[#2e3a48] opacity-90 transition-all duration-700"></div>
          <span className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-bounce-in">
            Entrando nos Diferenciais...
          </span>
        </div>
      )}

      <header className="bg-[#213041] text-white shadow-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo - Clicável e Animada */}
          <Link href="/" aria-label="Página inicial" className="group flex items-center gap-3 cursor-pointer">
            <Image
              src={logo}
              alt="Syncro Solutions Logo"
              width={120}
              height={40}
              className="transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </Link>

          {/* Navegação */}
          <nav>
            <ul className="flex gap-6 text-base font-medium">
              <li>
                <Link href="/servicos" className="hover:text-[#f18a1f] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <a
                  href="/diferenciais"
                  onClick={handleDiferenciaisClick}
                  className="hover:text-[#f18a1f] transition-colors cursor-pointer"
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#f18a1f] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#f18a1f] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-[#f18a1f] transition-colors bg-transparent border-none outline-none cursor-pointer p-0"
                  style={{ font: 'inherit' }}
                  type="button"
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
