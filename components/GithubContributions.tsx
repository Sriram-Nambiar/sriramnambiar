"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contributions" className="space-y-3">
      <div className="w-full no-scrollbar overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <div className="w-fit mx-auto">
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
        </div>
      </div>
    </section>
  );
}