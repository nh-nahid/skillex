"use client"
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
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignupForm({ role }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const firstName = formData.get("first-name");
      const lastName = formData.get("last-name");
      const email = formData.get("email");
      const password = formData.get("password");

      const userRole =
        ((role === "student") || (role === "instructor")) ? role : "student";

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          password,
          email,
          userRole,
        }),
      });

      if (response.status === 201) {
        router.push("/login");
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto max-w-sm bg-white/5 backdrop-blur-lg border border-white/10 text-white">
      <CardHeader>
        <CardTitle className="text-xl text-white">Sign Up</CardTitle>
        <CardDescription className="text-white/70">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name" className="text-white/80">
                  First name
                </Label>
                <Input
                  id="first-name"
                  name="first-name"
                  placeholder="Max"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="last-name" className="text-white/80">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  name="last-name"
                  placeholder="Robinson"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white/80">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white/80">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                className="bg-white/10 border-white/20 text-white focus:border-indigo-400 focus:ring-0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-white/80">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="bg-white/10 border-white/20 text-white focus:border-indigo-400 focus:ring-0"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create an account"}
            </Button>

          </div>
        </form>

        <div className="mt-4 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}