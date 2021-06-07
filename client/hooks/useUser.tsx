import { loginUser } from 'queries/User';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const useUser = () => {
  const queryClient = useQueryClient();
  const userQuery = useQuery('user');
  const userMutation = useMutation(loginUser, {
    onSuccess: async ({ data }) => {
      queryClient.setQueryData('user', data);
    },
  });

  return {
    userQuery,
    userMutation,
  };
};

export default useUser;
