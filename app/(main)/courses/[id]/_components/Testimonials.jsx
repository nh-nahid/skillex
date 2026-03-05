import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";
import { StarRating } from "@/components/star-rating";

const Testimonials = ({ testimonials }) => {

  return (
    <section className="pb-24 px-5">
      <div className="container ">
        <SectionTitle className="mb-10 mx-20 text-white">
          Testimonials
        </SectionTitle>

        <Carousel className="mx-20">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-lg hover:shadow-indigo-500/10 transition">
                  <div className="flex items-center gap-8">
                    <Image
                      alt=""
                      src={testimonial?.user?.profilePicture}
                      width={56} 
                      height={56} 
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div className="flex justify-center gap-0.5 text-yellow-600">
                      <StarRating rating={testimonial?.rating} />
                    </div>
                  </div>
                  <p className="mt-4 text-white font-semibold">
                    {testimonial?.user?.firstName} {' '} {testimonial?.user?.lastName}
                  </p>

                  <p className="text-slate-400">
                    {testimonial?.content}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;