import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-between gap-4">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Hi, I&apos;m Sriram.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed">
          Full-stack developer building modern web applications, developer tools, and scalable systems.
        </p>
      </div>

      <div className="relative shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/221679053?v=4"
          alt="Sriram Nambiar"
          width={112}
          height={112}
          priority
          className="size-24 sm:size-28 rounded-full border-2 border-zinc-800 object-cover"
        />
      </div>
    </section>
  );
}