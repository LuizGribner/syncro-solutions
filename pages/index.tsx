import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";

export default function Home() {
  // Controle de abertura do modal
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Passe o trigger para Header */}
      <Header onContactClick={() => setModalOpen(true)} />
      <Hero />
      {/* Passe o trigger também para ServiceSection se quiser */}
      <ServiceSection onContactClick={() => setModalOpen(true)} />
      <FAQ />
      <Footer onContactClick={() => setModalOpen(true)} />
      {/* Modal global, fora do fluxo normal */}
      <Contato open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
