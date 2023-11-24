import config from "@/interfaces/Config";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        try {
          const response = await axios.post(
            `${config.baseURl}/auth/login`,
            {
              email,
              password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 401) {
            throw new Error("Unauthorized request");
          }

          // user data is of type LoginResponse
          const user = response.data;
          if (!user.success) return null;
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // using jwt callback to refresh token
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // using session callback to attach user info to session
    async session({ session, token, user }) {
      session.user = token as any;
      const sessionUser = JSON.stringify(token);
      const parsedSessionUser = JSON.parse(sessionUser);
      const jwt = parsedSessionUser.data.jwt;
      return jwt;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
