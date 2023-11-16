'use client'
import Image from 'next/image';
import SignUpForm from '@/components/forms/SignUpForm';

export default function SignUpPage() {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    <div className="bg-[url('/img/sign-up-background.png')] h-screen bg-cover flex justify-center items-center">
      <div className='w-4/5 h-4/5 bg-white shadow-xl rounded-xl flex flex-row'>
        <div className='w-4/6 flex flex-col justify-center items-center gap-5'>
          <p className='font-medium text-4xl text-center'>Smile Clinic</p>
          <SignUpForm />
        </div>
        <div className='w-2/6 relative'>
          <Image
            src='/img/sign-up-pic.png'
            layout='fill'
            objectFit='cover'
            alt='sign-up'
            className='rounded-r-xl'
          ></Image>
        </div>
      </div>
    </div>
    </div>
  );
}
