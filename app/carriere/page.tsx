"use client";
import { useEffect,useState } from "react";
import { CalendarDays,ChevronLeft,Flag } from "lucide-react";
import { VisualRecordEditor,VisualField } from "../../components/visual-record-editor";
import { getSupabaseClient } from "../../lib/supabase";

const fields:VisualField[]=[
  {key:"club_name",label:"Club ou sélection"},{key:"logo_url",label:"Logo ou drapeau",type:"image",required:false},{key:"role",label:"Fonction"},{key:"country",label:"Pays"},{key:"city",label:"Ville"},
  {key:"start_date",label:"Date de début",type:"date"},{key:"end_date",label:"Date de fin",type:"date",required:false},{key:"status",label:"Statut"},
  {key:"summary",label:"Présentation",type:"textarea"},{key:"achievements",label:"Palmarès et faits marquants — un par ligne",type:"lines"}
];
const defaultCareer={id:"default-kosovo",club_name:"Kosovo",logo_url:"",role:"Sélectionneur national",country:"Kosovo",city:"Pristina",start_date:"2026-08-02",end_date:null,status:"En poste",summary:"Aurélien Quywix dirige la sélection du Kosovo et accompagne son développement sur la scène internationale.",achievements:["Qualification historique pour l’Euro 2028","Première participation du Kosovo à un Championnat d’Europe"]};

export default function CarrierePage(){
  const[clubs,setClubs]=useState<any[]>([defaultCareer]);
  useEffect(()=>{const db=getSupabaseClient();if(!db)return;db.from("career_entries").select("*").order("start_date",{ascending:false}).then(({data})=>{if(data?.length)setClubs(data)})},[]);
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-5 py-8 text-slate-100 sm:px-10"><section className="mx-auto max-w-5xl">
    <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-400"><ChevronLeft size={16}/>Retour à l’accueil</a>
    <div className="mt-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">Parcours d’Aurélien Quywix</p><h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Ma carrière</h1></div><VisualRecordEditor table="career_entries" fields={fields} label="Ajouter un club"/></div>
    <div className="relative mt-12 space-y-6 border-l border-violet-300/30 pl-8 sm:pl-12">{clubs.map(club=><CareerCard key={club.id} club={club}/>)}</div>
  </section></main>
}

function CareerCard({club}:{club:any}){return <article className="surface relative overflow-hidden"><span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full border-4 border-[#090b10] bg-violet-400 sm:-left-[57px]"/><div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center"><div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-violet-400/10 p-3">{club.logo_url?<img src={club.logo_url} alt={`Logo ${club.club_name}`} className="h-full w-full object-contain"/>:<Flag className="text-violet-300"/>}</div><div className="flex-1"><p className="text-xs font-bold uppercase tracking-wider text-violet-300">{club.role}</p><h2 className="mt-2 text-3xl font-semibold">{club.club_name}</h2><p className="mt-2 text-sm text-slate-400">{club.city}{club.country?` · ${club.country}`:""}</p><p className="mt-4 leading-7 text-slate-300">{club.summary}</p></div><div className="space-y-3 text-sm text-slate-400"><p className="flex gap-2"><CalendarDays size={16}/>{format(club.start_date)} {club.end_date?`— ${format(club.end_date)}`:"— aujourd’hui"}</p><p className="text-violet-200">{club.status}</p><VisualRecordEditor table="career_entries" row={club} fields={fields}/></div></div>{club.achievements?.length>0&&<div className="border-t border-white/[.08] p-5"><p className="text-xs uppercase tracking-wider text-slate-500">Palmarès et faits marquants</p><ul className="mt-3 space-y-2">{club.achievements.map((x:string)=><li key={x}>• {x}</li>)}</ul></div>}</article>}
function format(value:string){return new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(value))}
