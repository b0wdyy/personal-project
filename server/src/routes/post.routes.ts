import Post from '../entity/Post';
import { IRequest } from 'src/types/request';
import { checkToken } from './../auth/auth';
import { Router, Response } from 'express';

const router = Router();

router.get('/', async (_req: IRequest, res: Response) => {
  // const { user } = req;
  try {
    const posts = await Post.find();
    return res.status(200).json({ success: true, posts });
  } catch (e) {
    return res.json({ success: false, message: e });
  }
});

router.post('/', checkToken, async (req: IRequest, res: Response) => {
  const { user } = req;
  try {
    const post = await Post.insert({
      ...req.body,
      user,
    });

    return res.status(201).json({ success: true, post });
  } catch (e) {
    return res.status(400).json({ success: false, message: e });
  }
});
export default router;
