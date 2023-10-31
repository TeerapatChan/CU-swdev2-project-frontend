
import Image from 'next/image';
export default function DentistCard({profilePic, name, hospital}:{profilePic:string, name:string, hospital:string}) {
return (
  // dont for get to add link to dentist profile
  <button className='flex flex-col h-[320px] w-[320px] justify-center items-center shadow-md rounded-lg gap-4 bg-white'>
    <div className='w-1/3 h-1/3 relative'>
      <Image
        src={profilePic}
        alt='dentist-profile-pic'
        layout='fill'
        objectFit='cover'
        className='rounded-full'
      ></Image>
    </div>
    
    <div className='flex flex-col gap-2 p-8'>
      <p className='text-xl font-bold'>{name}</p>
      <p className='text-lg'>{hospital}</p>
    </div>
  </button>
);
}