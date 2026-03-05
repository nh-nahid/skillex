import mongoose from "mongoose";
import { Testimonial } from "@/model/testimonial-model";
import { replaceMongoIdInArray } from "@/lib/convertData";

export async function getTestimonialsForCourse(courseId) {
    const objectId =
        typeof courseId === "string" ? new mongoose.Types.ObjectId(courseId) : courseId;

    const testimonials = await Testimonial.find({ courseId: objectId }).lean();

    return replaceMongoIdInArray(testimonials);
}