import { TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import React from 'react';

const CourseInstructor = ({course}) => {
    const instructor = course?.instructor;
    const fullName = `${instructor?.firstName} ${instructor?.lastName}`;

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
                  <p className="text-indigo-400 mt-2">{instructor?.designation}</p>
                  <p className="text-slate-400 mt-4 max-w-xl">{instructor?.bio}</p>
                </div>
              </div>
            </div>
          </TabsContent>
    );
};

export default CourseInstructor;