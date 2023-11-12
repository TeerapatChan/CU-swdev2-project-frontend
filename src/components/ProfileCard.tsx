import getDentist from '@/libs/dentists/getDentist';
import Image from 'next/image';
import MakeApptDialog from './MakeApptDialog';
import getDentists from '@/libs/dentists/getDentists';
export default async function ProfileCard({params}:{params:{id:string}}) { 
// getDentist for image and other info
const dentists = (await getDentists()).data;
const Detail = await getDentist(params.id);
const dentistDetail = Detail.data;
return (
  <div className='flex flex-col bg-white w-[800px] h-[600px] justify-center items-center shadow-lg rounded-2xl gap-5'>
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
      <div className=' flex flex-col gap-2 text-lg '>
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
        <MakeApptDialog defaultDentist={dentistDetail.id} dentists={dentists} ></MakeApptDialog>
      </div>
    </div>
  </div>
);
}
