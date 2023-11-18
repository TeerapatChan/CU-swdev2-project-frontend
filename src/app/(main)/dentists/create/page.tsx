import CreateDentistForm from '@/components/forms/CreateDentist/CreateDentistForm';
import { userStore } from '@/zustand/store';

export default function CreateDentistPage() {
  const session = userStore.getState().userProfile;
  console.log('this for create', session);
  if (!session || !session.token) return null;
  if (session.role !== 'admin') return null;

  return (
    <div className="mt-[8vh] bg-[url('/img/main-bg.png')] h-[120vh] bg-cover flex justify-center items-center">
      <CreateDentistForm token={session.token} />
    </div>
  );
}
