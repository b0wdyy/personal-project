import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import path from 'path';
import cors from 'cors';
import AuthRouter from './routes/auth.routes';
import PostRouter from './routes/post.routes';

(async () => {
  try {
    await createConnection();
  } catch (e) {
    console.log(e);
  }
  const port = process.env.PORT || 4444;
  const app = express();

  app.use(express.json());
  app.use(cors())
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'assets')));

  app.use('/api/auth', AuthRouter);
  app.use('/api/posts', PostRouter);

  app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`);
  });
})();
