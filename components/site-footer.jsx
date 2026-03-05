"use client";

import { cn } from "@/lib/utils";

export function SiteFooter({ className }) {
  return (
    <footer
      className={cn(
        "bg-black/40 backdrop-blur-lg border-t border-white/10 py-10",
        className
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
        
        {/* NovaUI Logo Text */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg">
            S
          </div>
          <span className="text-white/90 font-semibold text-lg">Skillex</span>
        </div>

        {/* Footer Links / Text */}
        <p className="text-center text-sm leading-relaxed text-white/70 md:text-left md:max-w-2xl">
          Built by{" "}
          <a
            href="#"
            className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline underline-offset-2"
          >
            Nahid Hossain
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline underline-offset-2"
          >
            Vercel
          </a>
          . Illustrations by{" "}
          <a
            href="https://popsy.co"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline underline-offset-2"
          >
            Popsy
          </a>
          . The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline underline-offset-2"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}