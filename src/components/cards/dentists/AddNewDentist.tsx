'use client';

import { useRouter } from 'next/navigation';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function AddNewDentist() {
  const router = useRouter();

  return (
    <button
      className='flex flex-col h-[320px] w-[320px] justify-center
        items-center shadow-md rounded-lg gap-1 hover:shadow-xl hover:bg-white bg-white text-black'
      onClick={() => router.push('/dentists/create')}
    >
      <PersonAddIcon sx={{ fontSize: 120 }} className='relative right-1' />
      <p className='font-medium text-xl w-full'>Create Dentist</p>
    </button>
  );
}
