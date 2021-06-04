import withAuth from '../../HOC/withAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function dashboard({ user }) {
  const router = useRouter();

  return (
    <div className="container px-12 mt-8">
      <div
        className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-600"
        onClick={() => router.push('/')}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </div>
  );
}

export default withAuth(dashboard);
