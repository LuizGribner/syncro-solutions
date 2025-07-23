'use client';

import { useState } from "react";

export default function SobreNos() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="min-h-screen bg-[#f4f1ea] text-[#151e27] pb-20 flex flex-col items-center">
      {/* HERO */}
      <div className="max-w-4xl w-full mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Sobre a <span className="text-[#f18a1f]">Syncro Solutions LLC</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-85 mb-6">
          Nascemos na <span className="font-bold">Upwork</span>, somos oficialmente uma <span className="font-bold text-[#f18a1f]">LLC registrada em Wyoming, EUA</span> e trouxemos para o Brasil as automações, integrações e cultura de resultado que aprendemos com clientes dos Estados Unidos, Europa e Ásia.
        </p>
      </div>

      {/* VÍDEO DE APRESENTAÇÃO */}
      <div className="w-full flex justify-center mb-10">
        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#eaeaea] border-4 border-[#f18a1f]/30">
          <iframe
            src="https://www.youtube.com/embed/Qq03gZ7ky5c"
            title="Vídeo de Apresentação Syncro Solutions"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 0.5s",
              minHeight: 360,
            }}
          />
          {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#eaeaea]">
              <span className="text-[#213041] font-bold text-xl animate-pulse">
                Carregando vídeo...
              </span>
            </div>
          )}
        </div>
      </div>

      {/* AGENDAMENTO DE CALL via Cal.com (iframe, seguro e universal) */}
      <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-[#eee] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-[#213041]">Agende uma conversa!</h2>
        <p className="text-sm mb-4 opacity-80">
          Quer automatizar sua empresa, entender como funciona, tirar dúvidas ou já começar seu projeto? Escolha um horário e fale direto comigo!
        </p>
        <div className="w-full h-[560px] rounded-xl overflow-hidden shadow border-2 border-[#f18a1f]/20">
          <iframe
            src="https://cal.com/syncro-solutions-llc/30min"
            width="100%"
            height="100%"
            style={{ minHeight: "560px", border: "none" }}
            title="Agendamento Syncro Solutions LLC"
            allow="camera; microphone; fullscreen; speaker; display-capture"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
