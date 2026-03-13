"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { doSocialLogin } from "@/app/actions";

const SocialLogins = () => {
  return (
    <>
      <div className="text-center text-sm mt-3 text-gray-400">
        or Signup with
      </div>
      <form action={doSocialLogin}>
        <div className="flex justify-center gap-4 mt-2">
          <Button
            type="submit"
            name="action"
            value="google"
            className="flex items-center gap-2 justify-center px-4 py-2 border border-white/20 rounded-2xl bg-black/40 backdrop-blur-xl text-white hover:scale-105 hover:bg-black/50 transition-transform shadow-lg shadow-black/30"
          >
            <Image src="/google.png" alt="google" width={20} height={20} />
            <span>Google</span>
          </Button>

          {/* Add more social buttons here if needed */}
        </div>
      </form>
    </>
  );
};

export default SocialLogins;