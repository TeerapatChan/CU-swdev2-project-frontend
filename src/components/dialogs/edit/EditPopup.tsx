'use client';
import { Dialog, DialogTitle, Button } from '@mui/material';
import DateDentist from '../../DateDentist';
import { useState } from 'react';
import dayjs from 'dayjs';
import { BookingItem, dentistsProps } from '@/utils/interface';
import Status from '../../Status';
import toast from 'react-hot-toast';
import updateBooking from '@/libs/bookings/updateBooking';
import { useBookingsStore, useMyBookingStore } from '@/zustand/store';
import getBookings from '@/libs/bookings/getBookings';

export default function CreatePopup({
  open,
  onClose,
  defaultDentist,
  token,
  bookingID,
}: {
  open: boolean;
  onClose?: () => void;
  defaultDentist: string;
  token: string;
  bookingID: string;
}) {
  var now = new Date();
  const [date, setDate] = useState<Date>(now);
  const [dentist, setDentist] = useState<string>(defaultDentist);
  const success = () => toast.success('Booking updated');
  const fail = () => toast.error('Failed to update booking');
  const UpdateBooking = async () => {
    try {
      const res = await updateBooking({
        id: bookingID,
        bookingDate: date,
        token: token,
        dentist: dentist,
      });
      const bookings = (await getBookings(token)).data.map(
        (booking: BookingItem) => {
          const { _id, bookingDate, user, dentist } = booking;
          const { name: dName, _id: dId } = dentist;
          const newBooking = {
            _id,
            bookingDate,
            user,
            dentist: {
              name: dName,
              _id: dId,
            },
          };
          if (newBooking._id === bookingID) {
            useMyBookingStore.getState().setMyBooking(newBooking);
          }
          return newBooking;
        },
      );
      useBookingsStore.getState().setBookings(bookings);
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
          defaultDate={dayjs(date)}
        />
        <Button
          type='submit'
          variant='contained'
          className='bg-sky-600 w-full'
          onClick={UpdateBooking}
        >
          Submit
        </Button>
      </div>
    </Dialog>
  );
}
