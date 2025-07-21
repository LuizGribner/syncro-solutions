'use client';

import { useRef } from "react";
import { motion } from "framer-motion";

const assets = [
  {
    type: "video",
    src: "/videos/ceo-1.mp4",
    poster: "/assets/poster-ceo-1.png",
    label: "CEO gerado por IA (exemplo real de personalização)",
  },
  {
    type: "video",
    src: "/videos/ceo-2.mp4",
    poster: "/assets/poster-ceo-2.png",
    label: "Cenas reais do nosso laboratório IA",
  },
  {
    type: "video",
    src: "/videos/macaco-ia.mp4",
    poster: "/assets/poster-macaco.png",
    label: "Criatividade sem limites com IA generativa",
  },
  {
    type: "img",
    src: "/assets/email-workflow-big.png",
    label: "Automação avançada de E-mail: sequências reais em produção",
  },
  {
    type: "img",
    src: "/assets/mockup-telegram.jpeg",
    label: "Bot de atendimento no Telegram rodando IA e automação",
  },
  {
    type: "video",
    src: "/videos/macaco-louco.mp4",
    poster: "/assets/poster-macaco-louco.png",
    label: "Mais diversão com IA: até macaco entra na onda",
  },
];

// Gradiente para cards (exceto mockup celular)
const borderGradients = [
  "from-[#f18a1f]/60 via-[#213041]/40 to-[#38bdf8]/60",
  "from-[#2e3a48]/70 via-[#f18a1f]/40 to-[#38bdf8]/60",
  "from-[#38bdf8]/70 via-[#2e3a48]/30 to-[#f18a1f]/70",
];

export default function DiferenciaisPage() {
  // refs para pausar vídeo no mouse leave
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <>
      <section className="min-h-screen bg-[#f4f1ea] text-[#151e27] pb-20">
        <motion.h2
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 pt-14"
        >
          Diferenciais em Ação <span className="text-[#f18a1f]">🔥</span>
        </motion.h2>
        {/* G R I D */}
        <div className="grid md:grid-cols-3 gap-14 items-start max-w-6xl mx-auto px-4">
          {assets.map((item, i) => {
            const isMockupCell = item.type === "img" && item.label.includes("Telegram");
            const borderStyle = !isMockupCell
              ? `bg-gradient-to-br ${borderGradients[i % borderGradients.length]}`
              : "";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 40, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`
                  group relative flex flex-col items-center
                  rounded-3xl
                  ${isMockupCell
                    ? "bg-[#f4f1ea00] p-0 shadow-xl"
                    : `${borderStyle} p-[4px] shadow-[0_8px_32px_0_rgba(49,51,110,0.13)]`}
                  hover:scale-[1.04] hover:-translate-y-2 transition-all duration-400
                `}
              >
                <div
                  className={`
                    relative w-full flex flex-col items-center justify-center rounded-2xl
                    ${isMockupCell ? "" : "bg-white overflow-hidden"}
                  `}
                  style={{
                    ...(isMockupCell && {
                      height: 550,
                      width: 280,
                      borderRadius: 32,
                      border: "6px solid #fff",
                      margin: 0,
                      padding: 0,
                      background: "#eee",
                    }),
                  }}
                >
                  {item.type === "video" ? (
                    <video
                      ref={el => videoRefs.current[i] = el}
                      src={item.src}
                      poster={item.poster}
                      muted
                      playsInline
                      preload="none"
                      className="rounded-2xl w-full h-full object-cover aspect-video transition-all duration-300"
                      onMouseEnter={e => {
                        e.currentTarget.play();
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      onTouchStart={e => {
                        e.currentTarget.play();
                      }}
                      onTouchEnd={e => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  ) : isMockupCell ? (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="object-cover w-full h-full"
                      style={{ borderRadius: "22px" }}
                    />
                  ) : (
                    <motion.img
                      src={item.src}
                      alt={item.label}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.06 * i }}
                      className="rounded-2xl w-full object-cover shadow-md aspect-video"
                      style={{ background: "#e7ecf2" }}
                    />
                  )}
                </div>
                <span
                  className="text-[15px] font-semibold text-[#213041] mt-5 text-center"
                  style={{ lineHeight: 1.4, minHeight: 36 }}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
