import React from 'react';
import Link from 'next/link';
import { IUser } from '../../../server/src/types/user';

interface AuthHeaderProps {
  user: IUser;
}
const AuthHeader = ({ user }: AuthHeaderProps) => {
  return (
    <div className="py-4 px-12 w-full flex items-center justify-between shadow-custom">
      <div className="text-purple-600 uppercase tracking-widest font-medium">
        Bowdy
      </div>
      <ul className="flex items-center">
        <li className="mr-4">
          <Link href="/auth/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/auth/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthHeader;
