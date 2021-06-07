import withAuth from '@HOC/withAuth';

function posts() {
  return <p>posts</p>;
}

export default withAuth(posts);
