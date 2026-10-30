
export default function About() {
  return (
    <section id="about" className="space-y-3">
      <h2 className="text-xl font-bold text-white">About</h2>

      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed text-pretty">
        I&apos;m Sriram, a{" "}
        <a
          href="https://github.com/Sriram-Nambiar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors"
        >
          full-stack developer and open-source contributor
        </a>{" "}
        passionate about building web applications, developer tools, and reliable software. I contribute to projects under{" "}
        <span className="font-medium text-zinc-200">Kiwix</span> and{" "}
        <span className="font-medium text-zinc-200">openZIM</span>,
        working on bug fixes, feature development, backend improvements, and testing. I enjoy building with{" "}
        <span className="font-medium text-zinc-200">Next.js</span>,{" "}
        <span className="font-medium text-zinc-200">TypeScript</span>, and{" "}
        <span className="font-medium text-zinc-200">Python</span>.
        Outside of coding, I enjoy solving algorithmic problems, exploring systems programming, and contributing to open-source software.
      </p>
    </section>
  );
}
