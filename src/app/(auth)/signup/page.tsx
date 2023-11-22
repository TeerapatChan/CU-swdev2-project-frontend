'use client';
import Image from 'next/image';
import SignUpForm from '@/components/forms/SignUpForm';

export default function SignUpPage() {
  return (
    <main>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <div className='bg-[#F3F3F3] h-screen bg-cover flex justify-center items-center'>
        <div className='w-4/5 h-4/5 bg-white shadow-xl rounded-xl flex flex-row'>
          <div className='w-4/6 flex flex-col justify-center items-center gap-5'>
            <p className='font-medium text-3xl text-center font-Nova'>
              SMILE CLINIC
            </p>
            <SignUpForm />
          </div>
          <div className='w-2/6 relative'>
            <Image
              src='/img/sign-up-pic.png'
              layout='fill'
              objectFit='cover'
              alt='sign-up'
              className='rounded-r-xl'
              loading='lazy'
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
