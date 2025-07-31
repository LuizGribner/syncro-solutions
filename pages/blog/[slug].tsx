import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head"; 

type Post = {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  author?: string;
  slug?: string;
};

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header onContactClick={() => setModalOpen(true)} />
        <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea]">
          <span className="text-2xl font-bold text-[#213041]">Carregando post...</span>
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header onContactClick={() => setModalOpen(true)} />
        <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea]">
          <span className="text-2xl font-bold text-[#f18a1f]">Post não encontrado :(</span>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ✅ METADADOS DINÂMICOS PARA LINKEDIN E OUTRAS PLATAFORMAS */}
      <Head>
        <title>{post.title} | Syncro Solutions</title>
        <meta name="description" content={post.content.slice(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.slice(0, 160)} />
        <meta property="og:image" content={post.image_url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://syncrosolutions.com.br/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.content.slice(0, 160)} />
        <meta name="twitter:image" content={post.image_url} />
      </Head>

      <Header onContactClick={() => setModalOpen(true)} />
      <section className="min-h-screen bg-[#f4f1ea] py-12 px-3">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#f18a1f]/10">
          {/* Imagem grande do post */}
          {post.image_url && (
            <div className="w-full h-80 md:h-96 bg-[#f4f1ea] flex items-center justify-center overflow-hidden">
              <motion.img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </div>
          )}

          <div className="p-8 flex flex-col">
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold text-[#213041] mb-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {post.title}
            </motion.h1>
            <div className="flex items-center gap-2 text-sm text-[#76797b] mb-6">
              <CalendarDays className="w-4 h-4 text-[#f18a1f]" />
              {new Date(post.created_at).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
              {post.author && (
                <span className="ml-4 text-xs text-[#38bdf8]">por {post.author}</span>
              )}
            </div>
            <div className="text-[#213041] text-lg leading-relaxed whitespace-pre-line mb-10">
              {post.content}
            </div>

            {/* CTA ANIMADO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 bg-gradient-to-br from-[#f18a1f]/90 via-[#38bdf8]/80 to-[#213041]/80 rounded-2xl shadow-xl p-6 flex flex-col items-center gap-3"
            >
              <h3 className="text-2xl font-extrabold text-white drop-shadow mb-2 text-center">
                E aí, pronto para automatizar sua empresa{" "}
                <span className="text-[#ffe58a]">com a Syncro?</span>
              </h3>
              <p className="text-white/90 text-center mb-4 max-w-lg">
                Fale direto comigo! Tira dúvidas, entenda o processo ou peça uma análise gratuita.
                <br />
                Bora transformar seu negócio com automação real — sem enrolação.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white text-[#f18a1f] hover:bg-[#38bdf8] hover:text-white transition font-bold rounded-full px-8 py-3 shadow-lg text-lg"
              >
                Quero falar com a Syncro Solutions
              </button>
            </motion.div>
            {/* /CTA */}
          </div>
        </div>
      </section>
      <Footer onContactClick={() => setModalOpen(true)} />
      <Contato open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
