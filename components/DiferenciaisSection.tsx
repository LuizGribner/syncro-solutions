'use client';
import { motion } from "framer-motion";
import DiferenciaisEmAcao from "./DiferenciaisEmAcao";

const depoimentos = [
  {
    cliente: "VEO3 Video Generation Project",
    comentario: "A Syncro Solutions demonstrou habilidades técnicas excepcionais, criatividade e uma capacidade impressionante de resolver problemas rapidamente. Sempre entregou além das expectativas e sua comunicação clara fez toda diferença no sucesso do projeto. Altamente recomendado para automação, IA e fluxos complexos.",
    nome: "CEO, Agência dos EUA",
    nota: 5,
  },
  {
    cliente: "AI Agent Automation",
    comentario: "Excelente profissional! Muito responsivo, fez as perguntas certas e garantiu o sucesso do projeto. Recomendo muito para quem busca automação de verdade.",
    nome: "Gestora de Projetos, Canadá",
    nota: 5,
  },
  {
    cliente: "Fix Unique Link Generation",
    comentario: "A Syncro Solutions é um gênio—afiado, rápido, confiável! Resolveu minha automação em horas e ainda entregou além do combinado. Comunicação clara e técnica de outro nível.",
    nome: "Fundador, Startup UK",
    nota: 5,
  },
];

const badges = [
  { img: "/assets/upwork-badge.png", label: "Top Rated na Upwork" },
  { img: "/assets/usa-flag.png", label: "Projetos nos EUA" },
  { img: "/assets/br-flag.png", label: "Do Brasil para o mundo" },
  { img: "/assets/en-badge.png", label: "Fluent in English" },
];

const cases = [
  {
    title: "Legal Document Automation",
    desc: "Automatização completa de documentos jurídicos com Python, N8N e DigitalOcean para escritório dos EUA.",
  },
  {
    title: "AI-Driven Video Creation Pipeline",
    desc: "Pipeline completo de vídeos com IA usando VEO3, FAL.AI e automações para empresas internacionais.",
  },
  {
    title: "Email Automation com HIPAA Detection",
    desc: "Robôs que analisam e-mails e processam documentos sensíveis para empresas de saúde dos EUA.",
  },
];

const numeros = [
  { label: "Total Jobs", value: 29 },
  { label: "Job Success", value: "99%" },
  { label: "Total Earnings", value: "$100K+" }
];

export default function DiferenciaisSection() {
  return (
    <section className="min-h-screen bg-[#f4f1ea] text-[#151e27] pb-20">
      {/* HERO */}
      <div className="bg-gradient-to-br from-[#2e3a48] via-[#213041] to-[#f18a1f]/60 py-20 px-4 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Diferenciais Syncro Solutions LLC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-2xl mb-4 opacity-90"
        >
          Da Upwork para o Brasil: experiência internacional, reviews reais e projetos que cruzaram fronteiras.<br />
          <span className="text-[#f18a1f] font-bold">Automação e QA de verdade, com o que há de mais avançado nos EUA e no mundo.</span>
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center bg-white/90 rounded-xl shadow p-2 px-4">
              <img src={b.img} alt={b.label} className="w-12 h-12 mb-1" />
              <span className="text-xs font-semibold text-[#213041]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DESTAQUE LLC WYOMING */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative max-w-4xl mx-auto my-16 rounded-3xl shadow-2xl border-4 border-[#38bdf8] bg-gradient-to-br from-[#fff] via-[#f4f1ea] to-[#e5effa] overflow-hidden"
        style={{
          boxShadow: "0 0 40px 6px #38bdf844, 0 1px 40px 0px #21304111"
        }}
      >
        {/* Efeitos de fundo */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[140px] bg-gradient-to-r from-[#38bdf8]/30 via-[#f18a1f]/30 to-[#2e3a48]/30 blur-[60px] opacity-80 z-0" />
        <div className="absolute bottom-0 right-0 w-[90px] h-[90px] bg-[#f18a1f]/30 rounded-full blur-3xl z-0" />
        <div className="absolute top-0 left-0 w-[60px] h-[60px] bg-[#38bdf8]/30 rounded-full blur-2xl z-0" />
        {/* Selo LLC */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 py-10 px-6">
          <img
            src="/assets/wyoming-llc-badge.png"
            alt="Wyoming LLC"
            className="w-24 h-24 rounded-full ring-4 ring-[#38bdf8] shadow-lg animate-spin-slow"
            style={{
              animation: "spin 16s linear infinite"
            }}
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#213041] flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[#38bdf8]">Empresa Global:</span>
              <span className="bg-[#f18a1f]/10 text-[#f18a1f] px-3 py-1 rounded-full text-base font-bold ml-2 animate-pulse">
                LLC registrada em Wyoming, EUA
              </span>
            </h2>
            <p className="text-lg text-[#213041] opacity-90 mb-3">
              <span className="font-semibold text-[#2e3a48]">Proteção, transparência e autoridade internacional.</span> <br />
              Com sede em <span className="font-bold text-[#38bdf8]">Wyoming</span>, referência mundial em segurança jurídica e inovação para empresas de tecnologia, a Syncro Solutions LLC conecta o Brasil ao que existe de mais sólido no mercado americano. 
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
              <span className="bg-[#213041] text-[#fff] px-3 py-1 rounded-full text-xs font-semibold shadow">Contratos internacionais</span>
              <span className="bg-[#38bdf8]/20 text-[#213041] px-3 py-1 rounded-full text-xs font-semibold shadow">Conta bancária nos EUA</span>
              <span className="bg-[#f18a1f]/20 text-[#f18a1f] px-3 py-1 rounded-full text-xs font-semibold shadow">Cliente global, proteção total</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* DIFERENCIAIS EM AÇÃO */}
      <DiferenciaisEmAcao />

      {/* NOSSOS NÚMEROS */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {numeros.map((n, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6">
            <span className="text-3xl font-bold text-[#f18a1f]">{n.value}</span>
            <div className="text-xs mt-2 font-semibold uppercase tracking-wider opacity-70">{n.label}</div>
          </div>
        ))}
      </div>

      {/* CASES REAIS */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Cases Internacionais</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-7 text-[#213041]">
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="opacity-85">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DEPOIMENTOS REAIS */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">O que dizem de nós</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {[...Array(d.nota)].map((_, j) => (
                  <span key={j} className="text-[#f18a1f] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#213041] text-sm italic">"{d.comentario}"</p>
              <div className="mt-2 text-xs text-[#2e3a48] font-bold">{d.cliente}</div>
              <div className="text-xs text-[#f18a1f]">{d.nome}</div>
            </div>
          ))}
        </div>
      </div>


{/* CHAMADA FINAL */}
<div className="max-w-2xl mx-auto mt-20 text-center">
  <h2 className="text-2xl font-bold mb-2 text-[#213041]">
    Pronto para revolucionar seu negócio?
  </h2>
  <p className="mb-4">
    Vamos conversar! Fale com quem já automatizou projetos nos EUA e agora traz essa expertise para transformar empresas brasileiras.
  </p>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.open(
        "https://wa.me/5541992017296?text=Ol%C3%A1!%20Tenho%20interesse%20em%20automatizar%20minha%20empresa%20com%20a%20Syncro%20Solutions.%20Podemos%20conversar?",
        "_blank"
      );
    }}
    className="inline-block bg-[#f18a1f] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
  >
    Quero fazer parte dessa história
  </a>
</div>

    </section>
  );
}
