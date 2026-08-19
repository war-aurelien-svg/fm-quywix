import { Trophy } from "lucide-react";
import { ClubHeader } from "../../components/club-header";
import { VisualRecordEditor,VisualField } from "../../components/visual-record-editor";
import { getSupabaseServerClient } from "../../lib/supabase";

const fields:VisualField[]=[{key:"name",label:"Nom de la compétition"},{key:"season_name",label:"Saison"},{key:"club_name",label:"Club ou sélection"},{key:"competition_type",label:"Type de compétition"},{key:"status",label:"Statut"},{key:"position",label:"Classement ou résultat"},{key:"details",label:"Description",type:"textarea"}];

export default async function CompetitionsPage(){
  const db=getSupabaseServerClient();
  const{data}=db?await db.from("competitions").select("*").order("created_at",{ascending:false}):{data:null};
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(44,104,255,.16),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><ClubHeader active="Compétitions"/><section className="mx-auto mt-8 max-w-4xl"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-electric">Compétitions</p><h2 className="mt-3 text-3xl font-semibold">Parcours en club et en sélection</h2></div><VisualRecordEditor table="competitions" fields={fields} label="Ajouter une compétition" accent="blue"/></div>
  {data?.length?<div className="mt-6 grid gap-4 sm:grid-cols-2">{data.map(x=><article key={x.id} className="surface p-6"><div className="flex items-start justify-between gap-3"><Trophy className="text-electric"/><VisualRecordEditor table="competitions" row={x} fields={fields} accent="blue"/></div><p className="mt-4 text-xs uppercase tracking-wider text-slate-500">{x.competition_type} · {x.club_name}{x.season_name?` · ${x.season_name}`:""}</p><h3 className="mt-2 text-xl font-semibold">{x.name}</h3><p className="mt-3 text-sm text-slate-400">{x.details}</p><div className="mt-5 flex justify-between border-t border-white/[.08] pt-4"><span>{x.status}</span><strong className="text-blue-300">{x.position}</strong></div></article>)}</div>:<div className="surface mt-6 p-10 text-center"><Trophy className="mx-auto text-electric" size={36}/><h3 className="mt-5 text-2xl font-semibold">Aucune compétition</h3><p className="mt-3 text-slate-400">Utilisez « Ajouter une compétition ».</p></div>}
  </section></main>
}
