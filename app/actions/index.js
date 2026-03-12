"use server";

import { signIn } from "@/auth";

export async function credentialLogin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) return { ok: false, error: "Email and password required" };

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // normalize string return
    if (typeof response === "string") return { ok: true, error: null, url: response };

    return response;
  } catch (err) {
    return { ok: false, error: err.message || "Login failed" };
  }
}