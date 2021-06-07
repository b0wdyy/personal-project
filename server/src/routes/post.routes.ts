import Post from '../entity/Post';
import { IRequest } from 'src/types/request';
import { checkToken } from './../auth/auth';
import { Router, Response } from 'express';
import cloudinary from 'cloudinary';
import multer from 'multer';

const router = Router();
const upload = multer();
cloudinary.v2.config({
  cloud_name: 'dqghtd0cg',
  api_key: '736496473388194',
  api_secret: 'EZYbPJ8DSukf6rsnflw8V6cNpN0',
});

router.get('/', checkToken, async (req: IRequest, res: Response) => {
  const { user } = req;
  try {
    const posts = await Post.find({ user });
    return res.status(200).json({ success: true, posts });
  } catch (e) {
    return res.json({ success: false, message: e });
  }
});

router.post(
  '/',
  checkToken,
  upload.single('image'),
  async (req: IRequest, res: Response) => {
    const { user } = req;
    try {
    const response = await cloudinary.v2.uploader.upload(
      req.file.originalname,
      { unique_filename: true }
    );
    console.log(response);
      const post = await Post.insert({
        ...req.body,
        user,
      });

      return res.status(201).json({ success: true, post });
    } catch (e) {
      return res.status(400).json({ success: false, message: e });
    }
  }
);
export default router;
