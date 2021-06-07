import { loginUser, loginUserWithToken } from 'queries/User';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const useUser = () => {
  const [token, setToken] = useState('');
  const queryClient = useQueryClient();
  const userQuery = useQuery('user', () => loginUserWithToken(token), { enabled: !!token });
  const userMutation = useMutation(loginUser, {
    onSuccess: async ({ data }) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData('user', data.user);
    },
  });

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) return;

    setToken(jwt as string);
  }, []);

  return {
    userQuery,
    userMutation,
  };
};

export default useUser;
