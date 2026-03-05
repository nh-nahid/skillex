import { Course } from "@/model/course-model";
import { Category } from "@/model/category-model";
import { User } from "@/model/user-model";
import { Testimonial } from "@/model/testimonial-model";
import { Module } from "@/model/module.model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";

export async function getLatestCourses(limit = 8) {
    const courses = await Course.find({})
        .sort({ createdAt: -1 }) 
        .limit(limit)             // Limit to 8 courses
        .select(["title", "subtitle", "thumbnail", "modules", "price", "category", "instructor"])
        .populate({
            path: "category",
            model: Category
        })
        .populate({
            path: "instructor",
            model: User
        })
        .populate({
            path: "testimonials",
            model: Testimonial
        })
        .populate({
            path: "modules",
            model: Module
        })
        .lean();

    return replaceMongoIdInArray(courses);
}

export async function getCourseList() {
    const courses = await Course.find({})
        .sort({ createdAt: -1 }) 
        .select(["title", "subtitle", "thumbnail", "modules", "price", "category", "instructor"])
        .populate({
            path: "category",
            model: Category
        })
        .populate({
            path: "instructor",
            model: User
        })
        .populate({
            path: "testimonials",
            model: Testimonial
        })
        .populate({
            path: "modules",
            model: Module
        })
        .lean();

    return replaceMongoIdInArray(courses);
}


export async function getCourseDetails(id) {
    const course = await Course.findById(id)
        .populate({ path: "category", model: Category })
        .populate({ path: "instructor", model: User })
        .populate({
            path: "testimonials",
            model: Testimonial,
            populate: {
                path: "user",       
                model: User,
            }
        })
        .populate({ path: "modules", model: Module })
        .lean();

    // Only replace top-level _id, do not process nested populated objects
    return replaceMongoIdInObject({
        ...course,
        testimonials: course.testimonials, // keep user populated as-is
        modules: course.modules,
        instructor: course.instructor,
        category: course.category
    });
}

export async function getCourseDetailsByInstructor(instructorId) {
    const courses = await Course.find({instructor: instructorId}).lean()
}