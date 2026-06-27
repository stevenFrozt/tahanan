import { auth } from "../auth";
import UnauthorizedPage from "./UnauthorizedPage";

const ProtectThisPage = async ({ children }: { children: React.ReactNode }) => {
   const session = await auth();

   if (!session) {
      return <UnauthorizedPage />;
   }
   return <>{children}</>;
};

export default ProtectThisPage;
