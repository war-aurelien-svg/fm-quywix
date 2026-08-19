import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  // In the browser, use the site's same-origin relay. Some VPNs, DNS filters
  // and privacy extensions block direct requests to project.supabase.co.
  const useRelay = typeof window !== "undefined" && process.env.NODE_ENV === "production";
  const browserUrl = useRelay ? `${window.location.origin}/api/supabase` : url;
  if (!client) client = createClient(browserUrl, key);
  return client;
}

export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
}
