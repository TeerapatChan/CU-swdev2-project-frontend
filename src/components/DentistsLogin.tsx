import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/user/getUserProfile';
import { getServerSession } from 'next-auth';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DentistWithEditCard from './DentistWithEditCard';
import DentistCard from './DentistCard';
import getDentists from '@/libs/dentists/getDentists';
import AddNewDentist from './AddNewDentist';

export default async function DentistsLogin() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  console.log(profile);
  const dentistsProfile = await getDentists();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-[4vh]'>
      {profile.data.role == 'admin' ? <AddNewDentist></AddNewDentist> : null}
      {profile.data.role == 'admin'
        ? dentistsProfile.data.map((dentist: any) => (
            <DentistWithEditCard
              profilePic={dentist.picture}
              name={dentist.name}
              hospital={dentist.hospital}
              id={dentist.id}
              token={session.user.token}
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
