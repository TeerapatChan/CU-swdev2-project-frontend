'use client';
import UserBooking from '@/components/UserBooking';
import { BookingItem } from '@/utils/interface';
import StoreInitializer from '@/zustand/StoreInitializer';
import { useBookingsStore, userStore } from '@/zustand/store';
import { useEffect, useState } from 'react';

export default function UsersBooking() {
  const session = userStore((state) => state.userProfile);
  const bookings = useBookingsStore((state) => state.bookings);
  if (!session || !session.token)
    return (
      <div className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          Please Login First
        </div>
      </div>
    );

  if (bookings.length == 0)
    return (
      <div className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          No User Booking Found
        </div>
      </div>
    );
  return (
    <div className='bg-[url("/img/background.png")] h-full bg-no-repeat bg-scroll'>
      <div className='w-full flex flex-col justify-center items-center gap-8 p-8'>
        {bookings.map((booking: BookingItem) => (
          <UserBooking
            bookingDate={booking.bookingDate}
            patientName={booking.user.name}
            defaultDentist={booking.dentist._id}
            id={booking._id}
            token={session.token}
          />
        ))}
      </div>
    </div>
  );
}
