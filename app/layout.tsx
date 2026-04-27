import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School AI",
  description: "School ERP for Doon International School Purnea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
