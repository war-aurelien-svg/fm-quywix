"use client";
import { useState } from "react";
import { Trophy } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

const competitions = ["Ligue des Nations 2026/27", "Qualifications Euro 2028", "Euro 2028", "Matchs amicaux"];
const table = [
  { team: "Kosovo", j: 6, g: 4, n: 2, p: 0, bp: 12, bc: 5, pts: 14, form: "● ● ● ● ●" },
  { team: "Irlande du Nord", j: 6, g: 2, n: 3, p: 1, bp: 13, bc: 8, pts: 9, form: "● ● ● ● ●" },
  { team: "Biélorussie", j: 6, g: 2, n: 0, p: 4, bp: 10, bc: 14, pts: 6, form: "● ● ● ● ●" },
  { team: "Lettonie", j: 6, g: 1, n: 1, p: 4, bp: 6, bc: 14, pts: 4, form: "● ● ● ● ●" }
];

const euroQualifiersTable = [
  { team: "Kosovo", j: 8, g: 6, n: 0, p: 2, bp: 17, bc: 12, pts: 18 },
  { team: "Danemark", j: 7, g: 5, n: 1, p: 1, bp: 21, bc: 4, pts: 16 },
  { team: "Slovénie", j: 7, g: 4, n: 1, p: 2, bp: 13, bc: 6, pts: 13 },
  { team: "Malte", j: 7, g: 1, n: 1, p: 5, bp: 7, bc: 21, pts: 4 },
  { team: "Lituanie", j: 7, g: 0, n: 1, p: 6, bp: 4, bc: 19, pts: 1 },
];

export default function SelectionCompetitionsPage() { const [competition, setCompetition] = useState(competitions[0]); const isNationsLeague = competition === competitions[0]; const isEuroQualifiers = competition === competitions[1]; const rows = isNationsLeague ? table : euroQualifiersTable; return <main className="min-h-screen bg-ink px-5 py-7 text-slate-100 lg:px-12"><div className="mx-auto max-w-5xl"><SelectionHeader active="Compétitions"/><section className="surface mt-6 overflow-hidden"><header className="flex flex-col justify-between gap-4 border-b border-white/[.07] p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Compétitions</p><h2 className="mt-2 text-xl font-semibold">{competition}</h2><p className="mt-1 text-sm text-slate-400">Parcours, classement et calendrier du Kosovo.</p></div><select value={competition} onChange={event => setCompetition(event.target.value)} className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm font-semibold outline-none">{competitions.map(item => <option key={item} className="bg-panel">{item}</option>)}</select></header>{isNationsLeague || isEuroQualifiers ? <div><div className="flex items-center gap-3 p-6"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Trophy size={19}/></span><div><h3 className="font-semibold">{isNationsLeague ? "Groupe 3 · Ligue des Nations C" : "Groupe J · Qualifications Euro 2028"}</h3><p className="mt-1 text-sm text-slate-400">{isNationsLeague ? "Classement final : Kosovo invaincu et premier avec 14 points." : "Le Kosovo affrontera le Danemark, la Lituanie, Malte et la Slovénie."}</p></div></div><div className="overflow-x-auto"><div className="min-w-[700px]"><div className="grid grid-cols-[34px_1fr_repeat(7,42px)_56px] gap-2 border-y border-white/[.07] px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500"><span>#</span><span>Équipe</span><span>J</span><span>G</span><span>N</span><span>D</span><span>BP</span><span>BC</span><span>DB</span><span className="text-right">Pts</span></div><div className="divide-y divide-white/[.07]">{rows.map((row,index) => <div key={row.team} className={`grid grid-cols-[34px_1fr_repeat(7,42px)_56px] items-center gap-2 px-5 py-4 text-sm ${row.team === "Kosovo" ? "bg-violet-500/10" : ""}`}><span className="font-semibold text-slate-400">{index + 1}</span><span className="font-semibold">{row.team}</span><span>{row.j}</span><span>{row.g}</span><span>{row.n}</span><span>{row.p}</span><span>{row.bp}</span><span>{row.bc}</span><span>{row.bp-row.bc}</span><span className="text-right font-semibold">{row.pts}</span></div>)}</div></div></div></div> : <div className="grid place-items-center py-16 text-center"><Trophy size={32} className="text-violet-300"/><h3 className="mt-4 text-lg font-semibold">Aucune donnée pour {competition}</h3></div>}</section></div></main>; }
