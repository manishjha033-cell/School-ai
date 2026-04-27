import Link from "next/link";
import { Logo } from "@/components/layout/logo";
const items = [["Dashboard","/dashboard"],["Students","/students"],["Marks","/marks"],["Attendance","/attendance"],["Reports","/reports"],["Notices","/notices"],["AI Tools","/ai-tools"]];
export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Logo />
        <div className="mt-12 max-w-3xl">
          <p className="inline-flex rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1 text-sm text-gold-300">Premium School ERP + AI Assistant</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">Run school operations, reports, and academic insights from one platform.</h1>
          <p className="mt-4 text-lg text-slate-400">Built for Doon International School Purnea with dashboards for teachers, admin, and principal.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map(([name, href]) => (
            <Link key={name} href={href} className="rounded-2xl border border-white/10 bg-panel p-5 transition hover:-translate-y-1 hover:border-gold-400/40">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="mt-2 text-sm text-slate-400">Open {name.toLowerCase()} module</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
