import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "School AI",
  description: "School ERP + AI Assistant for Doon International School Purnea"
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
