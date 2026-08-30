"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contributions" className="space-y-3">
      <div className="w-full no-scrollbar overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <div className="w-fit mx-auto min-h-[135px] flex items-center justify-center">
          {mounted ? (
            <GitHubCalendar
              username="Sriram-Nambiar"
              year={currentYear}
              colorScheme="dark"
              blockSize={10}
              blockMargin={3}
              fontSize={12}
              labels={{
                totalCount: `{{count}} contributions in ${currentYear}`,
              }}
              tooltips={{
                activity: {
                  text: (activity) =>
                    `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${activity.date}`,
                },
              }}
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          ) : (
            <div className="h-[110px] flex items-center justify-center text-xs text-zinc-500">
              Loading contributions...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}