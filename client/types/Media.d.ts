import { ObjectID } from 'typeorm';

export interface IMedia {
  id: ObjectID;
  mimetype: string;
  name: string;
  file_name: string;
}
