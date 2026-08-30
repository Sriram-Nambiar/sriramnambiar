const skillCategories = [
  {
    title: "Web / Full-Stack",
    skills: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "Python",
      "C++",
      "System Design",
      "Redis",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux",
      "Vercel",
      "Postman",
      "VS Code",
      "Turborepo",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-xl font-bold text-white">Skills</h2>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
