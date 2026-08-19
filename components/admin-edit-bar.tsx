"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FilePlus2, Pencil, Settings, X } from "lucide-react";
import { getSupabaseClient } from "../lib/supabase";

function editorFor(pathname: string) {
  if (pathname.includes("/actualites")) return { href: "/admin?tab=articles", label: "Gérer les actualités" };
  if (pathname.includes("/calendrier")) return { href: "/admin?tab=matches", label: "Gérer les matchs" };
  if (pathname.includes("/convocations")) return { href: "/admin?tab=squads", label: "Gérer les convocations" };
  if (pathname.startsWith("/carriere")) return { href: "/admin/carriere", label: "Modifier la carrière" };
  if (pathname.includes("/competitions")) return { href: "/admin/carriere", label: "Gérer les compétitions" };
  return { href: "/admin", label: "Gérer cette partie du site" };
}

export function AdminEditBar() {
  const pathname = usePathname();
  const [admin, setAdmin] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const db = getSupabaseClient();
    if (!db) return;
    db.auth.getSession().then(({ data }) => setAdmin(Boolean(data.session)));
    const { data } = db.auth.onAuthStateChange((_event, session) => setAdmin(Boolean(session)));
    return () => data.subscription.unsubscribe();
  }, []);

  if (!admin || hidden || pathname.startsWith("/admin")) return null;
  const editor = editorFor(pathname);
  return <aside className="fixed inset-x-3 bottom-3 z-[100] mx-auto flex max-w-4xl flex-wrap items-center gap-2 rounded-2xl border border-violet-300/30 bg-[#101321]/95 p-3 text-sm text-white shadow-2xl backdrop-blur-xl">
    <span className="mr-auto inline-flex items-center gap-2 px-2 font-semibold text-violet-200"><Pencil size={16}/>Mode administrateur</span>
    <a href={editor.href} className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-semibold"><Settings size={16}/>{editor.label}</a>
    <a href="/admin" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2"><FilePlus2 size={16}/>Ajouter</a>
    <button onClick={()=>setHidden(true)} aria-label="Masquer la barre" className="rounded-xl border border-white/10 p-2 text-slate-300"><X size={17}/></button>
  </aside>;
}
