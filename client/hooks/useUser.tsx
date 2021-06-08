import axios from 'axios';
import { loginUser, loginUserWithToken } from 'queries/User';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const useUser = () => {
  const [token, setToken] = useState('');
  const queryClient = useQueryClient();
  const userQuery = useQuery('user', () => loginUserWithToken(token), { enabled: !!token });

  const userMutation = useMutation(loginUser, {
    onSuccess: async ({ data }) => {
      axios.defaults.headers['Authorization'] = `Bearer ${data.token}`;
      localStorage.setItem('token', data.token);
      queryClient.setQueryData('user', data.user);
    },
  });
  const userMutationLogout = useMutation(async () => localStorage.removeItem('token'), {
    onSuccess: async () => {
      axios.defaults.headers['Authorization'] = '';
      queryClient.invalidateQueries('user');
      queryClient.setQueryData('user', {});
      console.log(userQuery)
    }
  })

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (!jwt) return;

    axios.defaults.headers['Authorization'] = `Bearer ${jwt}`;

    setToken(jwt as string);
  }, []);

  return {
    userQuery,
    userMutation,
    userMutationLogout
  };
};

export default useUser;
