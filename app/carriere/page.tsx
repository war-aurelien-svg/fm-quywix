import { CalendarDays, ChevronLeft, Flag } from "lucide-react";
import { KosovoFlag } from "../../components/kosovo-flag";

export default function CarrierePage() {
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-5 py-8 text-slate-100 sm:px-10">
    <section className="mx-auto max-w-5xl">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ChevronLeft size={16}/>Retour à l’accueil</a>
      <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-violet-300">Parcours d’Aurélien Quywix</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Ma carrière</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-400">Le parcours débute avec une première mission internationale : faire grandir le Kosovo sur la scène européenne.</p>

      <div className="relative mt-12 border-l border-violet-300/30 pl-8 sm:pl-12">
        <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border-4 border-[#090b10] bg-violet-400"/>
        <article className="surface overflow-hidden">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-violet-400/10 p-3"><KosovoFlag/></div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3"><p className="text-xs font-bold uppercase tracking-[.16em] text-violet-300">Sélection nationale</p><span className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-200">En poste</span></div>
              <h2 className="mt-2 text-3xl font-semibold">Kosovo</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">Sélectionneur national · Pristina</p>
            </div>
            <div className="border-t border-white/[.08] pt-4 text-sm sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0"><p className="flex items-center gap-2 font-semibold text-slate-200"><CalendarDays size={16} className="text-violet-300"/>Depuis le 21 juillet 2026</p><p className="mt-2 text-slate-500">Mandat en cours</p></div>
          </div>
          <div className="grid border-t border-white/[.08] bg-white/[.02] sm:grid-cols-3">
            <div className="p-5"><p className="text-xs uppercase tracking-[.15em] text-slate-500">Objectif immédiat</p><p className="mt-2 font-semibold">Remporter le groupe de Ligue des Nations</p></div>
            <div className="border-t border-white/[.08] p-5 sm:border-l sm:border-t-0"><p className="text-xs uppercase tracking-[.15em] text-slate-500">Cap suivant</p><p className="mt-2 font-semibold">Euro 2028</p></div>
            <div className="border-t border-white/[.08] p-5 sm:border-l sm:border-t-0"><p className="text-xs uppercase tracking-[.15em] text-slate-500">Vision</p><p className="mt-2 font-semibold">Coupe du monde 2030</p></div>
          </div>
        </article>
      </div>

      <div className="surface mt-10 flex gap-4 p-6 text-slate-400"><Flag className="shrink-0 text-violet-300" size={22}/><p className="text-sm leading-6">Aucun poste en club n’est actuellement enregistré. Les futurs mandats apparaîtront ici, dans l’ordre chronologique.</p></div>
    </section>
  </main>;
}
