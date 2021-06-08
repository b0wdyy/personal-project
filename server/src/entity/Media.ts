import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, ObjectID, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Post from "./Post";

@Entity('media')
export default class Media extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: ObjectID;

  @Column()
  name: String;

  @Column()
  file_name: String;

  @Column()
  mimetype: String;

  @ManyToOne(() => Post, (post) => post.media)
  post: Post

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date
}
