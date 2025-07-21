import { useState } from "react";
import Header from "@/components/Header";
import ServicosService from "@/components/ServicosService";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato"; // Se for o modal de contato

export default function DiferenciaisPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setModalOpen(true)} />
      <ServicosService />
      <Footer onContactClick={() => setModalOpen(true)} />
      <Contato open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
