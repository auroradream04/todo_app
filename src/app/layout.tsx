// Components
import Header from "./components/globals/Header";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";

// Utility
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}