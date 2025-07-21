// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Como funciona a implementação das automações?',
    answer:
      'A implementação começa com um diagnóstico do seu processo, segue para o desenvolvimento sob medida e só finalizamos quando o sistema estiver rodando e validado com você.',
  },
  {
    question: 'Preciso entender de tecnologia para contratar?',
    answer:
      'Não! Nossa equipe cuida de toda a parte técnica. Você só precisa saber quais rotinas deseja automatizar ou otimizar.',
  },
  {
    question: 'Quais plataformas e sistemas vocês integram?',
    answer:
      'Integramos CRMs, ERPs, WhatsApp, e-mails, Google Workspace, ferramentas de marketing, planilhas, entre outros — de acordo com a sua necessidade.',
  },
  {
    question: 'É possível personalizar o dashboard ou relatórios?',
    answer:
      'Sim! Personalizamos dashboards e relatórios para mostrar exatamente os dados que fazem sentido para sua operação.',
  },
  {
    question: 'Qual o prazo para ver resultados?',
    answer:
      'Em geral, os primeiros ganhos de tempo e eficiência aparecem já nos primeiros dias após a automação ser ativada.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-[#151e27]">Perguntas Frequentes</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-[#2e3a48] transition"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="text-lg font-semibold text-[#151e27]">{faq.question}</span>
              <motion.span
                animate={{ rotate: open === idx ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-6 h-6 text-[#2e3a48]" />
              </motion.span>
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-6"
                >
                  <div className="py-3 text-base text-[#2e3a48] opacity-90">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
