import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/user/getUserProfile';
import { getServerSession } from 'next-auth';
import DentistWithEditCard from './DentistWithEditCard';
import DentistCard from './DentistCard';
import getDentists from '@/libs/dentists/getDentists';
import AddNewDentist from './AddNewDentist';
import { userStore } from '@/zustand/store';

export default async function DentistsLogin() {
  const session = userStore.getState().userProfile;
  console.log(
    '----------------------------- this is for dentistlogin\n',
    session,
  );
  if (!session || !session.token) return null;
  const dentistsProfile = await getDentists();

  return (
<<<<<<< Updated upstream
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
      {profile.data.role == 'admin' ? <AddNewDentist></AddNewDentist> : null}
      {profile.data.role == 'admin'
||||||| Stash base
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
      {profile.data.role == 'admin' ? <AddNewDentist></AddNewDentist> : null}
      {profile.data.role == 'admin'
=======
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
      {session.role == 'admin' ? <AddNewDentist></AddNewDentist> : null}
      {session.role == 'admin'
>>>>>>> Stashed changes
        ? dentistsProfile.data.map((dentist: any) => (
            <DentistWithEditCard
              profilePic={dentist.picture}
              name={dentist.name}
              hospital={dentist.hospital}
              id={dentist.id}
              token={session.token}
            />
          ))
        : dentistsProfile.data.map((dentist: any) => (
            <DentistCard
              profilePic={dentist.picture}
              name={dentist.name}
              hospital={dentist.hospital}
              id={dentist.id}
            />
          ))}
    </div>
  );
}
