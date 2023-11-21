'use client';
import CreateDentistForm from '@/components/forms/create/CreateDentistForm';
import { useUserStore } from '@/zustand/store';

export default function CreateDentistPage() {
  const session = useUserStore((state) => state.userProfile);
  if (!session || !session.token) return null;
  if (session.role !== 'admin') return null;

  return (
    <main className='bg-[#F3F3F3] h-fit flex justify-center items-center'>
      <CreateDentistForm token={session.token} />
    </main>
  );
}
