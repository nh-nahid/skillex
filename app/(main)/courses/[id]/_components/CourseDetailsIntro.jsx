import { EnrollCourse } from "@/components/enroll-course";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseDetailsIntro = ({ title,category, subtitle, thumbnail }) => {
  // Split title into words
  const words = title?.split(" ");
  const firstWord = words?.[0];
  const restTitle = words?.slice(1).join(" ");

  return (
    <section className="pt-20 pb-24 relative">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <span className="inline-block px-4 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {category}
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            
            {/* First word white */}
            <span className="text-white">
              {firstWord}{" "}
            </span>

            {/* Remaining words gradient */}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {restTitle}
            </span>

          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            
            <EnrollCourse aslink={false} />

            <Link
              href="#"
              className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Watch Intro
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
            <Image
              src={`/assets/images/courses/${thumbnail}`}
              width={1200}
              height={700}
              alt={title}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsIntro;