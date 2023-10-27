import Image from 'next/image';

export default function DentistCard({profilePic, name, hospital}:{profilePic:string, name:string, hospital:string}) {
return (
  <div className='flex h-[320px] w-[320px] justify-center items-center bg-black'>
    <div className='w-1/3 h-1/3 bg-sky-500 rounded-full relative'>
      <Image
        src={profilePic}
        alt='dentist-profile-pic'
        layout='fill'
        objectFit='cover'
        className='rounded-full'
      ></Image>
    </div>

  </div>
);
}