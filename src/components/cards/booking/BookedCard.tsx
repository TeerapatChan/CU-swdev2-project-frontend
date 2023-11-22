'use client';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import BackIcon from '../../BackIcon';
import EditDialog from '../../dialogs/edit/EditDialog';
import { useRouter } from 'next/navigation';
import {
  useMyBookingStore,
  useUserStore,
  useDentistStore,
  useBookingsStore,
} from '@/zustand/store';
import toast from 'react-hot-toast';
import deleteBooking from '@/libs/bookings/deleteBooking';
import { BookingItem } from '@/utils/interface';
import getBookings from '@/libs/bookings/getBookings';

export default function BookedCard() {
  const session = useUserStore((state) => state.userProfile);
  const router = useRouter();
  if (!session || !session.token)
    return (
      <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
        Please Login First
      </div>
    );

  const myBooking = useMyBookingStore((state) => state.myBooking);
  if (!myBooking) {
    return (
      <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
        No Booking
      </div>
    );
  }

  const dentists = useDentistStore((state) => state.dentists);
  const success = () => toast.success('Booking Deleted');
  const fail = () => toast.error('Failed to delete booking');

  const DeleteBooking = async () => {
    try {
      const res = await deleteBooking({
        id: myBooking._id,
        token: session.token,
      });
      let found = false;
      const bookings = (await getBookings(session.token)).data.map(
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
          if (newBooking._id === myBooking._id) {
            found = true;
          }
          return newBooking;
        },
      );
      useBookingsStore.getState().setBookings(bookings);
      router.push('/dentists');
      success();
      setTimeout(() => {
        if (!found) useMyBookingStore.getState().setMyBooking(null);
      }, 500);
    } catch (error) {
      fail();
      console.log(error);
    }
  };

  return (
    <div className='relative flex flex-col justify-center items-center bg-white w-[800px] h-[450px] shadow-lg rounded-2xl gap-4'>
      <BackIcon />
      <p className='font-semibold text-4xl'>Your Booking</p>
      <div className='flex flex-col w-[550px] h-fit gap-4 pt-10 text-xl'>
        <div className='flex flex-row justify-between'>
          <p className='text-[#777777]'>Name</p>
          <p>{session.name}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[#777777]'>Email</p>
          <p>{session.email}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[#777777]'>Tel</p>
          <p>{session.tel}</p>
        </div>

        <div className='flex flex-col w-[550px] h-fit gap-4 text-xl'>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Booking Date</p>
            <p>{dayjs(myBooking.bookingDate).format('DD/MM/YYYY')}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Dentist</p>
            <p>{myBooking.dentist.name}</p>
          </div>
        </div>
        <div className='flex flex-row justify-between w-full gap-16 pt-5'>
          <EditDialog
            defaultDentist={myBooking.dentist._id}
            token={session.token}
            bookingID={myBooking._id}
          />
          <Button
            variant='outlined'
            color='error'
            className='w-full p-2 border-2'
            onClick={DeleteBooking}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
