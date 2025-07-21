import { useState } from "react";
import Header from "@/components/Header";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato"; 

export default function DiferenciaisPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setModalOpen(true)} />
      <DiferenciaisSection />
      <Footer onContactClick={() => setModalOpen(true)} />
      <Contato open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
