import { Button } from "@/shadcn/components/button";

function GoogleLoginButton() {
   function OnClick() {
      const width = 500;
      const height = 650;
      const left = window.screenX + (window.innerWidth - width) / 2;
      const top = window.screenY + (window.innerHeight - height) / 2;

      window.open(
         "/auth/google-popup", // ← your own page, not the auth URL
         "Google Login",
         `width=${width},height=${height},left=${left},top=${top}`,
      );
   }

   return (
      <Button
      variant={"ghost"}
         type="button"
         onClick={OnClick}
         className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition "
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-5 w-5"
            aria-hidden="true"
         >
            <path
               fill="#FFC107"
               d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
            />
            <path
               fill="#FF3D00"
               d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
            />
            <path
               fill="#4CAF50"
               d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.4-8l-6.6 5.1C9.2 39.6 16 44 24 44z"
            />
            <path
               fill="#1976D2"
               d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.4 5.6-6.3 7.1l6.3 5.3C39.8 36.4 44 30.8 44 24c0-1.3-.1-2.4-.4-3.5z"
            />
         </svg>

         <span>Continue with Google</span>
      </Button>
      //   <button
      //      className="bg-red-500 p-2 w-full mt-4 rounded-md text-white cursor-pointer"

      //   >
      //      Sign in with Google (Popup)
      //   </button>
   );
}

export default GoogleLoginButton;
