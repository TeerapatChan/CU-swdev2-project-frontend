'use client';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button';

export default function EditDentistForm() {
  return (
    <div className='w-[700px] h-[600px] flex flex-col gap-4 items-start justify-center bg-white rounded-lg pr-24 pl-24'>
      <p className=' text-3xl font-bold self-center'>Edit Dentist Profile</p>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Name</p>
        <TextField
          variant='outlined'
          className='w-full bg-white'
          size='small'
        ></TextField>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Hospital</p>
        <TextField
          variant='outlined'
          className='w-full bg-white'
          size='small'
        ></TextField>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Address</p>
        <TextField
          variant='outlined'
          className='w-full bg-white'
          size='small'
        ></TextField>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Expertist</p>
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
      <Button variant='contained' className='bg-sky-600 w-full mt-4'>
        Save Profile
      </Button>
    </div>
  );
}
