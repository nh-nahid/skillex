import { TabsContent } from '@/components/ui/tabs';
import { getCourseDetailsByInstructor } from '@/queries/courses';
import { MessageSquare, Presentation, Star, UsersRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CourseInstructor = async ({ course }) => {
  const instructor = course?.instructor;
  const fullName = `${instructor?.firstName} ${instructor?.lastName}`;
  const courseDetailsByInstructor = await getCourseDetailsByInstructor(instructor?._id.toString());
  
  return (
    <TabsContent value="instructor" className="mt-12">
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-lg shadow-indigo-500/10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src={instructor?.profilePicture}
            alt={fullName}
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />

          <div>
            <h4 className="text-3xl font-bold text-white">
              {fullName}
            </h4>
            <p className="text-indigo-400 mt-2 mb-4">{instructor?.designation}</p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <Presentation className="text-gray-400" size={20} />
                <div className="text-sm">
                  {courseDetailsByInstructor?.courses} Course(s)
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <UsersRound className="text-gray-400" size={20} />
                <div className="text-sm">
                  {courseDetailsByInstructor?.enrollments} Students Learned
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <MessageSquare className="text-gray-400" size={20} />
                <div className="text-sm">
                  {courseDetailsByInstructor?.reviews} Reviews
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <Star className="text-yellow-400" size={20} />
                <div className="text-sm">
                  {courseDetailsByInstructor?.ratings} Average Rating
                </div>
              </li>
            </ul>
            <p className="text-slate-400 mt-4 max-w-xl">{instructor?.bio}</p>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default CourseInstructor;