import { ObjectID } from 'typeorm';
import Post from '../entity/Post';

export default class PostService {
  async findById(id: ObjectID) {
    const post = await Post.findOne(id);
    return post;
  }
  async create(data, user) {
    const post = await Post.insert({ ...data, user });
    return post;
  }
}
