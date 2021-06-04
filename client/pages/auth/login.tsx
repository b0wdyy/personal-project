import { useForm } from 'react-hook-form';
import { LoginSchema } from '../../utils/resolvers';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';

interface ILoginInputs {
  email: string;
  password: string;
}

export default function login() {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(LoginSchema),
  });
  const { push } = useRouter();

  const loginUser = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/auth/login', {
        ...data,
      });

      console.log(response);
      if (response.data.success) {
        dispatch({
          type: 'login',
          payload: {
            user: response.data.user,
            access_token: response.data.token,
          },
        });
        localStorage.setItem('token', response.data.token);

        await push('/auth/dashboard');
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="flex items-center justify-center absolute top-8 left-8 cursor-pointer"
        onClick={() => push('/')}
      >
        <span className="w-6 h-6 p-4 flex items-center justify-center rounded-full border-2 border-purple-700">
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <p className="ml-2">Back to home</p>
      </div>
      <form
        onSubmit={handleSubmit(loginUser)}
        autoComplete="off"
        className="p-12 rounded-md bg-white grid place-items-center shadow-lg"
      >
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            className="border-gray-300 rounded-md focus:border-purple-600"
            placeholder="johndoe@john.com"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div className="form-group mb-8">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
            className="border-gray-300 rounded-md focus:border-purple-600"
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>

        <button
          type="submit"
          className="transition duration-200 ease-in-out bg-purple-600 rounded-md px-4 py-3 w-full mt-4 text-white hover:bg-purple-500"
        >
          {loading ? (
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
          ) : (
            'login'
          )}
        </button>
        <div className="form-group w-full flex items-center justify-end mt-2">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="rounded-sm mr-2"
          />
          <label htmlFor="remember">remember creds</label>
        </div>
      </form>
    </div>
  );
}
