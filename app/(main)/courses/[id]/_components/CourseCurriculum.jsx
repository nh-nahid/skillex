import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";
import { StickyNote, Tv, Video } from "lucide-react";

const CourseCurriculum = ({course}) => {
    return (
        <TabsContent value="curriculum" className="mt-12">
            <Accordion type="multiple" className="space-y-4">
                <AccordionItem
                    value="item-1"
                    className="bg-white/5 border border-white/10 rounded-xl px-6"
                >
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-indigo-400 transition">
                        {course?.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pb-6">
                        <button className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition text-sm">
                            <Tv size={16} />
                            What is React?
                        </button>
                        <button className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition text-sm">
                            <Video size={16} />
                            React Fundamentals
                        </button>
                        <button className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition text-sm">
                            <StickyNote size={16} />
                            React Notes
                        </button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </TabsContent>
    );
};

export default CourseCurriculum;