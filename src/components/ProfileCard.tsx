'use client';
import Image from 'next/image';
import CreateDialog from './dialogs/create/CreateDialog';
import BackIcon from './BackIcon';
import { useDentistStore } from '@/zustand/store';

export default async function ProfileCard({
  params,
  token,
}: {
  params: { id: string };
  token: string;
}) {
  const dentists = useDentistStore((state) => state.dentists);
  const dentistDetail = dentists.find((dentist) => dentist.id === params.id);

  if (dentistDetail === undefined) {
    return null;
  }

  return (
    <div className='flex flex-col bg-white w-[800px] h-[600px] justify-center items-center shadow-lg rounded-2xl gap-5 relative'>
      <BackIcon />
      <div className='w-[200px] h-[200px] relative'>
        <Image
          src={dentistDetail.picture}
          alt='dentist-profile-pic'
          fill
          className='rounded-full object-cover'
        ></Image>
      </div>
      <div className='text-2xl font-semibold'>{dentistDetail.name}</div>
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
          <p className='line-clamp-2'>
            <span className='font-semibold'>Address : </span>
            {dentistDetail.address}
          </p>
          <CreateDialog defaultDentist={dentistDetail.id} token={token} />
        </div>
      </div>
    </div>
  );
}
