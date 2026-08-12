"use client";
import { useState } from "react";
import { Check, Users } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

type Player = { name: string; age: number; club: string; caps: number; goals: number };
type Group = { title: string; short: string; players: Player[] };
const p = (name: string, age: number, club: string, caps: number, goals: number): Player => ({ name, age, club, caps, goals });
const march2028Groups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Arijanet Murić",29,"Ipswich",62,0),p("Amir Saipi",27,"Lugano",8,0),p("Mustafë Abdullahu",24,"Lokomotiva",1,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",34,"Parthenope",89,8),p("Ron Raçi",25,"Hajduk",5,0),p("Andi Hoti",25,"Eintracht Braunschweig",6,0),p("Leard Sadriu",26,"Campionii FC Argeș",18,0),p("Arnis Ademi",21,"Fiorentina",0,0),p("Albian Hajdari",24,"TSG Hoffenheim",19,1),p("Art Smakaj",25,"LASK Linz",3,0),p("Mërgim Vojvoda",33,"Reims",88,4),p("Dion Gallapeni",23,"Widzew",4,0)] },
  { title: "Milieux", short: "M", players: [p("Hamza Muqaj",22,"Holstein Kiel",5,1),p("Elvis Rexhbeçaj",30,"Valencia",32,3),p("Leon Avdullahu",24,"FC Bayern München",25,1),p("Veldin Hodža",25,"Rubin",12,0),p("Emir Sahiti",29,"Eintracht Braunschweig",11,2),p("Edon Zhegrova",28,"AS Monaco",65,16),p("Bersant Celina",31,"AIK",54,4),p("Florent Muslija",29,"F.C. Hansa Rostock",55,6),p("Milot Rashica",31,"Beşiktaş",83,15)] },
  { title: "Attaquants", short: "A", players: [p("Fisnik Asllani",25,"Liverpool",27,8),p("Vedat Muriqi",33,"Mallorca",77,36)] }
];
const november2027Groups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Arijanet Murić",28,"Ipswich",61,0),p("Visar Bekaj",30,"Oviedo",10,0),p("Mustafë Abdullahu",23,"Lokomotiva",0,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",33,"Parthenope",87,7),p("Ron Raçi",25,"Hajduk",2,0),p("Leard Sadriu",26,"Campionii FC Argeș",16,0),p("Florian Hadergjonaj",33,"Alanyaspor",59,1),p("Ibrahim Drešević",30,"FC Machida",35,1),p("Art Smakaj",24,"LASK Linz",1,0),p("Mërgim Vojvoda",32,"Reims",85,3),p("Dion Gallapeni",23,"Widzew",0,0)] },
  { title: "Milieux", short: "M", players: [p("Elvis Rexhbeçaj",29,"Valencia",31,3),p("Leon Avdullahu",23,"TSG Hoffenheim",23,1),p("Bledian Krasniqi",26,"Zürich",16,0),p("Veldin Hodža",24,"Rubin",8,0),p("Emir Sahiti",28,"Eintracht Braunschweig",10,2),p("Florent Muslija",29,"F.C. Hansa Rostock",51,5),p("Bersant Celina",31,"AIK",53,4),p("Edon Zhegrova",28,"AS Monaco",64,16),p("Milot Rashica",31,"Beşiktaş",79,15)] },
  { title: "Attaquants", short: "A", players: [p("Fisnik Asllani",25,"TSG Hoffenheim",27,8),p("Vedat Muriqi",33,"Mallorca",76,36),p("Albion Rrahmani",27,"Sparta Prague",19,6)] }
];
const autumn2027Groups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Arijanet Murić",28,"Ipswich",58,0),p("Amir Saipi",27,"Lugano",8,0),p("Mustafë Abdullahu",23,"Lokomotiva",0,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",33,"Parthenope",84,7),p("Ron Raçi",25,"Hajduk",1,0),p("Leard Sadriu",26,"Campionii FC Argeș",13,0),p("Ibrahim Drešević",30,"FC Machida",33,1),p("Florian Hadergjonaj",33,"Alanyaspor",57,1),p("Art Smakaj",24,"LASK Linz",1,0),p("Leart Paçarada",32,"1. FC Heidenheim 1846",44,2),p("Mërgim Vojvoda",32,"Reims",83,3)] },
  { title: "Milieux", short: "M", players: [p("Elvis Rexhbeçaj",29,"Valencia",28,3),p("Leon Avdullahu",23,"TSG Hoffenheim",20,1),p("Bledian Krasniqi",26,"Zürich",16,0),p("Veldin Hodža",24,"Rubin",7,0),p("Emir Sahiti",28,"Eintracht Braunschweig",8,1),p("Florent Muslija",29,"F.C. Hansa Rostock",51,5),p("Edon Zhegrova",28,"AS Monaco",61,12),p("Bersant Celina",31,"AIK",51,4),p("Milot Rashica",31,"Beşiktaş",78,15)] },
  { title: "Attaquants", short: "A", players: [p("Fisnik Asllani",25,"TSG Hoffenheim",24,8),p("Vedat Muriqi",33,"Mallorca",74,35),p("Albion Rrahmani",27,"Sparta Prague",19,6)] }
];
const juneGroups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Arijanet Murić",28,"Ipswich",56,0),p("Amir Saipi",26,"Lugano",8,0),p("Mustafë Abdullahu",23,"KF Tirana",0,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",33,"Parthenope",82,7),p("Andi Hoti",24,"Eintracht Braunschweig",5,0),p("Albian Hajdari",24,"TSG Hoffenheim",17,0),p("Leard Sadriu",26,"Campionii FC Argeș",12,0),p("Florian Hadergjonaj",32,"Alanyaspor",55,1),p("Betim Fazliji",28,"St. Gallen",24,0),p("Mërgim Vojvoda",32,"Reims",81,3),p("Leart Paçarada",32,"1. FC Heidenheim 1846",42,1)] },
  { title: "Milieux", short: "M", players: [p("Bledian Krasniqi",25,"Zürich",15,0),p("Leon Avdullahu",23,"TSG Hoffenheim",18,1),p("Hamza Muqaj",21,"Vitesse",4,1),p("Elvis Rexhbeçaj",29,"Valencia",26,3),p("Emir Sahiti",28,"Hamburger SV",7,1),p("Bersant Celina",30,"AIK",49,4),p("Edon Zhegrova",28,"Juventus",59,12),p("Florent Muslija",28,"SC Freiburg",50,5),p("Milot Rashica",30,"Beşiktaş",76,15)] },
  { title: "Attaquants", short: "A", players: [p("Fisnik Asllani",24,"TSG Hoffenheim",22,8),p("Albion Rrahmani",26,"Sparta Prague",19,6),p("Vedat Muriqi",33,"Mallorca",72,34)] }
];
const marchGroups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Amir Saipi",26,"Lugano",6,0),p("Visar Bekaj",29,"KF Tirana",10,0),p("Mustafë Abdullahu",23,"KF Tirana",0,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",33,"Parthenope",80,7),p("Andi Hoti",24,"Eintracht Braunschweig",4,0),p("Albian Hajdari",23,"TSG Hoffenheim",15,0),p("Leard Sadriu",25,"Campionii FC Argeș",12,0),p("Florian Hadergjonaj",32,"Alanyaspor",53,1),p("Ibrahim Drešević",30,"FC Machida",32,1),p("Betim Fazliji",27,"St. Gallen",24,0),p("Mërgim Vojvoda",32,"Reims",79,3),p("Leart Paçarada",32,"1. FC Heidenheim 1846",41,1)] },
  { title: "Milieux", short: "M", players: [p("Bledian Krasniqi",25,"Zürich",15,0),p("Leon Avdullahu",23,"TSG Hoffenheim",16,1),p("Hamza Muqaj",21,"Vitesse",3,1),p("Elvis Rexhbeçaj",29,"Valencia",24,1),p("Bersant Celina",30,"AIK",48,4),p("Florent Muslija",28,"SC Freiburg",48,5),p("Edon Zhegrova",27,"Juventus",57,11),p("Milot Rashica",30,"Beşiktaş",74,13)] },
  { title: "Attaquants", short: "A", players: [p("Fisnik Asllani",24,"TSG Hoffenheim",21,8),p("Albion Rrahmani",26,"Sparta Prague",18,6),p("Vedat Muriqi",32,"Mallorca",71,34)] }
];
const novemberGroups: Group[] = [
  { title: "Gardiens", short: "G", players: [p("Arjanet Muriç",27,"Ipswich",54,0),p("Amir Saipi",26,"Lugano",6,0),p("Mustafë Abdullahu",22,"KF Tirana",0,0)] },
  { title: "Défenseurs", short: "D", players: [p("Amir Rrahmani",32,"Parthenope",78,7),p("Andi Hoti",23,"Eintracht Braunschweig",2,0),p("Albian Hajdari",23,"TSG Hoffenheim",13,0),p("Leard Sadriu",25,"Campionii FC Argeș",10,0),p("Florian Hadergjonaj",32,"Alanyaspor",51,1),p("Ibrahim Drešević",29,"FC Machida",32,1),p("Betim Fazliji",27,"St. Gallen",23,0),p("Mërgim Vojvoda",31,"Reims",78,3),p("Leart Paçarada",32,"1. FC Heidenheim",39,1)] },
  { title: "Milieux", short: "M", players: [p("Bledian Krasniqi",25,"Zürich",13,0),p("Hamza Muqaj",21,"Vitesse",2,0),p("Elvis Rexhbeçaj",29,"Valencia",23,1),p("Leon Avdullahu",22,"TSG Hoffenheim",14,1),p("Florent Muslija",28,"SC Freiburg",46,5),p("Meriton Korenica",29,"CFR Cluj",13,1)] },
  { title: "Attaquants", short: "A", players: [p("Edon Zhegrova",27,"Juventus",56,11),p("Emir Rashica",22,"Metalist 1925",0,0),p("Fisnik Asllani",24,"TSG Hoffenheim",21,8),p("Vedat Muriqi",32,"Mallorca",70,33),p("Albion Rrahmani",26,"Sparta Prague",17,6)] }
];
const septemberGroups: Group[] = [
  { title:"Gardiens", short:"G", players:[p("Arjanet Muriç",27,"Ipswich",50,0),p("Amir Saipi",26,"Lugano",6,0),p("Mustafë Abdullahu",22,"KF Tirana",0,0)] },
  { title:"Défenseurs", short:"D", players:[p("Amir Rrahmani",32,"Parthenope",74,7),p("Andi Hoti",23,"Eintracht Braunschweig",1,0),p("Albian Hajdari",23,"TSG Hoffenheim",10,0),p("Leard Sadriu",25,"Campionii FC Argeș",8,0),p("Florian Hadergjonaj",32,"Alanyaspor",47,1),p("Ibrahim Drešević",29,"FC Machida",29,1),p("Betim Fazliji",27,"St. Gallen",22,0),p("Mërgim Vojvoda",31,"Reims",74,3),p("Leart Paçarada",31,"1. FC Heidenheim",36,1)] },
  { title:"Milieux", short:"M", players:[p("Bledian Krasniqi",25,"Zürich",9,0),p("Leon Avdullahu",22,"TSG Hoffenheim",10,1),p("Hamza Muqaj",20,"Vitesse",0,0),p("Elvis Rexhbeçaj",28,"Valencia",19,1),p("Bersant Celina",30,"AIK",48,4),p("Florent Muslija",28,"SC Freiburg",42,3)] },
  { title:"Attaquants", short:"A", players:[p("Edon Zhegrova",27,"Juventus",52,7),p("Milot Rashica",30,"Beşiktaş",70,12),p("Fisnik Asllani",24,"TSG Hoffenheim",17,6),p("Albion Rrahmani",26,"Sparta Prague",16,6),p("Vedat Muriqi",32,"Mallorca",66,32)] }
];
const breaks = ["Mars 2028", "Novembre 2027", "Septembre / Octobre 2027", "Juin 2027", "Mars 2027", "Novembre 2026", "Septembre / Octobre 2026"];
const breakDescriptions: Record<string, string> = {
  "Mars 2028": "Matchs amicaux · République tchèque (E) et Islande (D)",
  "Novembre 2027": "Qualifications Euro 2028 · Lituanie (D) · Match amical · Canada (D)",
  "Septembre / Octobre 2027": "Qualifications Euro 2028 · Slovénie (D), Malte (E) et Danemark (E)",
  "Juin 2027": "Qualifications Euro 2028 · Danemark (D) et Lituanie (E)",
  "Mars 2027": "Qualifications Euro 2028 · Malte (D) et Slovénie (E)",
  "Novembre 2026": "Ligue des Nations · Lettonie (D) et Irlande du Nord (E)",
  "Septembre / Octobre 2026": "Ligue des Nations · quatre premières journées"
};

export default function ConvocationsPage() {
  const [breakDate, setBreakDate] = useState(breaks[0]);
  const groups = breakDate === "Mars 2028" ? march2028Groups : breakDate === "Novembre 2027" ? november2027Groups : breakDate === "Septembre / Octobre 2027" ? autumn2027Groups : breakDate === "Juin 2027" ? juneGroups : breakDate === "Mars 2027" ? marchGroups : breakDate === "Novembre 2026" ? novemberGroups : septemberGroups;
  const isCurrent = true;
  const total = groups.reduce((sum, group) => sum + group.players.length, 0);
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-5 py-7 text-slate-100 lg:px-12"><div className="mx-auto max-w-5xl"><SelectionHeader active="Convocations"/><section className="surface mt-6 overflow-hidden"><div className="flex flex-col justify-between gap-4 border-b border-white/[.08] p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Kosovo</p><h2 className="mt-2 text-2xl font-semibold">Joueurs sélectionnés</h2><p className="mt-1 text-sm text-slate-400">Liste des convocations par trêve internationale.</p></div><label className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm"><span className="mr-2 text-slate-400">Trêve</span><select value={breakDate} onChange={e=>setBreakDate(e.target.value)} className="bg-transparent font-semibold outline-none">{breaks.map(x=><option key={x} className="bg-panel">{x}</option>)}</select></label></div>{isCurrent ? <><div className="flex items-center gap-3 border-b border-white/[.08] bg-violet-400/[.05] px-6 py-4 text-sm"><span className="grid h-7 w-7 place-items-center rounded-full bg-violet-400/15 text-violet-200"><Check size={15}/></span><p><strong>{total} joueurs convoqués</strong><span className="text-slate-400"> · {breakDescriptions[breakDate]}</span></p></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="border-b border-white/[.08] text-xs uppercase tracking-[.12em] text-slate-500"><tr><th className="px-6 py-4 font-semibold">Joueur</th><th className="px-4 py-4 font-semibold">Poste</th><th className="px-4 py-4 font-semibold">Âge</th><th className="px-4 py-4 font-semibold">Club</th><th className="px-4 py-4 text-center font-semibold">Sélections</th><th className="px-6 py-4 text-center font-semibold">Buts</th></tr></thead><tbody>{groups.map(group=><GroupRows key={group.title} group={group}/>)}</tbody></table></div></> : <div className="grid place-items-center py-16 text-center"><Users size={32} className="text-violet-300"/><h3 className="mt-4 text-lg font-semibold">Aucune convocation importée</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">La sélection de {breakDate} apparaîtra ici dès que les données de la carrière internationale seront ajoutées.</p></div>}</section></div></main>;
}

function GroupRows({ group }: { group: Group }) {
  return <>{group.players.map((player, index)=><tr key={player.name} className="border-b border-white/[.06] transition hover:bg-white/[.035]"><td className={`px-6 py-4 font-semibold ${index === 0 ? "pt-7" : ""}`}>{index === 0 && <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-violet-300">{group.title}</p>}<span>{player.name}</span></td><td className="px-4 py-4"><span className="rounded-lg bg-white/[.06] px-2 py-1 text-xs font-bold text-violet-200">{group.short}</span></td><td className="px-4 py-4 text-slate-300">{player.age} ans</td><td className="px-4 py-4 text-slate-300">{player.club}</td><td className="px-4 py-4 text-center font-medium">{player.caps}</td><td className="px-6 py-4 text-center font-medium">{player.goals}</td></tr>)}</>;
}
