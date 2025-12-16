// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Senter for Midlertidige Løsninger",
    template: "%s – SML",
  },
  description:
    "Midlertidig etablert · Videreført ved behov",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
