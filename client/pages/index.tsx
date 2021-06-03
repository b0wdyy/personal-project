import React from 'react';
import { useUser } from '../context/UserContext';

export default function Home() {
  const {
    state: { user },
  } = useUser();

  console.log(user);
  return (
    <p>
      {user.firstName} {user.lastName}
    </p>
  );
}
