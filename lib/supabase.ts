import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

function cleanSupabaseUrl(value: string) {
  return value.match(/https:\/\/[a-z0-9]+\.supabase\.co/i)?.[0] || value.trim();
}

function cleanSupabaseKey(value: string) {
  return value.match(/sb_publishable_[A-Za-z0-9_-]+/)?.[0]
    || value.match(/eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/)?.[0]
    || value.trim();
}

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  // In the browser, use the site's same-origin relay. Some VPNs, DNS filters
  // and privacy extensions block direct requests to project.supabase.co.
  const useRelay = typeof window !== "undefined" && process.env.NODE_ENV === "production";
  const browserUrl = useRelay ? `${window.location.origin}/api/supabase` : cleanSupabaseUrl(url);
  if (!client) client = createClient(browserUrl, cleanSupabaseKey(key));
  return client;
}

export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? createClient(cleanSupabaseUrl(url), cleanSupabaseKey(key), { auth: { persistSession: false } }) : null;
}
