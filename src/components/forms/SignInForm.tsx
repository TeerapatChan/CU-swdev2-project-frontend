import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function SignInForm() {
  return (
    <div className='h-1/2 w-4/5 flex flex-col gap-5 items-center justify-center'>
      <div className='w-4/5 flex flex-col gap-5 items-start'>
        <TextField
          variant='outlined'
          label='Email'
          className='w-full'
        ></TextField>
        <TextField
          variant='outlined'
          label='Password'
          className='w-full'
        ></TextField>
        <Button variant='contained' className='bg-sky-600 w-full' size='large'>
          Log In
        </Button>
        <div className='self-center'>
          Don't have account?
          <Link
            href='/mock-signup'
            className='text-blue-900 font-medium hover:text-blue-800'
          >
            {' '}
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
