'use client';
import DentistWithEditCard from './DentistWithEditCard';
import DentistCard from './DentistCard';
import getDentists from '@/libs/dentists/getDentists';
import AddNewDentist from './AddNewDentist';
import { userStore } from '@/zustand/store';
import { DentistDetail } from '@/utils/interface';

export default async function DentistsLogin({
  dentists,
}: {
  dentists: DentistDetail[] | undefined;
}) {
  const session = userStore((state) => state.userProfile);
  if (!session || !session.token) return null;
  console.log(dentists);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
      {session.role == 'admin' ? <AddNewDentist></AddNewDentist> : null}
      {dentists
        ? session.role == 'admin'
          ? dentists.map((dentist: any) => (
              <DentistWithEditCard
                profilePic={dentist.picture}
                name={dentist.name}
                hospital={dentist.hospital}
                id={dentist.id}
                token={session.token}
              />
            ))
          : dentists.map((dentist: any) => (
              <DentistCard
                profilePic={dentist.picture}
                name={dentist.name}
                hospital={dentist.hospital}
                id={dentist.id}
              />
            ))
        : null}
    </div>
  );
}
