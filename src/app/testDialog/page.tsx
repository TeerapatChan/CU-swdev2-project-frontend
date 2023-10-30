import MakeApptDialog from '@/components/MakeApptDialog';
import getDentists from '@/libs/dentists/getDentists';

export default async function testDialog() {
  const dentists = (await getDentists()).data;
  return (
    <div>
      <MakeApptDialog dentists={dentists} />
    </div>
  );
}
