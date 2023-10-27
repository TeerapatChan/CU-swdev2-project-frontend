'use client';
import DateDentist from './DateDentist';
import { Button } from '@mui/material';
export default function UserBooking() {
  return (
    <div
      className='bg-white w-[700px] h-64 flex flex-col items-center justify-center gap-5 pr-24 pl-24
    rounded-lg shadow-lg'
    >
      <div className='text-2xl font-semibold flex flex-row gap-2'>
        <p>Patient :</p>
        <p>Mr.Farang Aloha</p>
      </div>
      <DateDentist />
      <div className='flex flex-row gap-5 w-full'>
        <Button variant='contained' className='bg-sky-600 w-full'>
          Save
        </Button>
        <Button variant='outlined' color='error' className='w-full'>
          Delete
        </Button>
      </div>
    </div>
  );
}
