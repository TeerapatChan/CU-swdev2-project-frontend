'use client';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { SignupSchema } from '@/utils/FormSchema';
import { SignupYup } from '@/utils/YupSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextField from '../CustomTextField';

export default function SignUpForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: yupResolver(SignupYup),
    defaultValues: {
      name: '',
      email: '',
      tel: '',
      password: '',
    },
  });

  const formSubmit = (data: SignupSchema) => {
    console.log(data);
  };
  return (
    <form
      className='h-4/5 w-4/5 flex flex-col gap-5 items-center justify-center'
      onSubmit={handleSubmit(formSubmit)}
    >
      <div className='w-4/5 flex flex-col gap-5 items-start'>
        <p className='font-medium text-2xl'>Register</p>
        <CustomTextField props={{ control, errors, label: 'name' }} />
        <CustomTextField props={{ control, errors, label: 'email' }} />
        <CustomTextField
          props={{ control, errors, label: 'password', type: 'password' }}
        />
        <CustomTextField props={{ control, errors, label: 'tel' }} />
        <Button
          type='submit'
          variant='contained'
          className='bg-sky-700 w-full'
          size='large'
        >
          Sign Up
        </Button>
        <div className='self-center'>
          Already have an account?
          <Link
            href='/mock-signin'
            className='text-blue-900 font-medium hover:text-blue-800'
          >
            {' '}
            Log in here
          </Link>
        </div>
      </div>
    </form>
  );
}
