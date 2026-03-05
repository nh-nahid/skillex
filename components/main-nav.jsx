"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { MobileNav } from "@/components/mobile-nav";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { X, Menu } from "lucide-react";

export function MainNav({ items, children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="flex gap-6 lg:gap-10 items-center">
        {/* Desktop Nav Links */}
        {items?.length && (
          <nav className="hidden lg:flex gap-6">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "text-white/80 hover:text-white transition-colors font-medium text-lg sm:text-sm",
                  item.disabled && "cursor-not-allowed opacity-50"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu */}
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>

      <nav className="flex items-center gap-3">
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "px-4 text-white/90 hover:text-white")}
          >
            Login
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="gradient">
                Register
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 mt-4 bg-slate-900 border border-white/10 backdrop-blur-md">
              <DropdownMenuItem asChild>
                <Link href="#">Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Instructor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Avatar Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56 mt-4 bg-slate-900 border border-white/10 backdrop-blur-md">
            <DropdownMenuItem asChild>
              <Link href="account">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="account/enrolled-courses">My Courses</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">Certificates</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Toggle */}
        <button
          className="flex items-center space-x-2 lg:hidden text-white/90 hover:text-white transition"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
    </>
  );
}