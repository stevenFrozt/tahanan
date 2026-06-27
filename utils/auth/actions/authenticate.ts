"use server";

import { signIn } from "@/utils/auth/auth";
import { AuthError } from "next-auth";

export async function authenticate(
   prevState: string | undefined,
   formData: FormData,
) {
   try {
      await signIn("credentials", {
         email: formData.get("email"),
         password: formData.get("password"),
         redirectTo: (formData.get("callbackUrl") as string) || "/",
      });
   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case "CredentialsSignin":
               return "Invalid email or password.";
            default:
               return "Something went wrong. Please try again.";
         }
      }
      throw error; // rethrow redirect errors (and anything unrelated to auth)
   }
}
