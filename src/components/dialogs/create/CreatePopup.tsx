'use client';
import { Dialog, DialogTitle, Button } from '@mui/material';
import DateDentist from '../../DateDentist';
import { useState } from 'react';
import createBooking from '@/libs/bookings/createBooking';
import Status from '../../Status';
import toast from 'react-hot-toast';
import { useBookingsStore, useMyBookingStore } from '@/zustand/store';
import getBookings from '@/libs/bookings/getBookings';
import { BookingItem } from '@/utils/interface';
import dayjs from 'dayjs';
import { revalidatePath } from 'next/cache';

export default function CreatePopup({
  open,
  onClose,
  defaultDentist,
  token,
}: {
  open: boolean;
  onClose?: () => void;
  defaultDentist: string;
  token: string;
}) {
  var now = new Date();
  const [date, setDate] = useState<Date>(now);
  const [dentist, setDentist] = useState<string>(defaultDentist);
  const success = () => toast.success('Booking created');
  const fail = () => toast.error('You can book only one booking');

  const CreateBooking = async () => {
    try {
      const res = await createBooking({
        id: dentist ? dentist : '',
        bookingDate: date,
        token: token,
      });
      const bookings = (await getBookings(token)).data;
      useBookingsStore.setState({ bookings: bookings });
      const myBooking = bookings.filter(
        (booking: BookingItem) => booking._id === res.data._id,
      );
      useMyBookingStore.setState({ myBooking: myBooking[0] });
      success();
    } catch (error) {
      fail();
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Status />
      <div className='flex flex-col gap-5 pr-12 pl-12 pt-10 pb-10 w-[600px] items-center'>
        <DialogTitle className='text-3xl font-bold'>Make a booking</DialogTitle>
        <DateDentist
          onDateChange={(e) => setDate(e)}
          onDentistChange={(e) => setDentist(e)}
          defaultDentist={defaultDentist}
          defaultDate={dayjs(now)}
        />
        <Button
          type='submit'
          variant='contained'
          className='bg-sky-600 w-full'
          onClick={CreateBooking}
        >
          Submit
        </Button>
      </div>
    </Dialog>
  );
}
