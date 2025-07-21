import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import PainelAdmin from "../../components/PainelAdmin"; 

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/admin/login");
      } else {
        setUser(session.user);
      }
    });
    // eslint-disable-next-line
  }, []);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;

  return <PainelAdmin user={user} />;
}
