import EditDentistForm from '@/components/forms/EditDentistForm';

export default function EditDentistPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="bg-[url('/img/main-bg.png')] h-[120vh] bg-cover flex justify-center items-center">
      <EditDentistForm />
    </div>
  );
}
