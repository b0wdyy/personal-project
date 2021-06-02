import { IRequest } from 'src/types/request';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';

export const checkToken = (
  req: IRequest,
  _res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) throw new Error('No authorization token present');

  const user = jwt.verify(token, process.env.TOKEN_SECRET as string);

  if (user) {
    // @ts-ignore
    req.user = user;
    next();
  }
};
