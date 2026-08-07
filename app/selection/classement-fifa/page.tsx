import { ArrowLeft, TrendingUp, Trophy } from "lucide-react";
import { SelectionHeader } from "../../../components/selection-header";

const rankings = [
  { date: "Juil. 2026", rank: 69 },
  { date: "Nov. 2026", rank: 69 },
  { date: "Mars 2027", rank: 73 },
  { date: "18 juin 2027", rank: 66 },
  { date: "30 juin 2027", rank: 65 },
];

const chart = {
  left: 56,
  right: 744,
  top: 35,
  bottom: 220,
  minRank: 63,
  maxRank: 75,
};

const xFor = (index: number) => chart.left + index * ((chart.right - chart.left) / (rankings.length - 1));
const yFor = (rank: number) => chart.top + ((rank - chart.minRank) / (chart.maxRank - chart.minRank)) * (chart.bottom - chart.top);
const points = rankings.map((item, index) => `${xFor(index)},${yFor(item.rank)}`).join(" ");

export default function ClassementFifaPage() {
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(124,58,237,.18),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14">
    <SelectionHeader active="Pays"/>
    <section className="mx-auto mt-8 max-w-5xl">
      <a href="/selection" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft size={16}/>Retour au pays</a>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_250px]">
        <section className="surface overflow-hidden p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">Classement FIFA</p>
          <h2 className="mt-2 text-3xl font-semibold">Évolution du Kosovo</h2>
          <p className="mt-2 text-sm text-slate-400">Plus la courbe monte, plus le Kosovo progresse au classement mondial.</p>

          <div className="mt-8 overflow-x-auto">
            <svg viewBox="0 0 800 285" role="img" aria-label="Évolution du classement FIFA du Kosovo de juillet 2026 au 30 juin 2027" className="min-w-[680px]">
              <defs>
                <linearGradient id="rankingArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {[65, 70, 75].map(rank => <g key={rank}>
                <line x1={chart.left} x2={chart.right} y1={yFor(rank)} y2={yFor(rank)} stroke="rgba(255,255,255,.09)" strokeDasharray="5 7"/>
                <text x="38" y={yFor(rank) + 4} fill="#64748b" fontSize="12" textAnchor="end">{rank}e</text>
              </g>)}
              <polygon points={`${chart.left},${chart.bottom} ${points} ${chart.right},${chart.bottom}`} fill="url(#rankingArea)"/>
              <polyline points={points} fill="none" stroke="#a78bfa" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              {rankings.map((item, index) => {
                const x = xFor(index);
                const y = yFor(item.rank);
                const latest = index === rankings.length - 1;
                return <g key={item.date}>
                  <circle cx={x} cy={y} r={latest ? 9 : 7} fill={latest ? "#c4b5fd" : "#7c3aed"} stroke="#111827" strokeWidth="4"/>
                  <rect x={x - 25} y={y - 39} width="50" height="25" rx="8" fill={latest ? "#c4b5fd" : "#312e81"}/>
                  <text x={x} y={y - 22} fill={latest ? "#111827" : "#ede9fe"} fontSize="13" fontWeight="700" textAnchor="middle">{item.rank}e</text>
                  <text x={x} y="262" fill={latest ? "#ddd6fe" : "#64748b"} fontSize="12" fontWeight={latest ? "700" : "500"} textAnchor="middle">{item.date}</text>
                </g>;
              })}
            </svg>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-white/[.07] pt-4 text-xs text-slate-500">
            <span>Début du mandat : 69e</span>
            <span>Dernière mise à jour : 30 juin 2027</span>
          </div>
        </section>

        <aside className="surface p-6">
          <Trophy className="text-violet-300" size={25}/>
          <p className="mt-5 text-sm text-slate-400">Position au 30 juin 2027</p>
          <p className="mt-1 text-5xl font-semibold">65e</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-emerald-300"><TrendingUp size={16}/>Gain d’une place depuis le 18 juin</div>
          <div className="mt-6 border-t border-white/[.08] pt-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">Meilleur classement</p>
            <p className="mt-1 text-xl font-semibold text-violet-200">65e</p>
          </div>
        </aside>
      </div>
    </section>
  </main>;
}
