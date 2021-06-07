import axios from 'axios';
import { useQuery } from 'react-query';

async function getPosts() {
  return axios.get('http://localhost:6969/api/posts');
}

export const usePosts = () => {
  const postsQuery = useQuery('posts', getPosts);

  return { postsQuery };
};
