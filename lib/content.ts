import { newsItems as legacyArticles } from "../data/news";
import { getSupabaseServerClient } from "./supabase";

export type SiteArticle = (typeof legacyArticles)[number];
type Row = { slug:string; title:string; summary:string; author:string; published_at:string; category:string; image_url:string; body:string[] };

function convert(row: Row): SiteArticle {
  return { slug:row.slug, title:row.title, summary:row.summary, author:row.author,
    date:new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(new Date(row.published_at)),
    category:row.category, image:row.image_url, body:row.body };
}

export async function getArticles(): Promise<SiteArticle[]> {
  const db=getSupabaseServerClient();
  if(!db) return legacyArticles;
  const [{data,error},{data:hidden}]=await Promise.all([db.from("articles").select("*").eq("is_published",true).order("published_at",{ascending:false}),db.from("hidden_content").select("content_key").eq("content_type","article")]);
  const hiddenSlugs=new Set((hidden||[]).map(x=>x.content_key));
  if(error) return legacyArticles.filter(a=>!hiddenSlugs.has(a.slug));
  const remote=((data||[]) as Row[]).map(convert).filter(a=>!hiddenSlugs.has(a.slug)),slugs=new Set(remote.map(a=>a.slug));
  return [...remote,...legacyArticles.filter(a=>!slugs.has(a.slug)&&!hiddenSlugs.has(a.slug))];
}

export async function getArticle(slug:string) {
  const db=getSupabaseServerClient();
  if(db){const {data}=await db.from("articles").select("*").eq("slug",slug).eq("is_published",true).maybeSingle();if(data)return convert(data as Row)}
  if(db){const{data:hidden}=await db.from("hidden_content").select("id").eq("content_type","article").eq("content_key",slug).maybeSingle();if(hidden)return undefined}
  return legacyArticles.find(a=>a.slug===slug);
}
