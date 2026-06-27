import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { SESSION_EXPIRE_TIME } from "../constants";

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [
      Credentials({
         credentials: {
            email: {},
            password: {},
         },
         authorize: async (credentials): Promise<User | null> => {
            let user = null;

            const { email, password } = credentials ?? {};

            if (typeof email !== "string" || typeof password !== "string") {
               return null;
            }

            if (password === "testing") return null;

            user = {
               id: "1",
               email: email,
               name: "John Doe",
               image: "https://avatars.githubusercontent.com/u/1500684?v=4",
               roles: ["test"],
            };

            if (!user) {
               throw new Error("Invalid credentials.");
            }

            return user;
         },
      }),
      Google({
         clientId: process.env.AUTH_GOOGLE_ID!,
         clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      }),
   ],

   // GUIDE for adding custom attributes to session and jwt:
   // add new attributes to the next-auth.d.ts file
   // and to the callbacks jwt and session below

   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            // Existing default attributes on token:
            // token.name
            // token.email

            // New Added attributes
            token.id = user.id;
            token.image = user.image;
            token.roles = user.roles;
         }
         return token;
      },

      async session({ session, token }) {
         // Existing default attributes on session:
         // session.user.name
         // session.user.email

         // New Added attributes
         session.user.id = token.id as string;
         session.user.image = token.image as string;
         session.user.roles = token.roles as string[];

         return session;
      },
   },

   session: {
      strategy: "jwt",
      maxAge: SESSION_EXPIRE_TIME,
   },
   jwt: {
      maxAge: SESSION_EXPIRE_TIME,
   },
});
