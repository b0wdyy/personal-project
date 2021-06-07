import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from 'react-query';
 import { ReactQueryDevtools } from 'react-query/devtools'
import AuthHeader from '@components/header/AuthHeader';
import PublicHeader from '@components/header/PublicHeader';
import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { IUser } from '../../server/src/types/user';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return;

    const user = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_TOKEN_SECRET as string
    );
    if (user) {
      setUser(user as IUser);
    }
  }, [user]);
  return (
    <QueryClientProvider client={queryClient}>
        {user ? <AuthHeader user={user} /> : <PublicHeader />}
        <Component {...pageProps} />
        <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
