import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArthSight",
  description: "Intelligent NAV tracking and fund insights platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}