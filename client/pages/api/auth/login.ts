import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.post('http://localhost:4444/api/auth/login', {
      ...req.body,
    });

    return res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
  }
}
