import Hero from "@/components/Hero";
import About from "@/components/About";
import GithubContributions from "@/components/GithubContributions";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16 sm:py-20 selection:bg-zinc-800 selection:text-white">
      <div className="w-full max-w-2xl mx-auto space-y-12 pb-20">
        <Hero />
        <About />
        <GithubContributions />
        <Projects />
        <Experience />
        <Skills />
      </div>
      <Dock />
    </main>
  );
}