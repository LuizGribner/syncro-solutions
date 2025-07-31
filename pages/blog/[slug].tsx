// pages/blog/[slug].tsx
import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabaseClient";

type Post = {
  id: number;
  title: string;
  content: string;s
  image_url: string;
  created_at: string;
  author?: string;
  slug?: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

export default function BlogPostPage({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Syncro Solutions</title>
        <meta name="description" content={post.content.slice(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.slice(0, 160)} />
        <meta property="og:image" content={post.image_url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://syncrosolutions.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.content.slice(0, 160)} />
        <meta name="twitter:image" content={post.image_url} />
      </Head>

      <Header onContactClick={() => {}} />
      <section className="min-h-screen bg-[#f4f1ea] py-12 px-3">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#f18a1f]/10">
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
          </div>
        </div>
      </section>
      <Footer onContactClick={() => {}} />
      <Contato open={false} onClose={() => {}} />
    </>
  );
}
