import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UserMenu from '@components/user/UserMenu';
import useUser from '@hooks/useUser';

const Header = () => {
  const [token, setToken] = useState<null | string>('');
  const {
    userQuery: { data: user },
  } = useUser();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  const renderAuthHeader = () => (
    <div className="py-4 px-12 w-full flex items-center justify-between shadow-custom">
      <div className="text-purple-600 uppercase tracking-widest font-medium">Bowdy</div>
      <div className="flex">
        <ul className="flex items-center mr-12">
          <li className="mr-4">
            <Link href="/auth/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/auth/posts">Posts</Link>
          </li>
        </ul>
        <UserMenu user={user} />
      </div>
    </div>
  );

  const renderNormalHeader = () => (
    <div className="w-100 px-12 py-4 shadow-custom flex items-center justify-between">
      <div className="logo uppercase text-purple-600 font-black">
        <Link href="/">Bowdy..</Link>
      </div>

      <ul className="flex items-center">
        <li className="hover:text-purple-600 mr-4">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );

  const renderHeader = () => (user && token ? renderAuthHeader() : renderNormalHeader());

  return renderHeader();
};

export default Header;
