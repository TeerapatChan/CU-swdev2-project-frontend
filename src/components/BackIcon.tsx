'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function BackIcon() {
  const router = useRouter();
  const backward = () => {
    router.back();
  };
  return (
    <div
      className='absolute left-8 top-8 hover:cursor-pointer'
      onClick={backward}
    >
      <ArrowBackIcon className='w-8 h-8' />
    </div>
  );
}
