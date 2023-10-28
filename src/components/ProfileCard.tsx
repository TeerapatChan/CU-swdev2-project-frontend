import Image from 'next/image';
export default function ProfileCard({params}:{params:{did:string}}) { 
// getDentist for image and other info
const demo = {
  profilePic: '/img/cover.png',
  name: 'Mr. Sandee Sansao',
  hospital: 'Chulalongkorn University Hospital',
  expertist: 'Example expertist',
  tel: '1234567890',
  address:
    '19 Soi Ekkamai 4 Sukhumvit 63 Rd.Phra Khanong NueaWatthana Bangkok 10110',
};
return (
  <div className='flex flex-col justify-center items-center bg-white w-[800px] h-[600px] justify-center items-center shadow-lg rounded-2xl gap-4'>
    <div className='w-[200px] h-[200px] relative'>
      <Image
        src={demo.profilePic}
        alt='dentist-profile-pic'
        layout='fill'
        objectFit='cover'
        className='rounded-full'
      ></Image>
    </div>
    <div className='text-2xl font-semibold'>{demo.name}</div>
    <div className='w-[550px]'>
      <hr className=' bg-black h-[2px] border-0'></hr>
      <div className=' flex flex-col gap-2 text-lg pt-8'>
        <p className='line-clamp-1'>
          <span className='font-semibold'>Hospital : </span>
          {demo.hospital}
        </p>
        <p className='line-clamp-1'>
          <span className='font-semibold'>Expertist : </span>
          {demo.expertist}
        </p>
        <p className='line-clamp-1'>
          <span className='font-semibold'>Tel : </span>
          {demo.tel}
        </p>
        <p className='line-clamp-2'>
          <span className='font-semibold'>Address : </span>
          {demo.address}
        </p>
      </div>
    </div>
  </div>
);
}
