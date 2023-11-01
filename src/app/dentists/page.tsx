import DentistCard from '@/components/DentistCard';
import DentistWithEditCard from '@/components/DentistWithEditCard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/user/getUserProfile';
import DentistsLogin from '@/components/DentistsLogin';
import getDentist from '@/libs/dentists/getDentist';

export default async function Dentists() {

    const session = await getServerSession(authOptions);
    const dentistsProfile = await getDentist();
  return (
    <div className='bg-[url("/img/background.png")] bg-cover flex justify-center py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'> 
        {
            session?
                <DentistsLogin></DentistsLogin>:
                dentistsProfile.map((dentist:any) => (
                <DentistCard
                    profilePic={dentist.profilePic}
                    name={dentist.name}
                    hospital={dentist.hospital}
                /> ))
        }
      </div>
    </div>
  );
}
