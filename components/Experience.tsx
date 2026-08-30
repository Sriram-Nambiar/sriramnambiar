interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Handshake AI",
    role: "Software Dev Evaluation & Terminal Expert",
    period: "2025 - Present",
    tags: ["Remote", "Contract", "LLM Evaluation", "Terminal-Bench"],
    description:
      "Architecting and developing challenging evaluation tasks and terminal-based coding benchmarks to evaluate, test, and optimize Large Language Models (LLMs) against the Terminal-Bench benchmark and real-world developer workflows.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-xl font-bold text-white">Work Experience</h2>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            {/* Handshake Lime Green Logo */}
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d2f836] shadow-sm select-none">
              <span className="font-black italic text-lg text-black tracking-tighter">
                H
              </span>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-white">
                    {exp.company}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-zinc-500 tabular-nums">
                  {exp.period}
                </span>
              </div>

              <div className="text-xs sm:text-sm font-medium text-zinc-300">
                {exp.role}
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
