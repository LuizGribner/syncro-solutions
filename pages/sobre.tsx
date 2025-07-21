import { useState } from "react";
import Header from "@/components/Header";
import SobreNos from "@/components/SobreNos";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato"; // Se for o modal de contato

export default function DiferenciaisPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setModalOpen(true)} />
      <SobreNos />
      <Footer onContactClick={() => setModalOpen(true)} />
      <Contato open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
