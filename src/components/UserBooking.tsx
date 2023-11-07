'use client';
import { useState } from 'react';
import DateDentist from './DateDentist';
import { Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { dentistsProps } from '@/utils/interface';

type UserBookingProps = {
  bookingDate: Dayjs;
  userId: string;
  dentists: dentistsProps
};

export default function UserBooking(props: UserBookingProps) {
  var now = dayjs();
  const { bookingDate, userId,dentists } = props;
  const [date, setDate] = useState<Dayjs>(now);
  const [dentistId, setDentistId] = useState('');
  return (
    <div
      className='bg-white w-[700px] h-64 flex flex-col items-center justify-center gap-5 pr-24 pl-24
    rounded-lg shadow-lg'
    >
      <div className='text-2xl font-semibold flex flex-row gap-2'>
        <p>Patient ID:</p>
        <p>{userId}</p>
      </div>
      <DateDentist
        onDateChange={(e) => setDate(e)}
        onDentistChange={(e) => setDentistId(e)}
        dentists={dentists}
        defaultDate={bookingDate!=undefined?dayjs(bookingDate):now}
      />
      <div className='flex flex-row gap-5 w-full'>
        <Button variant='contained' className='bg-sky-600 w-full'>
          Save
        </Button>
        <Button variant='outlined' color='error' className='w-full border-2'>
          Delete
        </Button>
      </div>
    </div>
  );
}
