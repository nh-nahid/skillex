import { SectionTitle } from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";


const RelatedCourses = ({courses}) => {
    return (
        <section className="pb-24">
        <div className="container">
          <SectionTitle className="mb-10 text-white">
            Related Courses
          </SectionTitle>

          <Carousel>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent>
              {courses.map((item) => (
                <CarouselItem
                  key={item}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Link href="#">
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition hover:shadow-xl hover:shadow-indigo-500/10">
                      <div className="relative aspect-video">
                        <Image
                          src="/assets/images/courses/course_1.png"
                          alt="Course"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">
                          Reactive Accelerator
                        </h4>

                        <p className="text-slate-400 text-sm mt-2">
                          Development
                        </p>

                        <div className="mt-4">

                            {/* progress */}
                            
                        </div>

                        <div className="flex items-center justify-between mt-5">
                          <p className="text-white font-semibold">
                            {formatPrice(49)}
                          </p>

                          <Button
                            variant="ghost"
                            className="text-indigo-400 text-xs gap-1"
                          >
                            Enroll
                            <ArrowRight className="w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    );
};

export default RelatedCourses;