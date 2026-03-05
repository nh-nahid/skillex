import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { StickyNote, Tv } from "lucide-react";
import CourseLessonList from "./CourseLessonList";

const CourseModuleList = ({module, idx}) => {
    return (
        <AccordionItem
            key={module._id}
            value={`module-${idx}`}
            className="bg-white/5 border border-white/10 rounded-xl px-6"
        >
            <AccordionTrigger className="text-lg font-semibold text-white hover:text-indigo-400 transition">
                {module.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-6">
                {module.lessonIds.map((lesson) => (
                    <CourseLessonList key={lesson._id} lesson={lesson}/>
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

export default CourseModuleList;