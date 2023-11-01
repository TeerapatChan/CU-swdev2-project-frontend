import CreateDentistForm from '@/components/forms/CreateDentistForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function CreateDentistPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-[url('/img/main-bg.png')] h-[120vh] bg-cover flex justify-center items-center">
      <CreateDentistForm />
    </div>
  );
}
