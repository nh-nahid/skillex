import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from '@/lib/formatPrice';
import { EnrollCourse } from '@/components/enroll-course';

const CourseCard = ({course}) => {
    return (
        <Link key={course.id} href={`/courses/${course.id}`}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-video">
                  <Image
                    src={`/assets/images/courses/${course?.thumbnail}`}
                    alt={course?.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition">
                    {course.title}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    Learn practical skills to boost your career.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <BookOpen className="w-4" />
                    <span>{course?.modules.length} chapters</span>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <span className="font-semibold text-indigo-400">
                      {formatPrice(course?.price)}
                    </span>

                    <EnrollCourse aslink={true} />

                  </div>
                </div>
              </div>
            </Link>
    );
};

export default CourseCard;