import { TabsContent } from '@/components/ui/tabs';
import { CheckCheck } from 'lucide-react';
import React from 'react';

const CourseOverview = ({course}) => {
    return (
        <TabsContent value="overview" className="mt-12 mx-20">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Course Description
              </h3>

              <p className="text-slate-400">{course?.description}</p>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                { course?.learning && course?.learning.map((learning, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCheck className="text-indigo-400 w-5 h-5 mt-1" />
                    <p className="text-slate-400">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
    );
};

export default CourseOverview;