import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileCard from '@/components/ProfileCard';
import getUserProfile from '@/libs/user/getUserProfile';
import { getServerSession } from 'next-auth';

export default async function dentistProfile({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const token = session.user.token;
  return (
    <div className='mt-[8vh] bg-[url("/img/background.png")] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
      <ProfileCard params={params} token={token}></ProfileCard>
    </div>
  );
}
