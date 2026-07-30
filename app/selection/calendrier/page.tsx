"use client";
import { useState } from "react";
import { CalendarDays, Trophy } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

const matches = [
  { date: "Sam. 26 sept. 2026", opponent: "Arménie", venue: "E" },
  { date: "Mar. 29 sept. 2026", opponent: "Lituanie", venue: "D" },
  { date: "Sam. 3 oct. 2026", opponent: "Kazakhstan", venue: "D" },
  { date: "Mar. 6 oct. 2026", opponent: "Lituanie", venue: "E" },
  { date: "Jeu. 12 nov. 2026", opponent: "Arménie", venue: "D" },
  { date: "Dim. 15 nov. 2026", opponent: "Kazakhstan", venue: "E" },
] as const;

export default function SelectionCalendarPage() {
  const [season, setSeason] = useState("2026-2027");
  return <main className="min-h-screen bg-ink px-5 py-7 text-slate-100 lg:px-12"><div className="mx-auto max-w-5xl"><SelectionHeader active="Calendrier"/><section className="surface mt-6 overflow-hidden"><header className="flex flex-col justify-between gap-4 border-b border-white/[.07] p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Ligue des Nations C</p><h2 className="mt-2 text-xl font-semibold">Calendrier du Kosovo</h2><p className="mt-1 text-sm text-slate-400">Groupe 4 · Arménie, Kazakhstan, Kosovo et Lituanie.</p></div><label className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm"><span className="mr-2 text-slate-400">Saison</span><select value={season} onChange={event => setSeason(event.target.value)} className="bg-transparent font-semibold outline-none"><option className="bg-panel">2026-2027</option></select></label></header><div className="divide-y divide-white/[.07]">{matches.map((match, index) => <article key={match.date} className={`grid grid-cols-[1fr_auto] items-center gap-4 p-5 sm:grid-cols-[160px_1fr_38px_190px] ${index === 0 ? "bg-violet-500/10" : ""}`}><span className="text-xs text-slate-400">{match.date}</span><span className="font-semibold">Kosovo <b className="mx-2 text-slate-600">—</b> {match.opponent}</span><span className="hidden text-center text-xs text-slate-400 sm:block">{match.venue}</span><span className="inline-flex items-center gap-2 text-right text-xs text-violet-200"><Trophy size={14}/>Groupe 4 · Ligue des Nations C</span></article>)}</div></section><p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={14}/>D = domicile · E = extérieur</p></div></main>;
}
