'use client';
import { BookingItem } from '@/utils/interface';
import StoreInitializer from '@/zustand/StoreInitializer';
import { useBookingsStore, userStore } from '@/zustand/store';
import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
const UserBooking = dynamic(() => import('@/components/UserBooking'), {
  ssr: false,
});
export default function UsersBooking() {
  const session = userStore((state) => state.userProfile);
  const bookings = useBookingsStore((state) => state.bookings);
  if (!session || !session.token) return (null);
  if (bookings.length == 0)
    return (
      <div className='bg-[#F3F3F3] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          Not Found User Booking
        </div>
      </div>
    );
  return (
    <Suspense
      fallback={
        <div className='flex justify-center py-24'>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <main className='w-full flex flex-col justify-center items-center gap-8 p-8 bg-[#F3F3F3] h-full bg-no-repeat bg-scroll'>
        {bookings.map((booking: BookingItem) => (
          <UserBooking
            bookingDate={booking.bookingDate}
            patientName={booking.user.name}
            defaultDentist={booking.dentist._id}
            id={booking._id}
            token={session.token}
          />
        ))}
      </main>
    </Suspense>
  );
}
