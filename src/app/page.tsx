import { Button } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-row items-center h-[92vh] w-[100vw]'>
      <div className='w-[50vw] h-[92vh]'>
        <div className='absolute bottom-0 left-0 bg-[#086CBD] h-[88vh] w-[42vw]'></div>
        <div className='absolute bottom-0 left-0 h-[92vh] w-[40vw]'>
          <Image
            src='/img/cover.png'
            alt='page-cover'
            layout='fill'
            objectFit='cover'
          ></Image>
        </div>
      </div>
      <div className='flex w-[50vw] h-[92vh] items-center justify-center'>
        <div className='flex flex-col w-3/5 h-fit text-5xl gap-4'>
          <div>Your great smile </div>
          <div>begins with</div>
          <div>a great dentist.</div>
          <div className='text-sm'>"Your Journey to a Brighter, Healthier Smile Starts Here"</div>
          <div className='flex justify-between '>
            <Button variant='contained' className='bg-sky-600 w-6/12 py-2'>
              Book now
            </Button>
            <Button variant='outlined' className='border-sky-600 w-5/12 py-2'>
              About
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
