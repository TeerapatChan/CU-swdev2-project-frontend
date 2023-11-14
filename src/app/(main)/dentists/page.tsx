import DentistCard from '@/components/DentistCard';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import DentistsLogin from '@/components/DentistsLogin';
import getDentists from '@/libs/dentists/getDentists';

export default async function Dentists() {
  const session = await getServerSession(authOptions);
  const dentistsProfile = await getDentists();
  return (
    <div className='mt-[8vh] bg-[url("/img/background.png")] bg-cover flex justify-center py-12'>
      {session ? (
        <DentistsLogin></DentistsLogin>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
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
  );
}
