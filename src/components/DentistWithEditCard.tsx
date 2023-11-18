'use client';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import deleteDentist from '@/libs/dentists/deleteDentist';
import toast from 'react-hot-toast';

export default function DentistWithEditCard({
  profilePic,
  name,
  hospital,
  id,
  token,
}: {
  profilePic: string;
  name: string;
  hospital: string;
  id: string;
  token: string;
}) {
  const router = useRouter();
  const deletefunc = async () => {
    const success = () => toast.success(`Dentist ${name} Deleted`);
    try {
      const res = await deleteDentist({ id: id, token: token });
      success();
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // dont for get to add link to dentist profile
    <div className='flex flex-col h-[320px] w-[320px] justify-center items-center shadow-md rounded-lg bg-white gap-2'>
      <button className='relative w-full h-fit bottom-5' onClick={deletefunc}>
        <DeleteIcon className='absolute right-4 top-0 text-3xl' />
      </button>
      <div className='w-1/3 h-1/3 relative'>
        <Image
          src={profilePic}
          alt='dentist-profile-pic'
          layout='fill'
          objectFit='cover'
          className='rounded-full'
        ></Image>
      </div>

      <div className='flex flex-col py-2 items-center'>
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-lg'>{hospital}</p>
      </div>
      <div className='flex gap-5 w-[200px] h-[33px]'>
        <Button
          variant='contained'
          className='bg-sky-600 w-full'
          onClick={() => {
            router.push(`/dentists/edit/${id}`);
          }}
        >
          Edit
        </Button>
        <Button
          variant='outlined'
          className='border-sky-600 w-full border-2'
          onClick={() => {
            router.push(`/dentists/${id}`);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
}
