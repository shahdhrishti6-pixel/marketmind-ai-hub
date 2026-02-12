import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { email, event, display_name } = await req.json();
    const GOOGLE_SHEET_WEBHOOK_URL = Deno.env.get("GOOGLE_SHEET_WEBHOOK_URL");
    if (!GOOGLE_SHEET_WEBHOOK_URL) throw new Error("GOOGLE_SHEET_WEBHOOK_URL is not configured");

    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        event,
        timestamp: new Date().toISOString(),
        display_name: display_name || "",
      }),
    });

    const result = await response.text();
    console.log("Sheet response:", response.status, result);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("sync-to-sheet error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
