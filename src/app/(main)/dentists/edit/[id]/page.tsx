'use client';
import EditDentistForm from '@/components/forms/EditDentist/EditDentistForm';
import getDentist from '@/libs/dentists/getDentist';
import { userStore, useDentistStore } from '@/zustand/store';
import { useEffect, useState } from 'react';
import { DentistDetail } from '@/utils/interface';

export default function EditDentistPage({
  params,
}: {
  params: { id: string };
}) {
  const session = userStore((state) => state.userProfile);
  const [dentist, setDentist] = useState<DentistDetail>();
  if (!session || !session.token) return null;
  if (session.role !== 'admin') return null;

  useEffect(() => {
    const fetchData = async () => {
      const dentist = (await getDentist(params.id)).data;
      setDentist(dentist);
    };
    fetchData();
  }, []);

  if (!dentist) return null;
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
