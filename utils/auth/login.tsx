"use client";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useActionState } from "react";
import { toast } from "sonner";
import { authenticate } from "./actions/authenticate";
import GoogleLoginButton from "./components/GoogleLoginButton";
import { usePopupAuthListener } from "./hooks/usePopupAuthListener";

export default function Login() {
   const searchParams = useSearchParams();
   const callbackUrl = searchParams.get("callbackUrl") ?? "";

   const [errorMessage, formAction, isPending] = useActionState(
      authenticate,
      undefined,
   );

   usePopupAuthListener();

   if (errorMessage) toast.error(errorMessage);

   return (
      <>
         <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
               <h1 className="text-2xl font-bold text-center mb-6">
                  Welcome Back
               </h1>

               <p className="text-sm text-gray-500 text-center mb-6">
                  Sign in to your account
               </p>

               <form action={formAction} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                     <label className="text-sm font-medium">Email</label>
                     <input
                        name="email"
                        placeholder="you@example.com"
                        className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        required
                     />
                  </div>

                  <div className="flex flex-col gap-1">
                     <label className="text-sm font-medium">Password</label>
                     <input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        required
                     />
                  </div>

                  <input type="hidden" name="callbackUrl" value={callbackUrl} />

                  {errorMessage && (
                     <div className="rounded-lg bg-red-100 text-red-600 text-sm p-2">
                        {errorMessage}
                     </div>
                  )}

                  <button
                     type="submit"
                     disabled={isPending}
                     className="rounded-lg bg-green-600 py-2 text-white font-medium hover:bg-green-700 disabled:opacity-50"
                  >
                     {isPending ? "Signing in..." : "Sign In"}
                  </button>
                  <GoogleLoginButton />
               </form>
               <hr />
            </div>
         </div>
      </>
   );
}
