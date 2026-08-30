"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  BriefcaseIcon,
  CodeIcon,
  BookOpenIcon,
  GithubIcon,
  MailIcon,
} from "./Icons";

interface DockItemProps {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  mouseX: number | null;
}

function DockItem({
  label,
  href,
  icon: Icon,
  external,
  mouseX,
}: DockItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  let scale = 1;
  let translateY = 0;

  if (mouseX !== null && ref.current) {
    const rect = ref.current.getBoundingClientRect();
    const itemCenterX = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - itemCenterX);
    const maxDistance = 90;

    if (distance < maxDistance) {
      const factor = 1 - distance / maxDistance;
      scale = 1 + factor * 0.45;
      translateY = -factor * 6;
    }
  }

  const linkProps = {
    ref,
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
    "aria-label": label,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      transition: "transform 0.12s cubic-bezier(0.2, 0, 0, 1)",
      transformOrigin: "bottom center",
    },
    className:
      "flex items-center justify-center rounded-full p-2 text-zinc-400 hover:bg-zinc-800/80 hover:text-white",
  };

  return (
    <div className="relative flex items-center justify-center">
      {isHovered && (
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-zinc-800 bg-zinc-900/95 px-2 py-0.5 text-[11px] font-medium text-white shadow-lg backdrop-blur-sm whitespace-nowrap"
        >
          {label}
        </span>
      )}

      {external ? (
        <a {...linkProps}>
          <Icon className="size-4 sm:size-4.5" />
        </a>
      ) : (
        <Link {...linkProps}>
          <Icon className="size-4 sm:size-4.5" />
        </Link>
      )}
    </div>
  );
}

const navItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Projects", href: "/#projects", icon: FolderIcon },
  { label: "Experience", href: "/#experience", icon: BriefcaseIcon },
  { label: "About", href: "/#about", icon: UserIcon },
  { label: "Skills", href: "/#skills", icon: CodeIcon },
  { label: "Community", href: "/wall", icon: BookOpenIcon },
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
  const [mouseX, setMouseX] = useState<number | null>(null);

  return (
    <nav
      aria-label="Quick navigation"
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(null)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1.5 shadow-2xl backdrop-blur-md"
    >
      {navItems.map((item) => (
        <DockItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          mouseX={mouseX}
        />
      ))}

      <div className="h-4 w-px bg-zinc-800 mx-1" />

      {socialItems.map((item) => (
        <DockItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          external={item.external}
          mouseX={mouseX}
        />
      ))}
    </nav>
  );
}
