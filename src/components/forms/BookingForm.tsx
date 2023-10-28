'use client';
import DateDentist from '../DateDentist';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BookingSchema } from '@/utils/FormSchema';
import CustomTextField from '../CustomTextField';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { BookingYup } from '@/utils/YupSchema';

export default function BookingForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: yupResolver(BookingYup),
    defaultValues: {
      name: '',
      email: '',
      tel: '',
    },
  });
  const [date, setDate] = useState<Dayjs | null>(null);
  const [dentist, setDentist] = useState<string>('Select Dentist');
  const formSubmit: SubmitHandler<BookingSchema> = (data: BookingSchema) => {
    console.log(data);
    console.log(date?.toString());
    console.log(dentist);
  };
  console.log('errors', errors);
  return (
    <form
      className='w-[700px] h-[600px] flex flex-col gap-2 items-start justify-center 
    bg-white rounded-lg pr-24 pl-24'
      onSubmit={handleSubmit(formSubmit)}
    >
      <p className=' text-3xl font-bold self-center'>Request an appointment</p>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Name</p>
        <CustomTextField props={{ control, errors, label: 'name' }} />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Email</p>
        <CustomTextField props={{ control, errors, label: 'email' }} />
      </div>
      <div className='w-full flex flex-col gap-2 mb-2'>
        <p className='text-base'>Tel.</p>
        <CustomTextField props={{ control, errors, label: 'tel' }} />
      </div>
      <DateDentist
        onDateChange={(e) => setDate(e)}
        onDentistChange={(e) => setDentist(e)}
      />
      <Button type='submit' variant='contained' className='bg-sky-600 w-full'>
        Make an appointment
      </Button>
    </form>
  );
}
