import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/user/getUserProfile";
import { getServerSession } from "next-auth";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DentistWithEditCard from "./DentistWithEditCard";
import DentistCard from "./DentistCard";
export default async function DentistsLogin(){
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;
    const profile = await getUserProfile(session.user.token);
     return (
       <div>
         {profile.data.role == 'admin' ? (
           <button
             className='flex flex-col h-[320px] w-[320px] justify-center
        items-center shadow-md rounded-lg gap-4 bg-white hover:shadow-lg'
           >
             <PersonAddIcon className='text-9xl relative right-4' />
             <p className='font-medium text-xl'>Create Dentist</p>
           </button>
         ) : null}
            {profile.data.role == 'admin'
           ? profile.map((dentist: any) => (
               <DentistWithEditCard
                 profilePic={dentist.profilePic}
                 name={dentist.name}
                 hospital={dentist.hospital}
               />
             ))
           : profile.map((dentist: any) => (
               <DentistCard
                 profilePic={dentist.profilePic}
                 name={dentist.name}
                 hospital={dentist.hospital}
               />
             ))}
       </div>
     );
}