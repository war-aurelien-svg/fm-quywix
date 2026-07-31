"use client";
import { useState } from "react";
import { Check, Users } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

type Player = { name: string; age: number; club: string; caps: number; goals: number };
type Group = { title: string; short: string; players: Player[] };
const p = (name: string, age: number, club: string, caps: number, goals: number): Player => ({ name, age, club, caps, goals });
const groups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Arjanet Muriç",27,"Ipswich",50,0),p("Amir Saipi",26,"Lugano",6,0),p("Mustafë Abdullahu",22,"KF Tirana",0,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",32,"Parthenope",74,7),p("Andi Hoti",23,"Eintracht Braunschweig",1,0),p("Albian Hajdari",23,"TSG Hoffenheim",10,0),p("Leard Sadriu",25,"Campionii FC Argeș",8,0),p("Florian Hadergjonaj",32,"Alanyaspor",47,1),p("Ibrahim Drešević",29,"FC Machida",29,1),p("Betim Fazliji",27,"St. Gallen",22,0),p("Mërgim Vojvoda",31,"Reims",74,3),p("Leart Paçarada",31,"1. FC Heidenheim",36,1)] },
  { title: "Milieux", short: "M", players: [p("Bledian Krasniqi",25,"Zürich",9,0),p("Leon Avdullahu",22,"TSG Hoffenheim",10,1),p("Hamza Muqaj",20,"Vitesse",0,0),p("Elvis Rexhbeçaj",28,"Valencia",19,1),p("Bersant Celina",30,"AIK",48,4),p("Florent Muslija",28,"SC Freiburg",42,3)] },
  { title: "Attaquants", short: "A", players: [p("Edon Zhegrova",27,"Juventus",52,7),p("Milot Rashica",30,"Beşiktaş",70,12),p("Fisnik Asllani",24,"TSG Hoffenheim",17,6),p("Albion Rrahmani",26,"Sparta Prague",16,6),p("Vedat Muriqi",32,"Mallorca",66,32)] }
];
const breaks = ["Septembre / Octobre 2026"];

export default function ConvocationsPage() {
  const [breakDate, setBreakDate] = useState(breaks[0]);
  const isCurrent = breakDate === breaks[0];
  const total = groups.reduce((sum, group) => sum + group.players.length, 0);
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-5 py-7 text-slate-100 lg:px-12"><div className="mx-auto max-w-5xl"><SelectionHeader active="Convocations"/><section className="surface mt-6 overflow-hidden"><div className="flex flex-col justify-between gap-4 border-b border-white/[.08] p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Kosovo</p><h2 className="mt-2 text-2xl font-semibold">Joueurs sélectionnés</h2><p className="mt-1 text-sm text-slate-400">Liste des convocations par trêve internationale.</p></div><label className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm"><span className="mr-2 text-slate-400">Trêve</span><select value={breakDate} onChange={e=>setBreakDate(e.target.value)} className="bg-transparent font-semibold outline-none">{breaks.map(x=><option key={x} className="bg-panel">{x}</option>)}</select></label></div>{isCurrent ? <><div className="flex items-center gap-3 border-b border-white/[.08] bg-violet-400/[.05] px-6 py-4 text-sm"><span className="grid h-7 w-7 place-items-center rounded-full bg-violet-400/15 text-violet-200"><Check size={15}/></span><p><strong>{total} joueurs convoqués</strong><span className="text-slate-400"> · Ligue des Nations, matchs de septembre et octobre 2026</span></p></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="border-b border-white/[.08] text-xs uppercase tracking-[.12em] text-slate-500"><tr><th className="px-6 py-4 font-semibold">Joueur</th><th className="px-4 py-4 font-semibold">Poste</th><th className="px-4 py-4 font-semibold">Âge</th><th className="px-4 py-4 font-semibold">Club</th><th className="px-4 py-4 text-center font-semibold">Sélections</th><th className="px-6 py-4 text-center font-semibold">Buts</th></tr></thead><tbody>{groups.map(group=><GroupRows key={group.title} group={group}/>)}</tbody></table></div></> : <div className="grid place-items-center py-16 text-center"><Users size={32} className="text-violet-300"/><h3 className="mt-4 text-lg font-semibold">Aucune convocation importée</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">La sélection de {breakDate} apparaîtra ici dès que les données de la carrière internationale seront ajoutées.</p></div>}</section></div></main>;
}

function GroupRows({ group }: { group: Group }) {
  return <>{group.players.map((player, index)=><tr key={player.name} className="border-b border-white/[.06] transition hover:bg-white/[.035]"><td className={`px-6 py-4 font-semibold ${index === 0 ? "pt-7" : ""}`}>{index === 0 && <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-violet-300">{group.title}</p>}<span>{player.name}</span></td><td className="px-4 py-4"><span className="rounded-lg bg-white/[.06] px-2 py-1 text-xs font-bold text-violet-200">{group.short}</span></td><td className="px-4 py-4 text-slate-300">{player.age} ans</td><td className="px-4 py-4 text-slate-300">{player.club}</td><td className="px-4 py-4 text-center font-medium">{player.caps}</td><td className="px-6 py-4 text-center font-medium">{player.goals}</td></tr>)}</>;
}
