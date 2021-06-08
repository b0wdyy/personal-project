import PostItem from '@components/posts/PostItem';
import withAuth from '@HOC/withAuth';
import { usePosts } from '@hooks/usePosts';
import { IPost } from '@types/Post';

function posts() {
  const { data, isLoading } = usePosts();

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="container grid grid-cols-6 gap-4 px-12 py-8">
      {data?.data.posts.map((post: IPost) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default withAuth(posts);
