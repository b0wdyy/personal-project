import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleOpen = () => setOpen(!open);

  const onOutsideClick = (e: MouseEvent) => {
    if (e.target?.contains(dropdownRef.current)) {
      setOpen(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    document.addEventListener('click', onOutsideClick);
    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  }, []);

  return (
    <div className="container">
      <button
        onClick={toggleOpen}
        type="button"
        className="px-4 py-2 relative bg-purple-400 hover:bg-purple-300 transition duration-200 ease-in-out rounded-md flex items-center justify-center text-white"
      >
        <span className="mr-2">{user?.firstName}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {open && (
        <div
          className="shadow-lg absolute bg-gray-100 rounded-md py-2 mt-1 text-black"
          ref={dropdownRef}
        >
          <ul>
            <li className="cursor-pointer mb-1 hover:bg-gray-200 px-4 py-2">
              Profile
            </li>
            <li className="cursor-pointer mb-1 hover:bg-gray-200 px-4 py-2">
              Test
            </li>
            <li
              className="cursor-pointer mb-1 hover:bg-red-400 hover:text-white px-4 py-2"
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
