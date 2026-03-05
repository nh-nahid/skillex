import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SearchCourse from "./_components/SearchCourse";
import SortCourse from "./_components/SortCourse";
import FilterCourseMobile from "./_components/FilterCourseMobile";
import ActiveFilters from "./_components/ActiveFilters";
import FilterCourse from "./_components/FilterCourse";
import { get } from "mongoose";
import { getCourseList } from "@/queries/courses";
import CourseCard from "./_components/CourseCard";


const CoursesPage = async () => {
  const courses = await getCourseList()
  return (
    <section className="relative min-h-screen text-white">
      <div className="relative container py-16 space-y-8 z-10">
        {/* ================= Search & Filters ================= */}
        <div className="flex flex-col lg:flex-row items-baseline justify-between border-b border-white/10 pb-6 gap-4">
          <SearchCourse />

          <div className="flex flex-wrap items-center gap-2 justify-end w-full lg:w-auto">
            <SortCourse />
            <FilterCourseMobile />
          </div>
        </div>

        {/* ================= Active Filters ================= */}
        <ActiveFilters
          filter={{
            categories: ["development"],
            price: ["free"],
            sort: "",
          }}
        />

        {/* ================= Courses Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar filters for desktop */}
          <FilterCourse />

          {/* Courses list */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              return (
                <CourseCard key={course.id} course={course} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;