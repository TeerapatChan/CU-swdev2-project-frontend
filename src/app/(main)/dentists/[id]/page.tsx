'use client';
import ProfileCard from '@/components/cards/dentists/ProfileCard';

export default function dentistProfile({ params }: { params: { id: string } }) {
  return (
    <main className='bg-[#F3F3F3] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
      <ProfileCard params={params}></ProfileCard>
    </main>
  );
}
