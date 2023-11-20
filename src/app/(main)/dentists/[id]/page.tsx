'use client';
import ProfileCard from '@/components/ProfileCard';
import ViewProfileCard from '@/components/ViewProfileCard';
import { userStore } from '@/zustand/store';

export default function dentistProfile({
  params,
}: {
  params: { id: string };
}) {
  const session = userStore((state) => state.userProfile);
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
