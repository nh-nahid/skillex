import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import { BookCheck, Clock10, StickyNote, Tv, Video } from "lucide-react";
import CourseModuleList from "./module/CourseModuleList";

// Helper: convert "mm:ss" string to seconds
const durationToSeconds = (duration) => {
    const [minutes, seconds] = duration.split(":").map(Number);
    return minutes * 60 + seconds;
};

const CourseCurriculum = ({ course }) => {
    // Sum all lesson durations
    const totalDurationSeconds = course.modules.reduce((moduleAcc, module) => {
        const moduleDuration = module.lessonIds.reduce((lessonAcc, lesson) => {
            return lessonAcc + durationToSeconds(lesson.duration);
        }, 0);
        return moduleAcc + moduleDuration;
    }, 0);

    const totalHours = (totalDurationSeconds / 3600).toFixed(1); // total hours

    return (
        <>
            {/* Summary: Chapters & Total Hours */}
            <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-slate-400 text-sm">
                <span className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                    <BookCheck className="w-4 h-4" />
                    {course?.modules?.length} Chapters
                </span>

                <span className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                    <Clock10 className="w-4 h-4" />
                    {totalHours} Hours
                </span>
            </div>

            {/* Curriculum Accordion */}
            <TabsContent value="curriculum" className="mt-12">
                <Accordion type="multiple" className="space-y-4">
                    {course.modules.map((module, idx) => (
                        <CourseModuleList key={module.id} module={module} idx={idx}/>
                    ))}
                </Accordion>
            </TabsContent>
        </>
    );
};

export default CourseCurriculum;