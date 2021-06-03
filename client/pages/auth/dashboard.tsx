import { useUser } from '../../context/UserContext';

export default function dashboard() {
  const {
    state: { user },
  } = useUser();
  return (
    <p>
      {user.firstName} {user.lastName}
    </p>
  );
}
