'use client';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useRouter } from 'next/navigation';

export default function AddNewDentist() {
  const router = useRouter();
  return (
    <button
      className='flex flex-col h-[320px] w-[320px] justify-center
        items-center shadow-md rounded-lg gap-4 hover:shadow-xl hover:bg-white bg-white text-black'
      onClick={() => router.push('/dentists/create')}
    >
      <PersonAddIcon className='text-9xl relative right-4' />
      <p className='font-medium text-xl'>Create Dentist</p>
    </button>
  );
}
