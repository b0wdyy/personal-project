import path from 'path';
import Post from '../entity/Post';
import { IRequest } from 'src/types/request';
import { checkToken } from './../auth/auth';
import { Router, Response } from 'express';
import multer from 'multer';
import PostService from '../services/PostService';
import MediaService from '../services/MediaService';

const postService = new PostService();
const mediaService = new MediaService();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, '..', 'assets'));
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({ storage }).single('image');
const router = Router();

router.get('/', checkToken, async (req: IRequest, res: Response) => {
  const { user } = req;
  try {
    const posts = await Post.find({ user });
    return res.status(200).json({ success: true, posts });
  } catch (e) {
    return res.json({ success: false, message: e });
  }
});

router.post('/', checkToken, upload, async (req: IRequest, res: Response) => {
  const { user, file } = req;

  try {
    const createdPost = await postService.create(req.body, user);
    const post = await postService.findById(createdPost.raw.insertId);
    await mediaService.create(file, post);

    return res.status(201).json({ success: true, message: 'post created' });
  } catch (e) {
    return res.status(400).json({ success: false, message: e });
  }
});

router.delete('/:id', checkToken, (req, res) => {
  console.log(req.params.id);

  return res.status(203).json({ success: true, message: 'delete route' });
});

export default router;
