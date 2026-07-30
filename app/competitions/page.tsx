import { Trophy } from "lucide-react";
import { ClubHeader } from "../../components/club-header";

export default function CompetitionsPage() {
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(44,104,255,.16),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><ClubHeader active="Compétitions"/><section className="surface mx-auto mt-8 max-w-2xl p-10 text-center"><Trophy className="mx-auto text-electric" size={36}/><p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-electric">Compétitions</p><h2 className="mt-3 text-3xl font-semibold">Aucune compétition de club</h2><p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">Aurélien Quywix est actuellement sans club. Les classements, parcours et tableaux seront disponibles dès sa prochaine prise de fonction.</p></section></main>;
}
