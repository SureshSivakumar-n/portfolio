"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import GlowCard from "../../components/GlowCard";
import Reveal from "../../components/Reveal";
import MagneticButton from "../../components/MagneticButton";
import { profile } from "../../lib/data";

// inline copy button
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {}
      }}
      className="px-3 py-1 rounded-lg text-sm border border-zinc-700 hover:border-brand-500 hover:text-brand-500 transition-colors"
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    profile.location
  )}`;

  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        Contact
      </motion.h1>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: quick contact cards */}
        <div className="space-y-6">
          {/* Email */}
          <Reveal>
            <GlowCard className="rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-brand-500">Email</h2>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="underline-fx text-lg break-all"
                >
                  {profile.email}
                </a>
                <CopyButton text={profile.email} />
              </div>
              <p className="text-sm text-zinc-400 mt-3">
                I usually reply within a day.
              </p>
            </GlowCard>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.05}>
            <GlowCard className="rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-brand-500">Phone</h2>
              <div className="flex flex-wrap items-center gap-3">
                <a href="tel:+353894315976" className="underline-fx text-lg">
                  +353 089 431 5976
                </a>
                <CopyButton text="+353894315976" />
              </div>
            </GlowCard>
          </Reveal>

          {/* Location */}
          <Reveal delay={0.1}>
            <GlowCard className="rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-brand-500">Location</h2>
              <p className="text-lg">
                <Link
                  href={mapsUrl}
                  target="_blank"
                  className="underline-fx"
                  title="Open in Google Maps"
                >
                  {profile.location}
                </Link>
              </p>
            </GlowCard>
          </Reveal>

          {/* Social */}
          <Reveal delay={0.15}>
            <GlowCard className="rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-brand-500">Social</h2>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href={profile.linkedin}>LinkedIn</MagneticButton>
                <MagneticButton href={profile.github} className="bg-zinc-800 hover:bg-zinc-700">
                  GitHub
                </MagneticButton>
              </div>
            </GlowCard>
          </Reveal>
        </div>

        {/* Right: modern message form */}
        <Reveal>
          <GlowCard className="rounded-2xl p-6 h-full">
            <h2 className="text-xl font-semibold mb-4 text-brand-500">Send a message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const subject = encodeURIComponent(String(fd.get("subject") || ""));
                const body = encodeURIComponent(
                  `Name: ${fd.get("name")}\n\n${fd.get("message")}`
                );
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-brand-500 focus:outline-none px-4 py-3"
                />
                <input
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-brand-500 focus:outline-none px-4 py-3"
                />
              </div>
              <textarea
                name="message"
                required
                placeholder="Your message…"
                rows={6}
                className="w-full rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-brand-500 focus:outline-none px-4 py-3 resize-y"
              />
              <div className="flex items-center justify-end">
                <MagneticButton className="px-6 py-3" href="#">
                  Send
                </MagneticButton>
              </div>
            </form>
          </GlowCard>
        </Reveal>
      </div>
    </div>
  );
}