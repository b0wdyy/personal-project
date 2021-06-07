import React from 'react';
import Link from 'next/link';
import { IUser } from '../../../server/src/types/user';
import UserMenu from '@components/user/UserMenu';

interface AuthHeaderProps {
  user: IUser;
}
const AuthHeader = ({ user }: AuthHeaderProps) => {
  return (
    <div className="py-4 px-12 w-full flex items-center justify-between shadow-custom">
      <div className="text-purple-600 uppercase tracking-widest font-medium">
        Bowdy
      </div>
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
};

export default AuthHeader;
