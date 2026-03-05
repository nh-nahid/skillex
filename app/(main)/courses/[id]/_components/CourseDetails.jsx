import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";


import Image from "next/image";
import CourseOverview from "./CourseOverview";
import CourseCurriculum from "./CourseCurriculum";
import CourseInstructor from "./CourseInstructor";

const CourseDetails = ({ course }) => {
  const lastModifiedDate = new Date(course?.modifiedOn).toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
  return (
    <section className="pb-24">
      <div className="container">
        {/* ================= COURSE HEADER ================= */}
        <div className="text-center md:text-left mb-12 mx-20">
          <span className="bg-indigo-500/70 py-1 px-3 rounded-full text-xs font-medium inline-block text-white">
            {course?.category?.title || "Uncategorized"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
            {course?.title}
          </h1>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            {course?.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Image
                className="w-10 h-10 rounded-full object-cover"
                src={course?.instructor?.profilePicture}
                alt={course?.instructor?.firstName}
                height={10}
                width={10}
              />
              <p className="font-bold text-white">
                {course?.instructor?.firstName} {course?.instructor?.lastName}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-indigo-400 font-semibold">Last Updated:</span>
              <span>{lastModifiedDate}</span>
            </div>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-[600px] grid-cols-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-1 mx-auto">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white rounded-lg transition"
            >
              Overview
            </TabsTrigger>

            <TabsTrigger
              value="curriculum"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white rounded-lg transition"
            >
              Curriculum
            </TabsTrigger>

            <TabsTrigger
              value="instructor"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-violet-500 data-[state=active]:text-white rounded-lg transition"
            >
              Instructor
            </TabsTrigger>
          </TabsList>

          <CourseOverview course={course}/>

          <CourseCurriculum course={course} />

          <CourseInstructor course={course}/>
          
        </Tabs>
      </div>
    </section>
  );
};

export default CourseDetails;