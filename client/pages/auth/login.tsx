import { useForm } from 'react-hook-form';
import { LoginSchema } from 'utils/resolvers';
import { yupResolver } from '@hookform/resolvers/yup';

interface ILoginInputs {
  email: string;
  password: string;
}

export default function login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(LoginSchema),
  });

  const loginUser = async data => {
    console.log(errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)} autoComplete="off">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="email" name="email" id="email" />
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
          />
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit">login</button>
      </form>
    </div>
  );
}
