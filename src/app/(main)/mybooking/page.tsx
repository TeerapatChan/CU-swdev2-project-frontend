import BookedCard from '@/components/BookedCard';
import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';

export default function MyBookingPage() {
  return (
    <Suspense
      fallback={
        <div className='flex justify-center py-24'>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <div className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center '>
        <BookedCard />
      </div>
   </Suspense>
  );
}
