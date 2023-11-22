import Image from 'next/image';
import Link from 'next/link';

export default function DentistCard({
  profilePic,
  name,
  hospital,
  id,
}: {
  profilePic: string;
  name: string;
  hospital: string;
  id: string;
}) {
  return (
    <Link href={`/dentists/${id}`}>
      <button
        className='flex flex-col h-[320px] w-[320px] justify-center items-center shadow-md 
    rounded-lg gap-4 bg-white hover:shadow-xl'
      >
        <div className='w-1/3 h-1/3 relative'>
          <Image
            src={profilePic}
            alt='dentist-profile-pic'
            fill
            className='rounded-full object-cover'
          ></Image>
        </div>

        <div className='flex flex-col gap-2 p-8'>
          <p className='text-xl font-bold'>{name}</p>
          <p className='text-lg'>{hospital}</p>
        </div>
      </button>
    </Link>
  );
}
