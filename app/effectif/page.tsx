"use client";
import { useEffect,useMemo,useState } from "react";
import { Filter,Search,SlidersHorizontal,Star,TrendingUp,Users } from "lucide-react";
import { ClubHeader } from "../../components/club-header";
import { VisualField,VisualRecordEditor } from "../../components/visual-record-editor";
import { getSupabaseClient } from "../../lib/supabase";
import { normalizeSeason,SeasonControl } from "../../components/season-control";

const fields:VisualField[]=[
  {key:"name",label:"Nom du joueur"},{key:"position",label:"Poste"},{key:"age",label:"Âge"},
  {key:"nationality",label:"Nationalité"},{key:"market_value",label:"Valeur estimée"},
  {key:"rating",label:"Note / forme"},{key:"progress",label:"Progression"},
  {key:"contract_until",label:"Contrat jusqu’en"},{key:"season",label:"Saison (ex. 2027-2028)"},
  {key:"club_name",label:"Club"}
];
const colors=["from-blue-400 to-indigo-800","from-amber-300 to-orange-700","from-teal-300 to-cyan-800","from-violet-300 to-purple-800","from-rose-300 to-red-800","from-lime-300 to-emerald-800"];
function Avatar({name,index}:{name:string;index:number}){return <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${colors[index%colors.length]} text-sm font-bold`}>{name.split(" ").filter(Boolean).map(x=>x[0]).join("").slice(0,3)}</div>}

export default function EffectifPage(){
  const[players,setPlayers]=useState<any[]>([]),[seasonRows,setSeasonRows]=useState<any[]>([]),[season,setSeason]=useState("2027-2028"),[search,setSearch]=useState(""),[loading,setLoading]=useState(true);
  useEffect(()=>{const db=getSupabaseClient();if(!db){setLoading(false);return}Promise.all([db.from("club_players").select("*").order("name"),db.from("seasons").select("*").order("start_date",{ascending:false})]).then(([playerResult,seasonResult])=>{const list=playerResult.data||[];setPlayers(list);setSeasonRows(seasonResult.data||[]);const latest=seasonResult.data?.[0]?.name||[...new Set(list.map(x=>x.season).filter(Boolean))].sort().reverse()[0];if(latest)setSeason(normalizeSeason(String(latest)));setLoading(false)})},[]);
  const seasons=useMemo(()=>[...new Set([season,...seasonRows.map(x=>normalizeSeason(x.name)),...players.map(x=>x.season).filter(Boolean)])].sort().reverse(),[players,season,seasonRows]);
  const visible=players.filter(x=>x.season===season&&x.name.toLowerCase().includes(search.toLowerCase()));
  const grouped=[
    {title:"Gardiens",players:visible.filter(x=>/^(GB|GK|GARD)/i.test(x.position))},
    {title:"Défenseurs",players:visible.filter(x=>/^(D|DC|DL|DR|LAT)/i.test(x.position))},
    {title:"Milieux",players:visible.filter(x=>/^(M|MD|MC|MOC|MDC|AIL)/i.test(x.position))},
    {title:"Attaquants",players:visible.filter(x=>/^(A|ATT|BT|BU)/i.test(x.position))},
    {title:"Autres postes",players:visible.filter(x=>!/^(GB|GK|GARD|D|DC|DL|DR|LAT|M|MD|MC|MOC|MDC|AIL|A|ATT|BT|BU)/i.test(x.position))}
  ].filter(group=>group.players.length);
  const ages=visible.map(x=>Number(x.age)).filter(Number.isFinite),averageAge=ages.length?(ages.reduce((a,b)=>a+b,0)/ages.length).toFixed(1):"—";
  const club=visible[0]?.club_name||"Sans club actuellement";
  return <main className="min-h-screen bg-[radial-gradient(circle_at_90%_0,rgba(44,104,255,.16),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><ClubHeader active="Effectif"/>
    <header className="mb-8 mt-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-electric">{club} · {season}</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Effectif</h1><p className="mt-2 text-sm text-slate-400">Ajoutez et gérez ici tous les joueurs du club, saison par saison.</p></div><div className="flex flex-wrap gap-3"><label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm"><span className="text-slate-400">Saison</span><select value={season} onChange={e=>setSeason(e.target.value)} className="bg-transparent font-semibold outline-none">{seasons.map(x=><option className="bg-panel" value={x} key={x}>{x.replace("-"," — ")}</option>)}</select></label><SeasonControl/><VisualRecordEditor table="club_players" fields={fields} label="Ajouter un joueur" accent="blue"/><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric px-4 py-2.5 text-sm font-semibold shadow-glow"><TrendingUp size={16}/>Comparer</button></div></header>
    <div className="mb-5 grid gap-4 sm:grid-cols-3"><section className="surface p-5"><p className="muted">Joueurs inscrits</p><p className="mt-2 text-2xl font-semibold">{visible.length}</p></section><section className="surface p-5"><p className="muted">Âge moyen</p><p className="mt-2 text-2xl font-semibold">{averageAge}</p></section><section className="surface p-5"><p className="muted">Saison affichée</p><p className="mt-2 text-2xl font-semibold">{season}</p></section></div>
    <section className="surface overflow-hidden"><div className="flex flex-col gap-3 border-b border-white/[.07] p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/15 px-3 py-2"><Search size={16} className="text-slate-500"/><input value={search} onChange={e=>setSearch(e.target.value)} className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-500" placeholder="Rechercher un joueur"/></div><div className="flex gap-2"><button className="rounded-xl border border-white/10 p-2.5 text-slate-400"><Filter size={16}/></button><button className="rounded-xl border border-white/10 p-2.5 text-slate-400"><SlidersHorizontal size={16}/></button></div></div>
      <div>{grouped.map((group,groupIndex)=><section key={group.title}><div className="border-b border-white/[.07] bg-blue-500/[.07] px-6 py-3"><h3 className="text-xs font-bold uppercase tracking-[.16em] text-blue-300">{group.title} · {group.players.length}</h3></div><div className="divide-y divide-white/[.07]">{group.players.map((player,i)=><article key={player.id} className="group flex flex-wrap items-center gap-3 p-4 transition hover:bg-white/[.035] sm:flex-nowrap sm:gap-5 sm:px-6"><Avatar name={player.name} index={groupIndex*6+i}/><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><h2 className="truncate text-sm font-semibold sm:text-base">{player.name}</h2><span className="rounded-md bg-electric/15 px-1.5 py-0.5 text-[10px] font-bold text-blue-300">{player.position}</span></div><p className="mt-1 text-xs text-slate-500">{player.nationality}{player.age?` · ${player.age} ans`:""}{player.contract_until?` · Contrat jusqu’en ${player.contract_until}`:""}</p></div><div className="hidden text-right sm:block"><p className="text-sm font-semibold">{player.market_value||"—"}</p><p className="mt-1 text-xs text-emerald-400">{player.progress?`Progression ${player.progress}`:""}</p></div><div className="rounded-xl bg-amber-300/10 px-3 py-2 text-center"><p className="flex items-center gap-1 text-sm font-bold text-amber-200"><Star size={12} fill="currentColor"/>{player.rating||"—"}</p><p className="mt-0.5 text-[9px] uppercase tracking-wider text-slate-500">forme</p></div><VisualRecordEditor table="club_players" row={player} fields={fields} accent="blue"/></article>)}</div></section>)}</div>
      {!loading&&!visible.length&&<div className="grid place-items-center gap-3 p-12 text-center text-slate-400"><Users size={30} className="text-blue-300"/><p>Aucun joueur pour cette saison.</p><p className="text-xs">Connectez-vous comme administrateur puis utilisez « Ajouter un joueur ».</p></div>}
    </section>
  </main>;
}
