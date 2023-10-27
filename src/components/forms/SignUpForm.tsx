import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function SignUpForm() {
  return (
    <div className='h-4/5 w-4/5 flex flex-col gap-5 items-center justify-center'>
      <div className='w-4/5 flex flex-col gap-5 items-start'>
        <p className='font-medium text-2xl'>Register</p>
        <TextField
          variant='outlined'
          label='Name'
          className='w-full'
        ></TextField>
        <TextField
          variant='outlined'
          label='Email'
          className='w-full'
        ></TextField>
        <TextField
          variant='outlined'
          label='Tel.'
          className='w-full'
        ></TextField>
        <TextField
          variant='outlined'
          label='Password'
          className='w-full'
        ></TextField>
        <Button variant='contained' className='bg-sky-700 w-full' size='large'>
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
    </div>
  );
}
