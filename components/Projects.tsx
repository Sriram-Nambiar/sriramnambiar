import { GithubIcon, ExternalLinkIcon } from "./Icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "ArchFlow",
    description:
      "Interactive architecture diagramming and system workflow builder designed for developers to map out microservices, schemas, and data pipelines.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Canvas API"],
    githubUrl: "https://github.com/Sriram-Nambiar/Perspective",
  },
  {
    title: "CodeCrafters",
    description:
      "Deep-dive implementations of core software systems from scratch, including custom Redis server, Git version control, and HTTP parsing protocols.",
    tags: ["TypeScript", "Node.js", "Systems", "Networking"],
    githubUrl: "https://github.com/Sriram-Nambiar",
  },
  {
    title: "Forest Productivity",
    description:
      "Gamified deep work workspace with focus intervals, habit tracking, and task analytics designed to eliminate distractions and boost flow state.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Productivity"],
    githubUrl: "https://github.com/Sriram-Nambiar",
  },
  {
    title: "DevBench",
    description:
      "Developer benchmarking and workflow evaluation suite to test system performance, command latency, and identify build pipeline bottlenecks.",
    tags: ["TypeScript", "Node.js", "CLI", "Benchmarking"],
    githubUrl: "https://github.com/Sriram-Nambiar/DevBench",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-white">Projects</h2>
        <p className="text-sm text-zinc-400">
          A selection of projects exploring web apps, developer tools, and systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            <div className="space-y-2.5">
              <h3 className="text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
                {project.description}
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-1">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-white"
                  >
                    <GithubIcon className="size-3.5" />
                    Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-white"
                  >
                    <ExternalLinkIcon className="size-3.5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}