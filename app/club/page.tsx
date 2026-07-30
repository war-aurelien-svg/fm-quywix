import type React from "react";
import { Landmark, Shield, Trophy, Wrench } from "lucide-react";
import { ClubHeader } from "../../components/club-header";

function Card({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <section className="surface p-5"><div className="text-blue-300">{icon}</div><p className="mt-4 text-sm text-slate-400">{label}</p><p className="mt-1 text-lg font-semibold">{value}</p></section>;
}

export default function ClubPage() {
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(44,104,255,.16),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><ClubHeader active="Club"/><section className="mt-7 overflow-hidden rounded-3xl border border-white/[.1] bg-[linear-gradient(115deg,rgba(10,25,70,.96),rgba(157,18,42,.72))] p-7 shadow-glow sm:p-10"><div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"><img src="/images/steaua-bucarest-logo.png" alt="Logo Steaua Bucarest" className="h-24 w-24 object-contain"/><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-200">Votre club</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Steaua Bucarest</h1><p className="mt-2 text-sm text-slate-200">Liga II roumaine · Roumanie · Vainqueur de la Coupe des clubs champions 1986</p></div></div></section><div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Card icon={<Shield size={17}/>} label="Réputation" value="Nationale"/><Card icon={<Landmark size={17}/>} label="Stade" value="Steaua · 31 524 places"/><Card icon={<Wrench size={17}/>} label="Installations d’entraînement" value="Ghencea V Bucarest · Moyen"/><Card icon={<Trophy size={17}/>} label="Palmarès continental" value="C1 · Vainqueur 1986"/></div></main>;
}
