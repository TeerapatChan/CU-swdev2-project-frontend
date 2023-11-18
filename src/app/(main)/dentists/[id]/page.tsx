import ProfileCard from '@/components/ProfileCard';
import { userStore } from '@/zustand/store';

export default function dentistProfile({ params }: { params: { id: string } }) {
  const session = userStore.getState().userProfile;
  console.log('this for dentist profile page', session);
  if (!session || !session.token)
    return (
      <div className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          Please Login First
        </div>
      </div>
    );
  const token = session.token;
  return (
    <div className='mt-[8vh] bg-[url("/img/background.png")] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
      <ProfileCard params={params} token={token}></ProfileCard>
    </div>
  );
}
