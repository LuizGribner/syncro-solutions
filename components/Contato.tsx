import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contato({ open, onClose }) {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_apyet67",
        "template_mm69a8d",
        e.target,
        "JD-raB_bJliaGXww4"
      )
      .then(
        (result) => {
          setSending(false);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          setSending(false);
          alert("Erro ao enviar, tente novamente.");
        }
      );
  };

  if (!open) return null;
  if (success)
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
        <div className="bg-white rounded-2xl p-10 w-[90vw] max-w-lg shadow-2xl relative">
          <button
            className="absolute top-3 right-4 text-2xl text-[#2e3a48] hover:text-[#f18a1f]"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
          <h2 className="text-3xl font-bold mb-6 text-[#2e3a48]">Mensagem enviada!</h2>
          <p className="mb-6 text-[#151e27] opacity-80">
            Obrigado pelo contato, retornaremos em breve!
          </p>
        </div>
      </div>
    );

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl p-10 w-[90vw] max-w-lg shadow-2xl relative animate-fadeInUp">
        <button
          className="absolute top-3 right-4 text-2xl text-[#2e3a48] hover:text-[#f18a1f]"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-6 text-[#2e3a48]">Fale com a Syncro Solutions</h2>
        <p className="mb-6 text-[#151e27] opacity-80">
          Envie sua mensagem e retornamos rapidinho 😉
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="user_name"
            className="bg-[#f4f1ea] rounded-xl px-4 py-3 border border-[#eee] focus:border-[#f18a1f] outline-none"
            placeholder="Nome"
            required
          />
          <input
            type="email"
            name="user_email"
            className="bg-[#f4f1ea] rounded-xl px-4 py-3 border border-[#eee] focus:border-[#f18a1f] outline-none"
            placeholder="E-mail"
            required
          />
          <textarea
            name="message"
            className="bg-[#f4f1ea] rounded-xl px-4 py-3 border border-[#eee] focus:border-[#f18a1f] outline-none min-h-[80px]"
            placeholder="Como podemos ajudar?"
            required
          />
          <button
            type="submit"
            disabled={sending}
            className="mt-2 bg-[#f18a1f] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
          >
            {sending ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
}
