'use client';
import Image from 'next/image';
import CreateDialog from '../../dialogs/create/CreateDialog';
import BackIcon from '../../BackIcon';
import { useDentistStore, useUserStore } from '@/zustand/store';

export default function ProfileCard({ params }: { params: { id: string } }) {
  const dentists = useDentistStore((state) => state.dentists);
  const dentistDetail = dentists.find((dentist) => dentist.id === params.id);
  const session = useUserStore((state) => state.userProfile);

  if (dentistDetail === undefined) {
    return null;
  }

  return (
    <div
      className='flex flex-col bg-white w-[800px] h-[600px] justify-center items-center 
    shadow-lg rounded-2xl gap-5 relative'
    >
      <BackIcon />
      <div className='w-[150px] h-[150px] relative'>
        <Image
          src={dentistDetail.picture}
          alt='dentist-profile-pic'
          fill
          className='rounded-full object-cover'
          loading='lazy'
        ></Image>
      </div>
      <div className='text-3xl font-semibold'>{dentistDetail.name}</div>
      <div className='flex flex-col w-[550px] gap-8'>
        <hr className=' bg-black h-[2px] border-0'></hr>
        <div className=' flex flex-col gap-3 text-lg '>
          <p className='line-clamp-1'>
            <span className='font-semibold'>Hospital : </span>
            {dentistDetail.hospital}
          </p>
          <p className='line-clamp-1'>
            <span className='font-semibold'>Expertist : </span>
            {dentistDetail.expertist}
          </p>
          <p className='line-clamp-1'>
            <span className='font-semibold'>Tel : </span>
            {dentistDetail.tel}
          </p>
          <p className='line-clamp-2 mb-2'>
            <span className='font-semibold'>Address : </span>
            {dentistDetail.address}
          </p>
          {session ? (
            <CreateDialog
              defaultDentist={dentistDetail.id}
              token={session.token}
            />
          ) : (
            <p className='line-clamp-1 font-thin text-[#777777] text-center'>
              Please access your account to schedule an booking
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
