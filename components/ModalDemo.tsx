// components/ModalDemo.tsx
'use client';
import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

type Service = {
  title: string;
  desc: string;
  challenges: string[];
  img: string;
};

type ModalDemoProps = {
  open: boolean;
  onClose: () => void;
  service: Service | null;
};

export default function ModalDemo({ open, onClose, service }: ModalDemoProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Fecha ao clicar fora do modal
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        open &&
        (e.target as HTMLElement).classList.contains("modal-demo-bg")
      ) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
    // eslint-disable-next-line
  }, [open]);

  // Limpa mensagem de sucesso ao abrir o modal de novo
  useEffect(() => {
    if (open) {
      setSuccess(false);
      setError("");
      setSending(false);
      if (formRef.current) formRef.current.reset();
    }
  }, [open, service]);

  if (!open || !service) return null;

  const handleClose = () => {
    setSuccess(false);
    setError("");
    setSending(false);
    if (formRef.current) formRef.current.reset();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess(false);

    emailjs
      .sendForm(
        "service_hvzsac9",     // SEU SERVICE ID
        "template_g8krqnh",    // SEU TEMPLATE ID
        formRef.current!,
        "JD-raB_bJliaGXww4"    // SEU PUBLIC KEY
      )
      .then(
        () => {
          setSuccess(true);
          setSending(false);
          if (formRef.current) formRef.current.reset();
        },
        (err) => {
          setError("Erro ao enviar! Tente novamente.");
          setSending(false);
        }
      );
  };

  return (
    <div className="modal-demo-bg fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center overflow-auto" style={{ animation: 'fadeIn 0.2s' }}>
      <div className="relative bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 mx-3 animate-fadeInUp">
        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 text-2xl text-[#76797b] font-bold hover:text-[#f18a1f] transition"
          aria-label="Fechar"
        >
          ×
        </button>
        {/* Cabeçalho do modal */}
        <h2 className="text-2xl md:text-2.5xl font-extrabold text-[#213041] mb-2">
          Solicitar Demonstração:{" "}
          <span className="text-[#f18a1f]">
            {service.title}
          </span>
        </h2>
        {/* Descrição e desafios */}
        <p className="mb-3 text-[#444]">{service.desc}</p>
        <ul className="mb-4 text-sm text-[#555] list-disc list-inside">
          {service.challenges.map((ch, i) => (
            <li key={i}>{ch}</li>
          ))}
        </ul>
        {/* Formulário */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          {/* Campos ocultos enviados para o EmailJS */}
          <input type="hidden" name="title" value={service.title} />
          <input type="hidden" name="desc" value={service.desc} />
          <input type="hidden" name="challenges" value={service.challenges.join('\n')} />

          <input
            className="border rounded px-4 py-2"
            placeholder="Seu nome"
            name="name"
            required
            autoComplete="off"
          />
          <input
            className="border rounded px-4 py-2"
            placeholder="Seu e-mail"
            name="email"
            required
            autoComplete="off"
            type="email"
          />
          <input
            className="border rounded px-4 py-2"
            placeholder="Seu telefone (opcional)"
            name="phone"
            autoComplete="off"
          />
          <textarea
            className="border rounded px-4 py-2"
            placeholder="Conte sobre o seu desafio (opcional)"
            name="message"
            rows={3}
          />
          <button
            type="submit"
            className="bg-[#f18a1f] text-white rounded py-2 font-bold hover:bg-[#213041] transition disabled:opacity-60"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Enviar solicitação"}
          </button>
          {success && (
            <div className="text-green-600 text-center text-sm font-bold">Solicitação enviada! Responderemos em breve 🚀</div>
          )}
          {error && (
            <div className="text-red-600 text-center text-sm">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
