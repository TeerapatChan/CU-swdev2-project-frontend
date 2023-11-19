import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileCard from '@/components/ProfileCard';
import { getServerSession } from 'next-auth';

export default async function dentistProfile({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token)
    return (
      <main className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          Please Login First
        </div>
      </main>
    );
  const token = session.user.token;
  return (
    <main className='mt-[8vh] bg-[url("/img/background.png")] bg-cover flex justify-center items-center h-[92vh] w-sereen '>
      <ProfileCard params={params} token={token}></ProfileCard>
    </main>
  );
}
