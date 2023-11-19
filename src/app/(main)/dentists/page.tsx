import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import getDentists from '@/libs/dentists/getDentists';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Status from '@/components/Status';
import dynamic from 'next/dynamic';
const DentistCard = dynamic(() => import('@/components/DentistCard'), {
  ssr: false,
});
const DentistsLogin = dynamic(() => import('@/components/DentistsLogin'), {
  ssr: false,
});
export default async function Dentists() {
  const session = await getServerSession(authOptions);
  const dentistsProfile = await getDentists();
  return (
      <Suspense
        fallback={
          <div className='flex justify-center py-24'>
            <CircularProgress></CircularProgress>
          </div>
        }
      >
        <main className='bg-[url("/img/background.png")] h-[92vh] flex justify-center'>
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
                  key={dentist.id}
                />
              ))}
            </div>
          )}
        </main>
      </Suspense>
  );
}
