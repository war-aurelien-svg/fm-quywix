import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const forwardedRequestHeaders = [
  "authorization",
  "content-type",
  "prefer",
  "range",
  "x-client-info",
  "x-supabase-api-version",
];

async function relay(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ message: "Supabase n'est pas configuré." }, { status: 503 });
  }

  const { path } = await context.params;
  const target = new URL(`${supabaseUrl.replace(/\/$/, "")}/${path.join("/")}`);
  target.search = request.nextUrl.search;

  const headers = new Headers({ apikey: supabaseKey });
  for (const name of forwardedRequestHeaders) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  let response: Response;
  try {
    response = await fetch(target, {
      method: request.method,
      headers,
      body: hasBody ? await request.arrayBuffer() : undefined,
      cache: "no-store",
    });
  } catch (error) {
    const cause = error instanceof Error && error.cause && typeof error.cause === "object"
      ? (error.cause as { code?: string }).code
      : undefined;
    return NextResponse.json(
      {
        message: "Le serveur du site ne parvient pas à joindre Supabase.",
        reason: error instanceof Error ? error.message : "Erreur réseau inconnue",
        code: cause || null,
      },
      { status: 502 },
    );
  }

  const responseHeaders = new Headers();
  for (const name of ["content-type", "content-range", "range", "location", "x-supabase-api-version"]) {
    const value = response.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }

  return new NextResponse(response.body, { status: response.status, headers: responseHeaders });
}

export const GET = relay;
export const POST = relay;
export const PUT = relay;
export const PATCH = relay;
export const DELETE = relay;
