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
          full-stack developer
        </a>{" "}
        passionate about crafting fast web applications, developer tooling, and systems programming. I taught myself to code to bring ideas to life, and now I spend most of my time building with{" "}
        <span className="font-medium text-zinc-200">Next.js</span>,{" "}
        <span className="font-medium text-zinc-200">TypeScript</span>, and{" "}
        <span className="font-medium text-zinc-200">Node.js</span>. Currently, I evaluate LLM reasoning and terminal environments at{" "}
        <span className="font-medium text-zinc-200">Handshake AI</span>, rebuild core protocols from scratch, and design tools that elevate developer workflows. Outside of building products, I enjoy solving algorithmic problems, diving into system design, and exploring open-source software.
      </p>
    </section>
  );
}
