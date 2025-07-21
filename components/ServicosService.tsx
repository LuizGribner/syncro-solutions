'use client';
import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ModalDemo from "./ModalDemo";

// BASE DE SERVIÇOS
const services = [
  {
    title: "Automação de Processos Empresariais",
    desc: "Elimine tarefas manuais, reduza custos e ganhe escala. De integrações de sistemas a fluxos de atendimento e financeiro.",
    challenges: [
      "Equipe sobrecarregada e erros manuais frequentes",
      "Dificuldade para integrar vendas, financeiro e atendimento",
      "Perda de tempo com tarefas repetitivas e relatórios"
    ],
    img: "/assets/servicos/automation-hero.png"
  },
  {
    title: "Bots Inteligentes de Atendimento (WhatsApp, Telegram, Web)",
    desc: "Transforme o atendimento com bots que entendem, automatizam e resolvem de verdade — em português ou inglês.",
    challenges: [
      "Clientes esperando no WhatsApp e sem resposta",
      "Equipe pequena para alto volume de leads",
      "Perda de oportunidades por falta de follow-up"
    ],
    img: "/assets/servicos/bot-hero.png"
  },
  {
    title: "Integrações com CRM e Ferramentas (HubSpot, RD, Pipedrive)",
    desc: "Sincronize vendas, marketing, suporte e financeiro. Seu time 100% integrado, sem planilhas ou retrabalho.",
    challenges: [
      "Leads perdidos na transição de etapas",
      "Informações desencontradas entre plataformas",
      "Falta de visão centralizada do cliente"
    ],
    img: "/assets/servicos/crm-hero.png"
  },
  {
    title: "Automação de E-mails Inteligentes (Cold Email, Marketing, Follow-up)",
    desc: "E-mails com IA, disparos automáticos, respostas inteligentes e rastreio em tempo real de aberturas e cliques.",
    challenges: [
      "Campanhas frias, poucos resultados",
      "Equipe de vendas presa em disparos manuais",
      "Falta de personalização e tracking real"
    ],
    img: "/assets/servicos/email-hero.png"
  },
  {
    title: "Dashboards, Relatórios e BI em Tempo Real",
    desc: "Saia da cegueira gerencial: dados de vendas, produção, atendimento e resultados em dashboards interativos.",
    challenges: [
      "Gestão por achismo: falta de indicadores",
      "Demora para consolidar números e resultados",
      "Dificuldade de analisar dados do time"
    ],
    img: "/assets/servicos/dashboard-hero.png"
  },
  {
    title: "RPA & Robôs Digitais (ERP, Financeiro, RH, Fiscal)",
    desc: "Robôs que operam como pessoas: baixam XML, integram ERPs, preenchem sistemas, processam boletos e automatizam seu backoffice.",
    challenges: [
      "Equipe refém de processos manuais",
      "Erros em lançamentos e retrabalho",
      "Custo alto com tarefas administrativas"
    ],
    img: "/assets/servicos/rpa-hero.png"
  },
];

function use3DTilt(ref: any) {
  // Efeito 3D tilt no hover usando framer-motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  function onMouseMove(e: any) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }
  function onMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }
  return { x, y, rotateX, rotateY, onMouseMove, onMouseLeave };
}

export default function ServicosPage() {
  const [modalDemoOpen, setModalDemoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  return (
    <section className="min-h-screen bg-[#f4f1ea] overflow-x-hidden flex flex-col items-center relative">
      {/* FUNDO ANIMADO */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute -top-24 left-10 w-72 h-72 bg-gradient-to-tr from-[#38bdf8]/30 via-[#f18a1f]/50 to-[#2e3a48]/30 blur-3xl rounded-full animate-spin-slow"
        />
        <motion.div
          className="absolute top-2/3 right-0 w-96 h-96 bg-gradient-to-tr from-[#f18a1f]/50 via-[#2e3a48]/40 to-[#38bdf8]/20 blur-3xl rounded-full animate-pulse"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-24 text-center text-5xl md:text-7xl font-black text-[#213041] drop-shadow-lg tracking-tight"
      >
        Serviços que <span className="text-[#f18a1f] animate-glow">Transformam</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="mt-4 max-w-2xl mx-auto text-xl text-[#2e3a48] opacity-90 font-semibold"
      >
        Soluções de automação, IA e integrações que resolvem dores reais do mercado brasileiro.<br />
        Experiência global, execução local.
      </motion.p>

      {/* GRADE DE SERVIÇOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-20 px-6 w-full max-w-7xl">
        {services.map((service, i) => {
          const cardRef = useRef(null);
          const { rotateX, rotateY, onMouseMove, onMouseLeave } = use3DTilt(cardRef);

          return (
            <motion.div
              ref={cardRef}
              key={service.title}
              style={{
                rotateX,
                rotateY,
                boxShadow: "0 8px 40px 0 rgba(33,48,65,0.09), 0 1.5px 12px #f18a1faa"
              }}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.09 }}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="group relative bg-white/90 rounded-3xl p-0 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 flex flex-col shadow-xl"
            >
              {/* Imagem hero do serviço */}
              <motion.img
                src={service.img}
                alt={service.title}
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.18, filter: "brightness(1.08) blur(1.5px)" }}
                transition={{ duration: 0.4 }}
                className="w-full h-52 md:h-64 object-cover rounded-t-3xl group-hover:shadow-2xl transition"
              />
              <div className="p-7 flex-1 flex flex-col justify-between">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.09, duration: 0.4 }}
                  className="font-black text-2xl text-[#213041] mb-1 group-hover:text-[#f18a1f] transition"
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.19, duration: 0.5 }}
                  className="text-base font-medium text-[#2e3a48] opacity-80 mb-4"
                >
                  {service.desc}
                </motion.p>
                <div className="mb-4 flex flex-col gap-1">
                  <span className="text-xs uppercase text-[#38bdf8] font-bold mb-1 tracking-wide">Desafios que resolvemos:</span>
                  {service.challenges.map((ch, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.24 + j * 0.06, duration: 0.33 }}
                      className="flex items-center gap-2 text-[#213041] text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#f18a1f] inline-block" />
                      {ch}
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  onClick={() => {
                  setSelectedService(service);
                  setModalDemoOpen(true);
                  }}
                  whileHover={{
                    scale: 1.09,
                    backgroundColor: "#213041",
                    color: "#f18a1f",
                    boxShadow: "0 4px 16px #f18a1f80"
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 17 }}
                  className="mt-auto bg-[#f18a1f] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
                >
                  Solicitar demonstração
                </motion.button>
              </div>
              {/* Elemento decorativo animado */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.11 }}
                animate={{
                  scale: [0.85, 1.1, 0.95, 1],
                  opacity: [0.13, 0.09, 0.12, 0.15],
                  rotate: [0, 9, -5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-tr from-[#f18a1f]/40 via-[#38bdf8]/30 to-[#2e3a48]/40 rounded-full blur-3xl z-0 pointer-events-none"
              />
            </motion.div>
          );
        })}
      </div>

      {/* FAIXA CTA FINAL */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.7 }}
        className="mt-28 w-full flex justify-center"
      >
      </motion.div>
      <ModalDemo
        open={modalDemoOpen}
        onClose={() => setModalDemoOpen(false)}
        service={selectedService}
      />
    </section>
  );
}
