import path from 'path';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import express from 'express';
import 'dotenv/config';
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
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'assets')));

  app.use('/api/auth', AuthRouter);
  app.use('/api/posts', PostRouter);

  app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`);
  });
})();
