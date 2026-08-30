"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <section id="contributions" className="space-y-3">
      <div className="w-full overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <div className="min-w-[650px] flex justify-center">
          <GitHubCalendar
            username="Sriram-Nambiar"
            colorScheme="dark"
            blockSize={11}
            blockMargin={3}
            fontSize={12}
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </div>
    </section>
  );
}