import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.post('http://localhost:6969/api/auth/login', {
      ...req.body,
    });

    return res.status(200).json(response.data);
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong' });
  }
}
