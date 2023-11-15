import getDentist from '@/libs/dentists/getDentist';
import Image from 'next/image';
import CreateDialog from './dialogs/create/CreateDialog';
import getDentists from '@/libs/dentists/getDentists';
import BackIcon from './BackIcon';

export default async function ProfileCard({
  params,
  token,
}: {
  params: { id: string };
  token: string;
}) {
  const dentists = (await getDentists()).data;
  const dentistDetail = (await getDentist(params.id)).data;
  const dentists_and_default = {
    defaultDentist: dentistDetail.id,
    dentists: dentists,
  };

  return (
    <div className='flex flex-col bg-white w-[800px] h-[600px] justify-center items-center shadow-lg rounded-2xl gap-5 relative'>
      <BackIcon />
      <div className='w-[200px] h-[200px] relative'>
        <Image
          src={dentistDetail.picture}
          alt='dentist-profile-pic'
          layout='fill'
          objectFit='cover'
          className='rounded-full'
        ></Image>
      </div>
      <div className='text-2xl font-semibold'>{dentistDetail.name}</div>
      <div className='flex flex-col w-[550px] gap-8'>
        <hr className=' bg-black h-[2px] border-0'></hr>
        <div className=' flex flex-col gap-3 text-lg '>
          <p className='line-clamp-1'>
            <span className='font-semibold'>Hospital : </span>
            {dentistDetail.hospital}
          </p>
          <p className='line-clamp-1'>
            <span className='font-semibold'>Expertist : </span>
            {dentistDetail.expertist}
          </p>
          <p className='line-clamp-1'>
            <span className='font-semibold'>Tel : </span>
            {dentistDetail.tel}
          </p>
          <p className='line-clamp-2'>
            <span className='font-semibold'>Address : </span>
            {dentistDetail.address}
          </p>
          {/* not finished yet */}
          <CreateDialog dentists={dentists_and_default} token={token} />
        </div>
      </div>
    </div>
  );
}
