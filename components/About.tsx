
export default function About() {
  return (
    <section id="about" className="space-y-3">
      <h2 className="text-xl font-bold text-white">About</h2>

      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed text-pretty">
        Hey, I&apos;m Sriram an{" "}
        <a
          href="https://github.com/Sriram-Nambiar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors"
        >
          open-source contributor
        </a>{" "}
        who enjoys building software and contributing to projects that solve
        real-world problems. I actively contribute to projects under{" "}
        <span className="font-medium text-zinc-200">Kiwix</span>,{" "}
        <span className="font-medium text-zinc-200">openZIM</span>, and{" "}
        <span className="font-medium text-zinc-200">Backstage</span>,
        working on bug fixes, feature improvements, and making software more
        reliable. I enjoy working with{" "}
        <span className="font-medium text-zinc-200">Next.js</span>,{" "}
        <span className="font-medium text-zinc-200">TypeScript</span>,{" "}
        <span className="font-medium text-zinc-200">JavaScript</span>, and{" "}
        <span className="font-medium text-zinc-200">Python</span>, and I&apos;m
        always exploring new technologies and continuously learning to improve
        my skills.
      </p>
    </section>
  );
}
