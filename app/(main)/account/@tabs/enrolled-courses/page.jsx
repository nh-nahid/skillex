"use client";

// import { CourseProgress } from "@/components/course-progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";

function EnrolledCourses() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((course, idx) => (
        <div
          key={idx}
          className="group transition hover:scale-105 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl shadow-black/30 p-4 h-full"
        >
          {/* Course Thumbnail */}
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image
              src="/assets/images/courses/course_1.png"
              alt={`course ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Course Info */}
          <div className="flex flex-col pt-3">
            <div className="text-lg md:text-base font-medium text-white group-hover:text-indigo-400 line-clamp-2">
              Mastery in Development
            </div>
            <p className="text-xs text-gray-400">Development</p>

            {/* Chapters */}
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-gray-500">
                <BookOpen className="w-4" />
                <span>4 Chapters</span>
              </div>
            </div>

            {/* Stats */}
            <div className="border-b border-white/10 pb-2 mb-2">
              <div className="flex items-center justify-between text-white text-sm md:text-xs">
                <p>Total Modules: 10</p>
                <p>
                  Completed Modules <Badge variant="success">05</Badge>
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 text-white text-sm md:text-xs">
                <p>Total Quizzes: 10</p>
                <p>
                  Quiz Taken <Badge variant="success">10</Badge>
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 text-white text-sm md:text-xs">
                <p>Mark from Quizzes</p>
                <p>50</p>
              </div>
              <div className="flex items-center justify-between mt-2 text-white text-sm md:text-xs">
                <p>Others</p>
                <p>50</p>
              </div>
            </div>

            {/* Total Marks */}
            <div className="flex items-center justify-between mb-4 text-white text-sm md:text-xs">
              <p>Total Marks</p>
              <p>100</p>
            </div>

            {/* Progress Bar */}
            {/* <CourseProgress
              size="sm"
              value={80}
              variant={110 === 100 ? "success" : ""}
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EnrolledCourses;