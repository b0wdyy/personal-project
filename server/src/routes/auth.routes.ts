import 'dotenv/config';
import { User } from './../entity/User';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const user = new User();

  user.firstName = req.body.first_name;
  user.lastName = req.body.last_name;
  user.email = req.body.email;
  user.password = await bcrypt.hash(req.body.password, 12);

  try {
    await user.save();

    res.status(201).json({ success: true, user });
  } catch (e) {
    res.status(400).json({ success: false, message: e.sqlMessage });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const user = await User.findOneOrFail({ email: req.body.email });
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res
        .status(401)
        .json({ success: false, message: 'These credentials do not match' });
    }

    const token = jwt.sign({ ...user }, process.env.TOKEN_SECRET as string);

    return res.status(200).json({ success: true, user, token });
  } catch (e) {
    return res.status(401).json({ success: false, message: e });
  }
});

export default router;
