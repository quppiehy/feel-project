import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error", // Error code passed in query string as ?error=
  },
};
