import { ObjectID } from 'typeorm';

export interface IPost {
  id: ObjectID;
  title: string;
  body: string;
  media: Media[];
  updated_at: Date;
  created_at: Date;
}
