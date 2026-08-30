"use client";

import React, { useState, useEffect } from "react";
import Dock from "@/components/Dock";
import { SendIcon } from "@/components/Icons";

interface WallEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}

const initialEntries: WallEntry[] = [
  {
    id: "1",
    name: "Ayush Mishra",
    message: "Fabulous work! Really clean UI, looking forward to collaborating someday 🚀",
    date: "2 months ago",
  },
  {
    id: "2",
    name: "DevCommunity",
    message: "Love the minimal dark aesthetic and the systems projects. Keep building!",
    date: "4 months ago",
  },
  {
    id: "3",
    name: "Sneha Patel",
    message: "Awesome portfolio Sriram! Very clean typography and smooth dock animations.",
    date: "5 months ago",
  },
  {
    id: "4",
    name: "Arjun V.",
    message: "Great work Sriram! Awesome to see another builder shipping cool stuff ⚡",
    date: "6 months ago",
  },
];

export default function CommunityWallPage() {
  const [entries, setEntries] = useState<WallEntry[]>(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sriram_wall_entries");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEntries(parsed);
        }
      }
    } catch {
      // Fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newEntry: WallEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: "Just now",
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);

    try {
      localStorage.setItem("sriram_wall_entries", JSON.stringify(updated));
    } catch {
      // Ignore
    }

    setName("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-16 sm:py-20 selection:bg-zinc-800 selection:text-white">
      <div className="w-full max-w-2xl mx-auto space-y-10 pb-24">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-block rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
            Community Wall
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Leave a Note on the Wall
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
            Drop a note, share your thoughts, or just say hello! Anyone can leave a message below.
          </p>
        </div>

        {/* Input Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3.5 backdrop-blur-sm"
        >
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-zinc-400">
              Your Name / Handle
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="e.g. Sriram or @handle"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-medium text-zinc-400">
              Your Note
            </label>
            <textarea
              id="message"
              required
              rows={3}
              placeholder="Write your note, feedback, or greeting here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 resize-none"
            />
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !message.trim()}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendIcon className="size-3.5" />
              Post Note
            </button>
          </div>
        </form>

        {/* Entries List */}
        <div className="space-y-4">
          <div className="text-xs font-medium text-zinc-500">
            {entries.length} {entries.length === 1 ? "note" : "notes"}
          </div>

          <div className="space-y-4 divide-y divide-zinc-900">
            {entries.map((entry) => (
              <div key={entry.id} className="pt-4 first:pt-0 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-white">
                    {entry.name}
                  </span>
                  <span className="text-xs text-zinc-500 tabular-nums">
                    {entry.date}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed text-pretty">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dock />
    </main>
  );
}
