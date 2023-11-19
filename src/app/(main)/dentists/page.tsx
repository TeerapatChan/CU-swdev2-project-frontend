'use client';
import DentistCard from '@/components/DentistCard';
import DentistsLogin from '@/components/DentistsLogin';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Status from '@/components/Status';
import { userStore, useDentistStore } from '@/zustand/store';

export default function Dentists() {
  const dentists = useDentistStore((state) => state.dentists);
  const session = userStore((state) => state.userProfile);
  return (
    <Suspense
      fallback={
        <div className='flex justify-center py-24'>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <div className='bg-[url("/img/background.png")] flex justify-center'>
        <Status></Status>
        {session ? (
          <DentistsLogin dentists={dentists}></DentistsLogin>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
            {dentists.length}
            {dentists.map((dentist: any) => (
              <DentistCard
                profilePic={dentist.picture}
                name={dentist.name}
                hospital={dentist.hospital}
                id={dentist.id}
              />
            ))}
          </div>
        )}
      </div>
    </Suspense>
  );
}
