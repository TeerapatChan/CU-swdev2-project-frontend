import EditDentistForm from '@/components/forms/EditDentist/EditDentistForm';
import getDentist from '@/libs/dentists/getDentist';
import { userStore } from '@/zustand/store';

export default async function EditDentistPage({
  params,
}: {
  params: { id: string };
}) {
  const session = userStore.getState().userProfile;
  console.log(session);
  if (!session || !session.token) return null;
  if (session.role !== 'admin') return null;

  const id = params.id;
  const dentist = (await getDentist(id)).data;
  const picture = dentist.picture;

  const defaultValues = {
    name: dentist.name,
    tel: dentist.tel,
    hospital: dentist.hospital,
    address: dentist.address,
    expertist: dentist.expertist,
  };

  return (
    <div className="mt-[8vh] bg-[url('/img/main-bg.png')] h-[120vh] bg-cover flex justify-center items-center">
      <EditDentistForm
        defaultValues={defaultValues}
        picture={picture}
        token={session.token}
        id={params.id}
      />
    </div>
  );
}
