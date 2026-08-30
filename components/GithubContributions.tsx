"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function formatDateDDMMYYYY(dateStr: string): string {
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  }
  return dateStr;
}

export default function GithubContributions() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contributions" className="space-y-3">
      <div className="w-full no-scrollbar overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
        <div className="w-fit mx-auto min-h-[135px] flex items-center justify-center">
          {mounted ? (
            <>
              <GitHubCalendar
                username="Sriram-Nambiar"
                year={currentYear}
                colorScheme="dark"
                blockSize={10}
                blockMargin={3}
                fontSize={12}
                labels={{
                  totalCount: `{{count}} contributions in ${currentYear}`,
                }}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    "data-tooltip-id": "github-tooltip",
                    "data-tooltip-content": `${activity.count} contribution${
                      activity.count === 1 ? "" : "s"
                    } on ${formatDateDDMMYYYY(activity.date)}`,
                  })
                }
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
              />
              <Tooltip
                id="github-tooltip"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#09090b",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                  zIndex: 50,
                }}
              />
            </>
          ) : (
            <div className="h-[110px] flex items-center justify-center text-xs text-zinc-500">
              Loading contributions...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}