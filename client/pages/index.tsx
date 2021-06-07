import React from 'react';
import useUser from '@hooks/useUser';

export default function Home() {
  const {
    userQuery: { data: user },
  } = useUser();

  return (
    <p>
      {user?.firstName} {user?.lastName}
    </p>
  );
}
