import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google"; // <--- import font
import ScrollProgressBar from "../components/ScrollProgressBar";
import Spotlight from "../components/Spotlight";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { profile } from "../lib/data";

// Configure the font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // adjust weights you need
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: `${profile.name} • ${profile.role}`,
  description: profile.blurb,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ScrollProgressBar />
        <Spotlight />
        <Header />
        <main className="container py-10 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}