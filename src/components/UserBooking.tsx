'use client';
import { useState } from 'react';
import DateDentist from './DateDentist';
import { Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { dentistsProps } from '@/utils/interface';
import updateBooking from '@/libs/bookings/updateBooking';
import Status from './Status';
import toast from 'react-hot-toast';
import deleteBooking from '@/libs/bookings/deleteBooking';

type UserBookingProps = {
  bookingDate: Dayjs;
  patientName: string;
  dentists: dentistsProps;
  id: string;
  token: string;
};

export default function UserBooking(props: UserBookingProps) {
  const { bookingDate, patientName, dentists, id, token } = props;
  const [date, setDate] = useState<Dayjs>(bookingDate);
  const [dentistId, setDentistId] = useState(dentists.defaultDentist);
  const updateSuccess = () => toast.success('Update Success');
  const updateFail = () => toast.error('Update Failed');
  const deleteSuccess = () => toast.success('Delete Success');
  const deleteFail = () => toast.error('Delete Failed');

  const update = async () => {
    try {
      const res = await updateBooking({
        id: id,
        dentist: dentistId,
        bookingDate: date,
        token: token,
      });
      console.log('success');
      updateSuccess();
    } catch {
      updateFail();
      console.log('error');
    }
  };

  const cancle = async () => {
    try {
      const res = await deleteBooking({
        id: id,
        token: token,
      });
      deleteSuccess();
    } catch {
      deleteFail();
      console.log('error');
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
        dentists={dentists}
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
          onClick={cancle}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
