'use client';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Status from '@/components/Status';
import { useUserStore, useDentistStore } from '@/zustand/store';
import DentistsLogin from '@/components/cards/dentists/DentistsLogin';
import DentistCard from '@/components/cards/dentists/DentistCard';

export default function Dentists() {
  const dentists = useDentistStore((state) => state.dentists);
  const session = useUserStore((state) => state.userProfile);
  console.log('Dentists Component - dentists:', dentists);
  console.log('Dentists Component - session:', session);
  return (
    <Suspense
      fallback={
        <div className='flex justify-center py-24'>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <main className='bg-[#F3F3F3] h-fit flex justify-center'>
        <Status></Status>
        {session ? (
          <DentistsLogin dentists={dentists}></DentistsLogin>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
            {dentists.map((dentist: any) => (
              <DentistCard
                profilePic={dentist.picture}
                name={dentist.name}
                hospital={dentist.hospital}
                id={dentist.id}
                key={dentist.id}
              />
            ))}
          </div>
        )}
      </main>
    </Suspense>
  );
}
