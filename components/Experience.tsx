import Image from "next/image";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Kiwix",
    role: "Open Source Contributor",
    period: "2026 - Present",
    tags: ["Remote", "C++", "Python", "Open Source"],
    description:
      "Contributing to Kiwix and openZIM open-source projects, working on backend development, bug fixes, feature enhancements, and test coverage across Python-based tools and services.",
    logo: "/kiwix-logo.png",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-xl font-bold text-white">
        Work Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            {/* Company Logo */}
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
              <Image
  src="/image.png"
  alt="Kiwix logo"
  width={48}
  height={48}
  className="h-full w-full object-contain"
/>
            </div>

            {/* Experience Details */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
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

                <span className="text-xs tabular-nums text-zinc-500">
                  {exp.period}
                </span>
              </div>

              <div className="text-xs font-medium text-zinc-300 sm:text-sm">
                {exp.role}
              </div>

              <p className="text-xs leading-relaxed text-pretty text-zinc-400 sm:text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
