'use client';
import TextField from '@mui/material/TextField/TextField';
import DateDentist from '../DateDentist';
import Button from '@mui/material/Button';

export default function BookingForm() {
  return (
    <div className='w-[700px] h-[550px] flex flex-col gap-4 items-start justify-center bg-white rounded-lg pr-24 pl-24'>
      <p className=' text-3xl font-bold'>Request an appointment</p>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Name</p>
        <TextField
          variant='outlined'
          className='w-full bg-white'
          size='small'
        ></TextField>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Email</p>
        <TextField
          variant='outlined'
          className='w-full bg-white'
          size='small'
        ></TextField>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Tel.</p>
        <TextField
          variant='outlined'
          className='w-full bg-white'
          size='small'
        ></TextField>
      </div>
      <DateDentist />
      <Button variant='contained' className='bg-sky-600 w-full'>
        Book now
      </Button>
    </div>
  );
}
