import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
export default function SettingsPage() {
  return (
    <AppShell title="Settings" subtitle="School profile, role access, Supabase setup, and deployment configuration">
      <section className="grid gap-4 xl:grid-cols-2">
        <Card className="p-5"><h2 className="text-lg font-semibold">School Details</h2><div className="mt-4 grid gap-4 text-sm text-slate-300"><input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3" defaultValue="Doon International School Purnea" /><input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3" defaultValue="Purnea, Bihar, India" /></div></Card>
        <Card className="p-5"><h2 className="text-lg font-semibold">Supabase & Vercel</h2><ul className="mt-4 space-y-3 text-sm text-slate-400"><li>Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.</li><li>Run SQL schema from `supabase/schema.sql`.</li><li>Deploy to Vercel and configure environment variables.</li></ul></Card>
      </section>
    </AppShell>
  );
}
