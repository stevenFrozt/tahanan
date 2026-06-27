import { DefaultSession } from "next-auth";

declare module "next-auth" {
   interface Session {
      user: {
         id: string;
         image: string;
         roles: string[];
      } & DefaultSession["user"];
   }

   interface User {
      id: string;
      image: string;
      roles: string[];
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      id: string;
      image: string;
      roles: string[];
   }
}
