'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUpClient from './CountUpClient';
import {
  BoltIcon,
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  CloudIcon,
  CommandLineIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

type ServiceSectionProps = {
  onContactClick?: () => void;
};

const timeline = [
  {
    step: 'Diagnóstico Estratégico',
    desc: 'Analisamos seus processos e identificamos onde a automação e a IA geram maior impacto.',
  },
  {
    step: 'Desenvolvimento Sob Medida',
    desc: 'Criamos integrações, robôs e lógicas inteligentes personalizadas.',
  },
  {
    step: 'Ativação e Escala',
    desc: 'Implantamos, testamos e escalamos os resultados com você.',
  },
];

const diferenciais = [
  { title: 'Automatização real', icon: BoltIcon },
  { title: 'Sem no-code genérico', icon: AdjustmentsHorizontalIcon },
  { title: 'IA com propósito', icon: CpuChipIcon },
  { title: 'Integração total', icon: CloudIcon },
  { title: 'Scripts avançados', icon: CommandLineIcon },
  { title: 'Segurança total', icon: ShieldCheckIcon },
];

const resultados = [
  { label: 'Horas economizadas/mês', value: 280 },
  { label: 'Automatizações entregues', value: 124 },
  { label: 'Satisfação dos clientes', value: 98, suffix: '%' },
  { label: 'Falhas eliminadas', value: 95, suffix: '%' },
];

export default function ServiceSection({ onContactClick }: ServiceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // ====== EFEITO INCRÍVEL DE PORTAL/FULLSCREEN FADE =======
  const [redirecting, setRedirecting] = useState(false);

  function handleDiferenciaisClick() {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = '/diferenciais';
    }, 750);
  }

  // ===== Overlay Portal =====
  // Isso fica logo antes do return para ficar sempre no topo quando acionado
  if (redirecting) {
    return (
      <>
        <section className="relative bg-[#ffffff] text-[#151e27] overflow-hidden min-h-screen" id="services" style={{ filter: 'blur(2px)', pointerEvents: 'none' }}>
          {/* Pode até deixar seu conteúdo “borrado” durante a transição, se quiser */}
        </section>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none animate-fadeToPortal">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f18a1f] via-[#38bdf8] to-[#2e3a48] opacity-90 transition-all duration-700"></div>
          <span className="relative text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-bounce-in">
            Entrando nos Diferenciais...
          </span>
        </div>
      </>
    );
  }

  // ======= SEÇÃO NORMAL =======
  return (
    <section className="relative bg-[#ffffff] text-[#151e27] overflow-hidden min-h-screen" id="services">
      {/* ...todo o resto igual... */}

      {/* Blocos sólidos decorados */}
      <div className="hidden md:block absolute top-0 left-0 h-full w-[12vw] xl:w-[16vw] bg-[#ffffff] z-0 transition-all duration-300"></div>
      <div className="hidden md:block absolute top-0 right-0 h-full w-[12vw] xl:w-[16vw] bg-[#ffffff] z-0 transition-all duration-300"></div>

      {/* Como Funciona */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto py-28 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center"
          >
            Como Funciona
          </motion.h2>
          {/* ...seus cards... */}
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-[#eee] text-center"
            >
              <h3 className="text-xl font-bold mb-2">Diagnóstico Estratégico</h3>
              <p className="opacity-80 leading-relaxed mb-4">
                Analisamos seus processos e identificamos onde a automação e a IA geram maior impacto.
              </p>
              <img
                src="/assets/how/1.png"
                alt="Diagnóstico Estratégico"
                className="mx-auto w-24 h-24 object-contain"
              />
            </motion.div>
            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-[#eee] text-center"
            >
              <h3 className="text-xl font-bold mb-2">Desenvolvimento Sob Medida</h3>
              <p className="opacity-80 leading-relaxed mb-4">
                Criamos integrações, robôs e lógicas inteligentes personalizadas.
              </p>
              <img
                src="/assets/how/2.png"
                alt="Desenvolvimento Sob Medida"
                className="mx-auto w-24 h-24 object-contain"
              />
            </motion.div>
            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-[#eee] text-center"
            >
              <h3 className="text-xl font-bold mb-2">Ativação e Escala</h3>
              <p className="opacity-80 leading-relaxed mb-4">
                Implantamos, testamos e escalamos os resultados com você.
              </p>
              <img
                src="/assets/how/3.png"
                alt="Ativação e Escala"
                className="mx-auto w-24 h-24 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-2/3 bg-gradient-to-r from-[#2e3a48] via-[#f18a1f] to-[#2e3a48] rounded-full my-0 opacity-70"></div>
      </div>

      {/* Nossos Diferenciais */}
      <div className="w-full bg-[#2e3a48]">
        <div className="max-w-6xl mx-auto py-28 px-6">
          <motion.h2 className="text-4xl font-extrabold text-center text-white mb-16">
            Nossos Diferenciais
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {diferenciais.map((dif, idx) => (
              <motion.div
                key={dif.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-rotate-1 transition"
              >
                <dif.icon className="w-10 h-10 text-[#f18a1f] mb-4" />
                <span className="font-semibold text-lg text-center text-[#151e27]">{dif.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOCO DE ATRAÇÃO INCRÍVEL */}
      <div className="w-full flex justify-center mt-16">
        <div className="bg-gradient-to-r from-[#f18a1f]/90 via-[#38bdf8]/80 to-[#2e3a48]/90 p-1 rounded-2xl shadow-xl max-w-3xl w-full">
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#213041] mb-2">
                O diferencial que fez a Syncro Solutions conquistar o mundo
              </h3>
              <p className="text-base md:text-lg text-[#2e3a48] opacity-85 mb-4">
                Nossa empresa nasceu na Upwork, a maior plataforma de freelancers do planeta — entregando automações, IA e resultados para clientes dos EUA, Europa e Ásia. Somos fluentes em inglês, especialistas em tecnologia e trazemos para o Brasil o que há de mais avançado no mercado global!
              </p>
              <button
                onClick={handleDiferenciaisClick}
                className="mt-3 inline-block bg-[#f18a1f] text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-[#213041] hover:text-[#f18a1f] transition"
              >
                Veja nossos diferenciais de verdade
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/assets/upwork-badge.png" alt="Upwork Badge" className="w-20 h-20 mb-2" />
              <div className="flex items-center gap-2">
                <img src="/assets/usa-flag.png" alt="USA" className="w-7 h-7 rounded-full" />
                <img src="/assets/br-flag.png" alt="BR" className="w-7 h-7 rounded-full" />
              </div>
              <span className="text-xs bg-[#38bdf8]/20 text-[#2e3a48] px-3 py-1 rounded-full mt-2 font-semibold">
                +4 anos de experiência global
              </span>
              <span className="text-xs bg-[#f18a1f]/10 text-[#f18a1f] px-3 py-1 rounded-full font-semibold">
                Fluent in English
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-2/3 bg-gradient-to-r from-[#2e3a48] via-[#f18a1f] to-[#2e3a48] rounded-full my-0 opacity-70"></div>
      </div>

      {/* Resultados Reais */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto py-28 px-6">
          <motion.h2 className="text-4xl font-extrabold text-center mb-16">
            Resultados Reais
          </motion.h2>
          <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {resultados.map((res, idx) => (
              <motion.div
                key={res.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <p className="text-4xl font-bold text-[#f18a1f]">
                  {isInView ? (
                    <CountUpClient end={res.value} duration={2} suffix={res.suffix || ''} />
                  ) : (
                    <span>0{res.suffix || ''}</span>
                  )}
                </p>
                <p className="mt-2 opacity-80 text-sm">{res.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-32 max-w-4xl mx-auto text-center bg-[#213041] text-white py-16 px-8 rounded-3xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#f18a1f]/20 via-transparent to-transparent blur-3xl z-0" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
          Vamos automatizar o seu futuro?
        </h2>
        <p className="text-lg opacity-90 mb-8 relative z-10">
          Chega de tarefas manuais. Fale com a Syncro Solutions e deixe a tecnologia trabalhar por você.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onContactClick}
          className="inline-block bg-[#f18a1f] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition relative z-10 cursor-pointer"
          style={{ cursor: 'pointer' }}
        >
          Quero conversar
        </motion.a>
      </motion.div>
    </section>
  );
}
