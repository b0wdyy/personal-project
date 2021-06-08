import React from 'react';
import Link from 'next/link';
import UserMenu from '@components/user/UserMenu';
import useUser from '@hooks/useUser';

const Header = () => {
  const {
    userQuery: { data: user },
  } = useUser();
  const token = localStorage.getItem('token');

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

  const renderNormalHeader = () => <p>im publicheader</p>;

  const renderHeader = () => (user && token ? renderAuthHeader() : renderNormalHeader());

  return renderHeader();
};

export default Header;
