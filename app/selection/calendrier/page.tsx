"use client";
import { useState } from "react";
import { CalendarDays, ChevronRight, Trophy } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

type CalendarMatch = { date: string; opponent: string; venue: "D" | "E"; score: string | null; slug?: string; note?: string };

const matches: CalendarMatch[] = [
  { date: "Jeu. 24 sept. 2026", opponent: "Lettonie", venue: "E", score: "1 - 3", slug: "lettonie-kosovo-2026" },
  { date: "Dim. 27 sept. 2026", opponent: "Biélorussie", venue: "D", score: "2 - 0", slug: "kosovo-bielorussie-2026" },
  { date: "Jeu. 1 oct. 2026", opponent: "Irlande du Nord", venue: "D", score: "1 - 1", slug: "kosovo-irlande-du-nord-2026" },
  { date: "Dim. 4 oct. 2026", opponent: "Biélorussie", venue: "E", score: "2 - 4", slug: "bielorussie-kosovo-2026", note: "Match joué en Bulgarie" },
  { date: "Ven. 13 nov. 2026", opponent: "Lettonie", venue: "D", score: "1 - 0", slug: "kosovo-lettonie-novembre-2026" },
  { date: "Dim. 15 nov. 2026", opponent: "Kazakhstan", venue: "E", score: null },
];

export default function SelectionCalendarPage() {
  const [season, setSeason] = useState("2026-2027");
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-5 py-7 text-slate-100 lg:px-12"><div className="mx-auto max-w-5xl"><SelectionHeader active="Calendrier"/><section className="surface mt-6 overflow-hidden"><header className="flex flex-col justify-between gap-4 border-b border-white/[.07] p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Ligue des Nations C</p><h2 className="mt-2 text-xl font-semibold">Calendrier du Kosovo</h2><p className="mt-1 text-sm text-slate-400">Fenêtre internationale de septembre-octobre 2026.</p></div><label className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm"><span className="mr-2 text-slate-400">Saison</span><select value={season} onChange={event => setSeason(event.target.value)} className="bg-transparent font-semibold outline-none"><option className="bg-panel">2026-2027</option></select></label></header><div className="divide-y divide-white/[.07]">{matches.map((match, index) => <MatchRow key={match.date} match={match} highlighted={index === 0}/>)}</div></section><p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={14}/>D = domicile · E = extérieur · Cliquez sur un match terminé pour ouvrir le compte-rendu.</p></div></main>;
}

function MatchRow({ match, highlighted }: { match: CalendarMatch; highlighted: boolean }) {
  const teamLine = match.venue === "E" ? <>{match.opponent} <b className="mx-2 text-slate-600">—</b> Kosovo</> : <>Kosovo <b className="mx-2 text-slate-600">—</b> {match.opponent}</>;
  const content = <><span className="text-xs text-slate-400">{match.date}{match.note && <span className="mt-1 block text-[11px] text-slate-500">{match.note}</span>}</span><span className="font-semibold">{teamLine}</span><span className="hidden text-center text-xs text-slate-400 sm:block">{match.venue}</span><span className="hidden text-center sm:block">{match.score ? <strong className="rounded-lg bg-violet-400/15 px-2 py-1 text-sm text-white">{match.score}</strong> : <span className="text-slate-600">—</span>}</span><span className="inline-flex items-center justify-end gap-2 text-right text-xs text-violet-200"><Trophy size={14}/>Ligue des Nations C</span></>;
  const className = `grid grid-cols-[1fr_auto] items-center gap-4 p-5 transition sm:grid-cols-[160px_1fr_38px_78px_190px] ${highlighted ? "bg-violet-500/10 hover:bg-violet-500/15" : "hover:bg-white/[.035]"}`;
  return match.slug ? <a href={`/selection/calendrier/${match.slug}`} className={className}>{content}<ChevronRight className="text-violet-300 sm:hidden" size={17}/></a> : <article className={className}>{content}</article>;
}
