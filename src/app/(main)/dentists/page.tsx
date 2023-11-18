import DentistCard from '@/components/DentistCard';
import DentistsLogin from '@/components/DentistsLogin';
import getDentists from '@/libs/dentists/getDentists';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Status from '@/components/Status';
import { userStore } from '@/zustand/store';

export default async function Dentists() {
  const dentistsProfile = await getDentists();
  const session = userStore.getState().userProfile;
  console.log('this is for dentists page\n', session);
  return (
    <Suspense
      fallback={
        <div className='flex justify-center py-24'>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <div className='bg-[url("/img/background.png")] h-[92vh] flex justify-center'>
        <Status></Status>
        {session ? (
          <DentistsLogin></DentistsLogin>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
            {dentistsProfile.data.map((dentist: any) => (
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
