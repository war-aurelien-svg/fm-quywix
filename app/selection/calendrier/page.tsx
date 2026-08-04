"use client";

import { useState } from "react";
import { CalendarDays, ChevronRight, Trophy } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

type CalendarMatch = {
  date: string;
  opponent: string;
  venue: "D" | "E";
  score: string | null;
  competition: string;
  slug?: string;
  note?: string;
};

type CalendarYear = {
  eyebrow: string;
  description: string;
  matches: CalendarMatch[];
};

const calendars: Record<"2026" | "2027", CalendarYear> = {
  "2026": {
    eyebrow: "Ligue des Nations C · Groupe 3",
    description: "Campagne internationale 2026 du Kosovo.",
    matches: [
      { date: "Jeu. 24 sept. 2026", opponent: "Lettonie", venue: "E", score: "1 - 3", competition: "Ligue des Nations C", slug: "lettonie-kosovo-2026" },
      { date: "Dim. 27 sept. 2026", opponent: "Biélorussie", venue: "D", score: "2 - 0", competition: "Ligue des Nations C", slug: "kosovo-bielorussie-2026" },
      { date: "Jeu. 1 oct. 2026", opponent: "Irlande du Nord", venue: "D", score: "1 - 1", competition: "Ligue des Nations C", slug: "kosovo-irlande-du-nord-2026" },
      { date: "Dim. 4 oct. 2026", opponent: "Biélorussie", venue: "E", score: "2 - 4", competition: "Ligue des Nations C", slug: "bielorussie-kosovo-2026", note: "Match joué en Bulgarie" },
      { date: "Ven. 13 nov. 2026", opponent: "Lettonie", venue: "D", score: "1 - 0", competition: "Ligue des Nations C", slug: "kosovo-lettonie-novembre-2026" },
      { date: "Lun. 16 nov. 2026", opponent: "Irlande du Nord", venue: "E", score: "1 - 1", competition: "Ligue des Nations C", slug: "irlande-du-nord-kosovo-novembre-2026" },
    ],
  },
  "2027": {
    eyebrow: "Qualifications Euro 2028 · Groupe J",
    description: "Campagne de qualification du Kosovo pour l’Euro 2028.",
    matches: [
      { date: "Ven. 26 mars 2027 · 19:30", opponent: "Malte", venue: "D", score: "5 - 1", competition: "Qualifications Euro 2028", slug: "kosovo-malte-2027" },
      { date: "Lun. 29 mars 2027 · 19:30", opponent: "Slovénie", venue: "E", score: null, competition: "Qualifications Euro 2028" },
      { date: "Jeu. 10 juin 2027 · 19:30", opponent: "Danemark", venue: "D", score: null, competition: "Qualifications Euro 2028" },
      { date: "Dim. 13 juin 2027 · 19:30", opponent: "Lituanie", venue: "E", score: null, competition: "Qualifications Euro 2028" },
      { date: "Mar. 28 sept. 2027 · 19:30", opponent: "Slovénie", venue: "D", score: null, competition: "Qualifications Euro 2028" },
      { date: "Sam. 2 oct. 2027 · 19:30", opponent: "Malte", venue: "E", score: null, competition: "Qualifications Euro 2028" },
      { date: "Mar. 5 oct. 2027 · 19:30", opponent: "Danemark", venue: "E", score: null, competition: "Qualifications Euro 2028" },
      { date: "Jeu. 11 nov. 2027 · 19:30", opponent: "Lituanie", venue: "D", score: null, competition: "Qualifications Euro 2028" },
    ],
  },
};

export default function SelectionCalendarPage() {
  const [year, setYear] = useState<keyof typeof calendars>("2026");
  const calendar = calendars[year];

  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-5 py-7 text-slate-100 lg:px-12"><div className="mx-auto max-w-5xl"><SelectionHeader active="Calendrier"/><section className="surface mt-6 overflow-hidden"><header className="flex flex-col justify-between gap-4 border-b border-white/[.07] p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">{calendar.eyebrow}</p><h2 className="mt-2 text-xl font-semibold">Calendrier du Kosovo · {year}</h2><p className="mt-1 text-sm text-slate-400">{calendar.description}</p></div><label className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm"><span className="mr-2 text-slate-400">Année</span><select value={year} onChange={event => setYear(event.target.value as keyof typeof calendars)} className="bg-transparent font-semibold outline-none"><option className="bg-panel" value="2026">2026</option><option className="bg-panel" value="2027">2027</option></select></label></header>{calendar.matches.length > 0 ? <div className="divide-y divide-white/[.07]">{calendar.matches.map((match, index) => <MatchRow key={`${match.date}-${match.opponent}`} match={match} highlighted={index === 0}/>)}</div> : <div className="grid place-items-center px-6 py-16 text-center"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-300"><CalendarDays size={24}/></span><h3 className="mt-4 text-lg font-semibold">Qualifications Euro 2028 · Groupe J</h3><p className="mt-2 max-w-md text-sm leading-6 text-slate-400">Le Kosovo est engagé dans le groupe J. Les rencontres seront affichées ici dès l’import des adversaires et des dates.</p></div>}</section><p className="mt-4 flex items-center gap-2 text-xs text-slate-500"><CalendarDays size={14}/>D = domicile · E = extérieur · Cliquez sur un match terminé pour ouvrir le compte-rendu.</p></div></main>;
}

function MatchRow({ match, highlighted }: { match: CalendarMatch; highlighted: boolean }) {
  const teamLine = match.venue === "E" ? <>{match.opponent} <b className="mx-2 text-slate-600">—</b> Kosovo</> : <>Kosovo <b className="mx-2 text-slate-600">—</b> {match.opponent}</>;
  const content = <><span className="text-xs text-slate-400">{match.date}{match.note && <span className="mt-1 block text-[11px] text-slate-500">{match.note}</span>}</span><span className="font-semibold">{teamLine}</span><span className="hidden text-center text-xs text-slate-400 sm:block">{match.venue}</span><span className="hidden text-center sm:block">{match.score ? <strong className="rounded-lg bg-violet-400/15 px-2 py-1 text-sm text-white">{match.score}</strong> : <span className="text-slate-600">—</span>}</span><span className="inline-flex items-center justify-end gap-2 text-right text-xs text-violet-200"><Trophy size={14}/>{match.competition}</span></>;
  const className = `grid grid-cols-[1fr_auto] items-center gap-4 p-5 transition sm:grid-cols-[160px_1fr_38px_78px_190px] ${highlighted ? "bg-violet-500/10 hover:bg-violet-500/15" : "hover:bg-white/[.035]"}`;
  return match.slug ? <a href={`/selection/calendrier/${match.slug}`} className={className}>{content}<ChevronRight className="text-violet-300 sm:hidden" size={17}/></a> : <article className={className}>{content}</article>;
}
