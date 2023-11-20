'use client';
import Image from 'next/image';
import SignInForm from '@/components/forms/SignInForm';

export default function SignInPage() {
  return (
    <main>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <div className='bg-[#F3F3F3] h-screen  flex justify-center items-center'>
        <div className='w-4/5 h-4/5 bg-white shadow-xl rounded-xl flex flex-row'>
          <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
            <p className='font-medium text-3xl text-center font-Nova'>
              SMILE CLINIC
            </p>
            <SignInForm />
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <div className='w-full h-2/3 relative'>
              <Image
                src='/img/sign-in-pic.jpg'
                layout='fill'
                objectFit='cover'
                alt='sign-up'
                className='rounded-r-xl'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
