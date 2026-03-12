"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button, buttonVariants } from "./ui/button";

export function MobileNav({ items, children }) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 lg:hidden",
        "bg-black/70 backdrop-blur-lg animate-in slide-in-from-bottom-80"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-2xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-black/90 p-6 text-white shadow-xl border border-white/10">
        
        {/* Mobile Nav Links */}
        <nav className="grid grid-flow-row auto-rows-max gap-2 text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-lg p-2 font-medium transition-all hover:bg-white/10 hover:translate-x-2",
                item.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Login & Register Buttons */}
        <div className="flex items-center gap-3 mt-4">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "sm", variant: "ghost" }),
              "w-full text-white/90 hover:text-white hover:bg-white/10"
            )}
          >
            Login
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="gradient" className="w-full">
                Register
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-50 mt-4 bg-slate-900 border border-white/10 backdrop-blur-md"
            >
              <DropdownMenuItem asChild>
                <Link href="/register/student" className="text-white  cursor-pointer">Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register/instructor" className="text-white cursor-pointer">Instructor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {children}
      </div>
    </div>
  );
}