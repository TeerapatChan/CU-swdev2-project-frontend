// import BookedCard from '@/components/BookedCard';
import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const BookedCard = dynamic(() => import('@/components/BookedCard'), {
  ssr: false,
});
export default function MyBookingPage() {
  return (
    <Suspense
      fallback={
        <div className='flex justify-center py-24'>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <main className='bg-[#F3F3F3] h-[92vh] bg-cover flex justify-center items-center '>
        <BookedCard />
      </main>
    </Suspense>
  );
}
