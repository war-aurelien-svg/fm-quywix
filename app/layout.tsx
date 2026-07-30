import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = { title: "FM QuywiX — Votre carrière, votre histoire", description: "Le réseau social premium des carrières Football Manager." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
