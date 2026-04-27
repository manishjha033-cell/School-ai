# School AI

Production-ready School ERP + AI Assistant for Doon International School, Purnea.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL + Storage
- Recharts
- Vercel-ready

## Features
- Role-based dashboards for Teacher, Admin, Principal
- Students, Marks, Attendance, Reports, Notices, AI Tools
- Sample data fallback with Supabase integration layer
- Mobile-first responsive UI
- Protected routes middleware

## Setup
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`
3. Add Supabase credentials
4. Run: `npm run dev`

## Supabase schema
Use the SQL in `supabase/schema.sql` and add RLS policies as required.
