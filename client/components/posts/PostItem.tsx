import { IPost } from '@types/Post';
import Image from 'next/image';

interface PostItemProps {
  post: IPost;
}
const PostItem = ({ post }: PostItemProps) => {
  const imageLink = post.media[0]
    ? `http://localhost:6969/${post.media[0].file_name}`
    : 'https://via.placeholder.com/150';
  return (
    <div className="flex border-purple-600 border rounded-md">
      <Image src={imageLink} width={80} height={60} />

      <div>
        <h3>{post.title}</h3>
        <p>{post.body.substr(0, 200)}...</p>
      </div>
    </div>
  );
};

export default PostItem;
