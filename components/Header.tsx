import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/assets/lg.png";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  onContactClick?: () => void;
};

export default function Header({ onContactClick }: HeaderProps) {
  const [redirecting, setRedirecting] = useState(false);
  const [open, setOpen] = useState(false);

  function handleDiferenciaisClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = '/diferenciais';
    }, 750);
  }

  const navLinks = [
    { href: "/servicos", label: "Serviços" },
    { href: "/diferenciais", label: "Diferenciais", onClick: handleDiferenciaisClick },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/blog", label: "Blog" },
  ];

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

      <header className="bg-[#213041] text-white shadow-md py-3 fixed w-full z-40 top-0 left-0">
        <div className="container mx-auto px-4 flex items-center justify-between min-h-[52px]">
          {/* Logo maior e alinhada */}
          <Link href="/" aria-label="Página inicial" className="group flex items-center gap-3 cursor-pointer z-50">
            <Image
              src={logo}
              alt="Syncro Solutions Logo"
              width={180}
              height={52}
              className="transition-transform duration-300 group-hover:scale-110"
              priority
              style={{ maxHeight: 52, height: "auto", width: "auto" }}
            />
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-base font-semibold">
              {navLinks.map((link) =>
                link.onClick ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="hover:text-[#f18a1f] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#f18a1f] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
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

          {/* Menu Hamburguer Mobile */}
          <button
            className="md:hidden text-white text-3xl z-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir Menu"
          >
            {open ? <X size={36} /> : <Menu size={36} />}
          </button>

          {/* Overlay Mobile */}
          <div
            className={`fixed inset-0 bg-[#213041]/95 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
              open ? 'opacity-100 pointer-events-auto z-40' : 'opacity-0 pointer-events-none -z-10'
            }`}
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setOpen(false)}
              aria-label="Fechar Menu"
            >
              <X size={36} />
            </button>
            <ul className="flex flex-col gap-8 text-2xl font-semibold">
              {navLinks.map((link) =>
                link.onClick ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={e => {
                        setOpen(false);
                        link.onClick(e as any);
                      }}
                      className="hover:text-[#f18a1f] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#f18a1f] transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <button
                  onClick={() => {
                    setOpen(false);
                    onContactClick?.();
                  }}
                  className="hover:text-[#f18a1f] transition-colors text-2xl bg-transparent border-none outline-none cursor-pointer p-0"
                  style={{ font: 'inherit' }}
                  type="button"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Header fixo - espaço reduzido */}
      <div className="h-16 md:h-[64px]" />
    </>
  );
}
