'use client';
import { Dialog, DialogTitle, Button } from '@mui/material';
import DateDentist from '../../DateDentist';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { dentistsProps } from '@/utils/interface';
import createBooking from '@/libs/bookings/createBooking';
import Status from '../../Status';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function CreatePopup({
  open,
  onClose,
  dentists,
  token,
}: {
  open: boolean;
  onClose?: () => void;
  dentists: dentistsProps;
  token: string;
}) {
  var now = new Date();
  const [date, setDate] = useState<Date>(now);
  const [dentist, setDentist] = useState<string>(dentists.defaultDentist);
  const success = () => toast.success('Appointment created');
  const fail = () => toast.error('You can book only one appointment');
  const router = useRouter();
  const makeAppointment = async () => {
    try {
      const res = await createBooking({
        id: dentist,
        bookingDate: date,
        token: token,
      });
      success();
      // router.push('/mybooking');
    } catch {
      fail();
      console.log('error');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Status />
      <div className='flex flex-col gap-5 pr-12 pl-12 pt-10 pb-10 w-[600px] items-center'>
        <DialogTitle className='text-3xl font-bold'>
          Make an appointment
        </DialogTitle>
        <DateDentist
          onDateChange={(e) => setDate(e)}
          onDentistChange={(e) => setDentist(e)}
          dentists={dentists}
          defaultDate={dayjs(now)}
        />
        <Button
          type='submit'
          variant='contained'
          className='bg-sky-600 w-full'
          onClick={makeAppointment}
        >
          Submit
        </Button>
      </div>
    </Dialog>
  );
}
