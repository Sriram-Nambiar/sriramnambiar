import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  CodeIcon,
  GithubIcon,
  MailIcon,
} from "./Icons";

const navItems = [
  { label: "Home", href: "#hero", icon: HomeIcon },
  { label: "About", href: "#about", icon: UserIcon },
  { label: "Skills", href: "#skills", icon: CodeIcon },
  { label: "Projects", href: "#projects", icon: FolderIcon },
];

const socialItems = [
  {
    label: "GitHub",
    href: "https://github.com/Sriram-Nambiar",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Contact",
    href: "mailto:contact@sriramnambiar.dev",
    icon: MailIcon,
    external: true,
  },
];

export default function Dock() {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-2 rounded-full border border-zinc-800 bg-zinc-950/85 px-3 py-1.5 shadow-2xl backdrop-blur-md"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            className="flex items-center justify-center rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-white"
          >
            <Icon className="size-4 sm:size-4.5" />
          </a>
        );
      })}

      <div className="h-4 w-px bg-zinc-800 mx-1" />

      {socialItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.label}
            title={item.label}
            className="flex items-center justify-center rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-white"
          >
            <Icon className="size-4 sm:size-4.5" />
          </a>
        );
      })}
    </nav>
  );
}
