
import CreateDentistForm from '@/components/forms/CreateDentist/CreateDentistForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/user/getUserProfile';

export default async function CreateDentistPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = (await getUserProfile(session.user.token)).data;
  if (profile.role !== 'admin') return null;

  return (
    <div className="bg-[url('/img/main-bg.png')] h-[120vh] bg-cover flex justify-center items-center">
      <CreateDentistForm token={session.user.token} />
    </div>
  );
}
