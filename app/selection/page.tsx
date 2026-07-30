import type React from "react";
import { Flag, Landmark, Shield, Trophy } from "lucide-react";
import { SelectionHeader } from "../../components/selection-header";

function Card({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = <><div className="text-violet-300">{icon}</div><p className="mt-4 text-sm text-slate-400">{label}</p><p className="mt-1 text-lg font-semibold">{value}</p>{href && <p className="mt-2 text-xs font-semibold text-violet-300">Voir l’évolution →</p>}</>;
  return href ? <a href={href} className="surface block p-5 transition hover:-translate-y-0.5 hover:border-violet-300/40">{content}</a> : <section className="surface p-5">{content}</section>;
}

export default function SelectionPage() {
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><SelectionHeader active="Pays"/><section className="mt-7 overflow-hidden rounded-3xl border border-violet-400/20 bg-[linear-gradient(100deg,rgba(20,27,52,.97),rgba(32,26,64,.75))] p-7 shadow-glow sm:p-10"><div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"><span className="grid h-24 w-24 place-items-center overflow-hidden rounded-[30%] border border-white/30 bg-slate-950 text-[5.5rem] leading-none shadow-2xl">🇷🇴</span><div><p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">Votre pays</p><h2 className="mt-2 text-4xl font-semibold tracking-tight">Roumanie</h2><p className="mt-2 text-sm text-slate-300">Équipe de Roumanie · UEFA · Europe</p></div></div></section><div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Card icon={<Shield size={17}/>} label="Réputation mondiale" value="À importer"/><Card icon={<Trophy size={17}/>} label="Classement FIFA" value="58e" href="/selection/classement-fifa"/><Card icon={<Landmark size={17}/>} label="Stade habituel" value="Arena Națională · 53 500 places"/><Card icon={<Flag size={17}/>} label="Début de mandat" value="10 juin 2026"/></div></main>;
}
