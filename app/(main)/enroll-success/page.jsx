import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="-mt-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-4">
      
      <div className="w-full max-w-xl flex flex-col items-center gap-6 text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl">

        {/* Success Icon */}
        <CircleCheck className="w-24 h-24 text-green-400" />

        {/* Title */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
          🎉 Congratulations!
          <br />
          Your Enrollment was Successful
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform"
          >
            <Link href="/courses">Browse Courses</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-white/20 text-black hover:bg-white/10 hover:scale-105 transition hover:text-white"
          >
            <Link href="/think-in-a-redux-way/introduction">
              Play Course
            </Link>
          </Button>
        </div>

      </div>

    </div>
  );
};

export default Success;