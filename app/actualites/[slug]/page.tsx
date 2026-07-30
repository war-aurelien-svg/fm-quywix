import { ChevronLeft, Clock3 } from "lucide-react";
import { newsItems } from "../../../data/news";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsItems.find(item => item.slug === slug);
  if (!article) return <main className="grid min-h-screen place-items-center bg-ink text-white"><a href="/actualites" className="text-blue-300">Article introuvable — Retour aux actualités</a></main>;
  return <main className="min-h-screen bg-[radial-gradient(circle_at_85%_0,rgba(44,104,255,.16),transparent_30%),#090b10] px-4 py-6 text-slate-100 sm:px-8 lg:px-14"><div className="mx-auto max-w-4xl"><a href="/actualites" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ChevronLeft size={16}/>Toutes les actualités</a><article><p className="text-xs font-bold uppercase tracking-[.2em] text-electric">{article.category}</p><h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{article.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{article.summary}</p><div className="mt-6 flex items-center gap-3 text-sm"><span className="grid h-9 w-9 place-items-center rounded-full bg-electric/15 text-xs font-bold text-blue-200">QX</span><div><p className="font-semibold">{article.author}</p><p className="flex items-center gap-1 text-xs text-slate-500"><Clock3 size={12}/>{article.date}</p></div></div><img src={article.image} alt="" className="mt-8 aspect-[16/8] w-full rounded-3xl object-cover"/><div className="mx-auto mt-9 max-w-2xl space-y-6 text-[17px] leading-8 text-slate-300">{article.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></article></div></main>;
}
