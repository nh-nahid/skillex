import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { authConfig } from "./auth.config";
import { User } from "./model/user-model";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}
  = NextAuth({
    ...authConfig,
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials) return null;

          try {
            const user = await User.findOne({ email: credentials.email });

            if (!user) {
              console.error("User not found");
              throw new Error("User not found");
            }

            const isMatch = await bcrypt.compare(credentials.password, user.password);
            if (!isMatch) {
              console.error("Password mismatch");
              throw new Error("Incorrect password");
            }

            // Return user object (NextAuth will include this in the session)
            return { id: user._id, email: user.email, name: user.name };
          } catch (error) {
            console.error("Authorize error:", error);
            throw new Error(error.message || "Login failed");
          }
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
      })
    ]
  })