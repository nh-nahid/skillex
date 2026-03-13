"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import Menu from "./component/account-menu";

function Layout({ tabs }) {
  return (
    <section className="relative pb-16 bg-gradient-to-br from-black via-slate-900 to-black min-h-screen">
      
      {/* Background glow blobs */}
      <div className="absolute top-[-200px] left-[-200px] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="container relative mt-4">
        <div className="lg:flex gap-6">

          {/* Sidebar */}
          <div className="lg:w-1/4 md:px-3 mt-8">
            <div className="relative">
              <div className="p-6 rounded-2xl shadow-xl shadow-black/30 bg-black/40 backdrop-blur-xl border border-white/10">
                {/* Profile Picture */}
                <div className="profile-pic text-center mb-5">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    className="hidden"
                  />
                  <div className="relative size-28 mx-auto">
                    <Image
                      src="/assets/images/profile.jpg"
                      className="rounded-full shadow-lg ring-4 ring-slate-800"
                      id="profile-banner"
                      alt="profile-image"
                      width={112}
                      height={112}
                    />
                    <label
                      className="absolute inset-0 cursor-pointer"
                      htmlFor="pro-img"
                    />
                  </div>
                  <div className="mt-4">
                    <h5 className="text-lg font-semibold text-white">
                      Jenny Jimenez
                    </h5>
                    <p className="text-gray-400">jennyhot@hotmail.com</p>
                  </div>
                </div>

                {/* Menu */}
                <div className="border-t border-white/10">
                  <Menu />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 md:px-3 mt-8 lg:mt-0 space-y-6">
            {tabs}

            {/* Example of personal details card */}
            {/* You can uncomment and style your forms similarly */}
            {/* 
            <div className="p-6 rounded-2xl shadow-xl shadow-black/30 bg-black/40 backdrop-blur-xl border border-white/10">
              <h5 className="text-lg font-semibold text-white mb-4">
                Personal Details
              </h5>
              <form className="grid gap-5">
                <div className="grid lg:grid-cols-2 gap-5">
                  <div>
                    <Label className="mb-2 block text-gray-300">
                      First Name <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                      required
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-gray-300">
                      Last Name <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;