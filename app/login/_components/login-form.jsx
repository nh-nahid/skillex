import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl">
      
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Welcome Back
        </CardTitle>

        <CardDescription className="text-gray-400">
          Login to continue your learning journey
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="grid gap-6">

          {/* EMAIL */}
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-400 focus:ring-indigo-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>

            <Input
              id="password"
              type="password"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-400 focus:ring-indigo-400"
            />
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform"
          >
            Login
          </Button>
        </form>

        {/* REGISTER */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}