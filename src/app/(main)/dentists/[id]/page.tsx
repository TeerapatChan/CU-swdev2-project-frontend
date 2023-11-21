'use client';
import ProfileCard from '@/components/cards/dentists/ProfileCard';
import ViewProfileCard from '@/components/cards/dentists/ViewProfileCard';
import { useUserStore } from '@/zustand/store';

export default function dentistProfile({ params }: { params: { id: string } }) {
  const session = useUserStore((state) => state.userProfile);
  if (!session || !session.token)
    return (
      <main className='bg-[#F3F3F3] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
        <ViewProfileCard params={params} />
      </main>
    );
  const token = session.token;
  return (
    <main className='bg-[#F3F3F3] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
      <ProfileCard params={params} token={token}></ProfileCard>
    </main>
  );
}
