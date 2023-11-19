'use client';
import { useState } from 'react';
import DateDentist from './DateDentist';
import { Button } from '@mui/material';
import updateBooking from '@/libs/bookings/updateBooking';
import Status from './Status';
import toast from 'react-hot-toast';
import deleteBooking from '@/libs/bookings/deleteBooking';
import { useMyBookingStore, useBookingsStore } from '@/zustand/store';
import { useRouter } from 'next/navigation';
import { BookingItem } from '@/utils/interface';
import getBookings from '@/libs/bookings/getBookings';
import dayjs from 'dayjs';

type UserBookingProps = {
  bookingDate: Date;
  patientName: string;
  defaultDentist: string;
  id: string;
  token: string;
};

export default function UserBooking(props: UserBookingProps) {
  const { bookingDate, patientName, defaultDentist, id, token } = props;
  const [date, setDate] = useState<Date>(bookingDate);
  const [dentistId, setDentistId] = useState(defaultDentist);
  const updateSuccess = () => toast.success('Update Success');
  const updateFail = () => toast.error('Update Failed');
  const deleteSuccess = () => toast.success('Delete Success');
  const deleteFail = () => toast.error('Delete Failed');
  const router = useRouter();
  const update = async () => {
    try {
      const res = await updateBooking({
        id: id,
        dentist: dentistId || '',
        bookingDate: date,
        token: token,
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
          if (newBooking._id === id) {
            useMyBookingStore.setState({ myBooking: newBooking });
          }
          return newBooking;
        },
      );
      useBookingsStore.setState({ bookings: bookings });
      updateSuccess();
    } catch {
      updateFail();
    }
  };

  const remove = async () => {
    try {
      const res = await deleteBooking({
        id: id,
        token: token,
      });
      let found = false;
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
          if (newBooking._id === id) {
            found = true;
          }
          return newBooking;
        },
      );
      if (!found) useMyBookingStore.setState({ myBooking: null });
      useBookingsStore.setState({ bookings: bookings });
      deleteSuccess();
    } catch {
      deleteFail();
    }
  };
  return (
    <div
      className='bg-white w-[700px] h-64 flex flex-col items-center justify-center gap-5 pr-24 pl-24
    rounded-lg shadow-lg'
    >
      <Status />
      <div className='text-2xl font-semibold flex flex-row gap-2'>
        <p>Patient: </p>
        <p>{patientName}</p>
      </div>
      <DateDentist
        onDateChange={(e) => setDate(e)}
        onDentistChange={(e) => setDentistId(e)}
        defaultDentist={defaultDentist}
        defaultDate={dayjs(bookingDate)}
      />
      <div className='flex flex-row gap-5 w-full'>
        <Button
          variant='contained'
          className='bg-sky-600 w-full'
          onClick={update}
        >
          Save
        </Button>
        <Button
          variant='outlined'
          color='error'
          className='w-full border-2'
          onClick={remove}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
