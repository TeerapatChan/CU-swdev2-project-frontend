
import EditDentistForm from '@/components/forms/EditDentist/EditDentistForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/user/getUserProfile';
import getDentist from '@/libs/dentists/getDentist';

export default async function EditDentistPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = (await getUserProfile(session.user.token)).data;
  if (profile.role !== 'admin') return null;
  const id = params.id;
  const dentist = (await getDentist({ id })).data;

  const defaultValues = {
    name: dentist.name,
    tel: dentist.tel,
    hospital: dentist.hospital,
    address: dentist.address,
    expertist: dentist.expertist,
  };
  console.log(dentist);

  return (
    <div className="bg-[url('/img/main-bg.png')] h-[120vh] bg-cover flex justify-center items-center">
      <EditDentistForm
        defaultValues={defaultValues}
        picture='/img/user.png'
        token={session.user.token}
        id={id}
      />
    </div>
  );
}
