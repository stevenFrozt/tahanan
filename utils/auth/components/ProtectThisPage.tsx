import { auth } from '../auth';
import UnauthorizedPage from './UnauthorizedPage';

const ProtectThisPage = async () => {
     const session = await auth();
    
       if (!session) {
          return <UnauthorizedPage />;
       }
  return (
    <div>ProtectThisPage</div>
  )
}

export default ProtectThisPage