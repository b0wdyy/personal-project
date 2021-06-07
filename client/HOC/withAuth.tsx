import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import { IUser } from '../../server/src/types/user';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [user, setUser] = useState({} as IUser);
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      (async () => {
        const accessToken = localStorage.getItem('token');
        if (!accessToken) {
          await router.replace('/');
        } else {
          let data;

          try {
            data = jwt.verify(
              accessToken,
              process.env.NEXT_PUBLIC_TOKEN_SECRET as string
            );
            console.log(data);
          } catch (e) {
            setVerified(false);
            localStorage.removeItem('token');
            await router.replace('/');
          }

          if (data) {
            setVerified(true);
            setUser(data as IUser);
          } else {
            localStorage.removeItem('token');
            await router.replace('/');
          }
        }
      })();
    }, []);

    if (verified) {
      return <WrappedComponent user={user} {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
