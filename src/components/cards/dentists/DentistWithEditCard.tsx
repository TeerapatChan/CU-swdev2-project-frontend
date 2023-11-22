'use client';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import deleteDentist from '@/libs/dentists/deleteDentist';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDentistStore } from '@/zustand/store';

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
  const deleteDentistHandler = async () => {
    try {
      const res = await deleteDentist({ id: id, token: token });
      useDentistStore.getState().deleteDentist(id);
      toast.success(`Dentist: ${name} Deleted`);
      router.refresh();
    } catch (err) {
      console.log(err);
      toast.error('Error deleting dentist');
    }
  };

  const handleEditClick = () => {
    router.push(`/dentists/edit/${id}`);
  };

  const handleViewClick = () => {
    router.push(`/dentists/${id}`);
  };

  return (
    // dont for get to add link to dentist profile
    <div className='flex flex-col h-[320px] w-[320px] justify-center items-center shadow-md rounded-lg bg-white gap-2'>
      <button
        className='relative w-full h-fit bottom-5'
        onClick={deleteDentistHandler}
      >
        <DeleteIcon className='absolute right-4 top-0 text-3xl' />
      </button>
      <div className='w-[40%] h-[40%] relative'>
        <Image
          src={profilePic}
          alt='dentist-profile-pic'
          fill
          className='rounded-full object-cover'
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
            handleEditClick();
          }}
        >
          Edit
        </Button>
        <Button
          variant='outlined'
          className='border-sky-600 w-full border-2'
          onClick={() => {
            handleViewClick();
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
}
