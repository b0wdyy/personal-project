import React from 'react';
import useUser from '@hooks/useUser';

export default function Home() {
  const {
    userQuery: { data },
  } = useUser();

  return (
    <p>
      {data?.user.firstName} {data?.user.lastName}
    </p>
  );
}
