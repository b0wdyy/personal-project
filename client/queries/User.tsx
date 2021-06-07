import axios from 'axios';
import jwt from 'jsonwebtoken';

export const loginUser = async (data) => axios.post('/api/auth/login', data);

export const loginUserWithToken = async (token) => {
  if (!token) return null;
  const user = await jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET as string);

  return user;
}
