import { NextResponse } from "next/server";
import { auth } from "./utils/auth/auth";

// export const proxy = auth(async () => {});
const authPages = ["/login", "/signup", "/forgot-password"];

export const proxy = auth((req) => {
   if (req.auth && authPages.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
   }

   return NextResponse.next();
});
