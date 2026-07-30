import { BarChart3 } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

export default function SelectionStatistiquesPage() {
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><SelectionHeader active="Statistiques"/><section className="surface mx-auto mt-8 max-w-2xl p-10 text-center"><BarChart3 className="mx-auto text-violet-300" size={36}/><h2 className="mt-5 text-2xl font-semibold">Pas encore de statistiques internationales</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">Les statistiques du Kosovo seront disponibles après les premiers matchs de votre carrière de sélectionneur.</p></section></main>;
}
