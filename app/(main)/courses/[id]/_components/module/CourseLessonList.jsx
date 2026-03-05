import { StickyNote, Tv } from 'lucide-react';
import React from 'react';

const CourseLessonList = ({lesson}) => {
    return (
        <button
            key={lesson._id}
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition text-sm"
        >
            {lesson.access === "public" ? <Tv size={16} /> : <StickyNote size={16} />}
            {lesson.title} ({lesson.duration})
        </button>
    );
};

export default CourseLessonList;