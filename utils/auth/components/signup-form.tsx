"use client";
import { GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/shadcn/components/button";
import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
   FieldSeparator,
} from "@/shadcn/components/field";
import { Input } from "@/shadcn/components/input";
import { cn } from "@/shadcn/lib/utils";
import GoogleLoginButton from "./GoogleLoginButton";
import { usePopupAuthListener } from "../hooks/usePopupAuthListener";

export function SignupForm({
   className,
   ...props
}: React.ComponentProps<"div">) {
   usePopupAuthListener();
   return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
         <form>
            <FieldGroup>
               <div className="flex flex-col items-center gap-2 text-center">
                  <a
                     href="#"
                     className="flex flex-col items-center gap-2 font-medium"
                  >
                     <div className="flex size-8 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-6" />
                     </div>
                     <span className="sr-only">Acme Inc.</span>
                  </a>
                  <h1 className="text-xl font-bold">Welcome to Tahanan</h1>
                  <FieldDescription>
                     Already have an account? <a href="/login">Sign in</a>
                  </FieldDescription>
               </div>

               <Field>
                  <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                  <Input
                     id="firstname"
                     type="firstname"
                     placeholder="Enter First Name"
                     required
                  />
               </Field>
               <Field>
                  <FieldLabel htmlFor="middlename">Middle Name</FieldLabel>
                  <Input
                     id="middlename"
                     type="middlename"
                     placeholder="Enter Middle Name"
                     required
                  />
               </Field>
               <Field>
                  <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
                  <Input
                     id="lastname"
                     type="lastname"
                     placeholder="Enter Last Name"
                     required
                  />
               </Field>
               <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                     id="email"
                     type="email"
                     placeholder="Enter Email Address"
                     required
                  />
               </Field>
               <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                     id="password"
                     type="password"
                     placeholder="Enter Password"
                     required
                  />
               </Field>
               <Field>
                  <FieldLabel htmlFor="confirmPassword">
                     Confirm Password
                  </FieldLabel>
                  <Input
                     id="confirmPassword"
                     type="confirmPassword"
                     placeholder="Enter Confirm Password"
                     required
                  />
               </Field>
               <Field>
                  <Button type="submit">Create Account</Button>
               </Field>
               <FieldSeparator>Or</FieldSeparator>
               <Field>
                  <GoogleLoginButton />
               </Field>
            </FieldGroup>
         </form>
         <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
         </FieldDescription>
      </div>
   );
}
