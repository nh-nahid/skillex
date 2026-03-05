import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { getCategories } from "@/queries/categories";
import { getLatestCourses } from "@/queries/courses";
import { BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "./courses/_components/CourseCard";

const HomePage = async () => {
  const courses = await getLatestCourses(8);
  const categories = await getCategories();
  
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="container max-w-4xl space-y-6 animate-fadeIn">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md">
            🚀 Start Your Learning Journey
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Master Skills{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              for the Future
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unlock your potential with expertly crafted courses in tech, business, design, and more.
          </p>

          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <Link href="/courses">
              <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform"
            >
              Browse Courses
            </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white/30  text-black hover:bg-indigo-500/10 hover:scale-105 transition-all hover:text-white"
            >
              Become an Instructor
            </Button>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="container py-16 space-y-10">
        <div className="flex items-center justify-between">
          <SectionTitle>Top Categories</SectionTitle>
          <Link
            href={"/categories"}
            className="flex items-center gap-2 text-sm hover:text-indigo-400 transition"
          >
            View All <ArrowRight className="w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 transition duration-500 hover:scale-105 hover:border-indigo-500/40"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-20 w-20">
                  <Image
                    src={`/assets/images/categories/${category.thumbnail}`}
                    alt={category.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-indigo-400 transition">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="container py-16 space-y-10">
        <div className="flex items-center justify-between">
          <SectionTitle>Featured Courses</SectionTitle>
          <Link
            href={`/courses`}
            className="flex items-center gap-2 text-sm hover:text-indigo-400 transition"
          >
            See All <ArrowRight className="w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => {
            return(
            <CourseCard key={course.id} course={course} />

            )
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;