import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  slug?: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data || []);
      });
  }, []);

  return (
    <>
      <Header onContactClick={() => setModalOpen(true)} />
      <section className="min-h-screen bg-[#f4f1ea] py-16 px-3">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#213041] mb-12 drop-shadow-sm"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-gradient-to-br from-[#f18a1f] to-[#38bdf8] bg-clip-text text-transparent">
              Blog Syncro Solutions
            </span>
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post, idx) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id ?? idx}
                className="block group"
                passHref
              >
                <motion.div
                  className="group relative bg-white rounded-3xl shadow-2xl px-0 pb-0 pt-0 flex flex-col overflow-hidden border border-[#f18a1f]/10 hover:border-[#38bdf8]/30 transition-all duration-300 cursor-pointer"
                  whileHover={{
                    scale: 1.025,
                    boxShadow: "0 8px 40px #38bdf81a, 0 2px 0 #f18a1f11",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                >
                  {/* Imagem do Post */}
                  {post.image_url && (
                    <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-[#f4f1ea]">
                      <motion.img
                        src={post.image_url}
                        alt={post.title}
                        className="object-cover w-full h-full rounded-t-3xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700"
                        whileHover={{ scale: 1.07 }}
                      />
                    </div>
                  )}
                  {/* Conteúdo */}
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#213041] mb-2 group-hover:text-[#f18a1f] transition-colors">
                      {post.title}
                    </h2>
                    {/* Preview do conteúdo */}
                    <p className="text-[#555] text-base mb-4 line-clamp-3">
                      {post.content.length > 180
                        ? post.content.slice(0, 180) + "..."
                        : post.content}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#76797b]">
                      <CalendarDays className="w-4 h-4 text-[#f18a1f]" />
                      {new Date(post.created_at).toLocaleString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                  {/* Glow na borda inferior */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#f18a1f]/80 via-[#38bdf8]/60 to-[#213041]/50 blur-lg opacity-90" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer onContactClick={() => setModalOpen(true)} />
      <Contato open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
