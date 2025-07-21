import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

// Função para gerar slug a partir do título
function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')               // Remove acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos (cont)
    .replace(/[^a-z0-9 ]/g, '')      // Remove caracteres especiais
    .replace(/\s+/g, '-')            // Espaço vira hífen
    .replace(/-+/g, '-')             // Hífens duplicados
    .replace(/^-|-$/g, '');          // Remove hífen do começo/fim
}

export default function PainelAdmin({ user }: { user: any }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleImageUpload = async () => {
  if (!image) return null;
  const fileExt = image.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, image);
  if (error) throw error;

  // Loga o path para debug
  console.log("UPLOAD PATH:", data?.path);

  // Corrige aqui: pega do objeto 'data'
  const { data: publicData } = supabase.storage.from("blog-images").getPublicUrl(data?.path || "");
  console.log("PUBLIC URL:", publicData.publicUrl);
  return publicData.publicUrl; // <-- retorna a url correta
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setUploading(true);
  try {
    let image_url = "";
    if (image) {
      image_url = await handleImageUpload(); // <-- agora já retorna a url correta
    }
    const slug = slugify(title);
    const { error } = await supabase.from("posts").insert([
      {
        title,
        content,
        image_url, // <-- já é a url pública completa
        user_id: user.id,
        slug,
        author: user.email
      }
    ]);
    if (error) throw error;
    setMessage("Post publicado com sucesso!");
    setTitle("");
    setContent("");
    setImage(null);
  } catch (err: any) {
    setMessage(err.message);
  } finally {
    setUploading(false);
  }
};

  // --- Função de logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 border border-[#eee] relative">
      {/* Header do painel com botão Sair */}
      <div className="absolute right-6 top-6">
        <button
          onClick={handleLogout}
          className="bg-[#f18a1f] text-white px-3 py-1 rounded-full font-bold text-sm hover:bg-[#213041] transition"
        >
          Sair
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Novo post do Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border rounded px-4 py-2"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border rounded px-4 py-2"
          placeholder="Conteúdo"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files?.[0] || null)}
        />
        <button
          type="submit"
          className="bg-[#f18a1f] text-white rounded py-2 font-bold hover:bg-[#213041] transition"
          disabled={uploading}
        >
          {uploading ? "Publicando..." : "Publicar"}
        </button>
      </form>
      {message && <div className="mt-4 text-center text-[#213041]">{message}</div>}
    </div>
  );
}
