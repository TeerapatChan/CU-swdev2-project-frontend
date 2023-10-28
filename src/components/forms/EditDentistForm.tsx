'use client';
import Button from '@mui/material/Button';
import Image from 'next/image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CustomTextField from '../CustomTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';

export default function EditDentistForm() {
  const mockImg = '/img/user.png';
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DentistSchema>({
    resolver: yupResolver(DentistYup),
    defaultValues: {
      name: '',
      tel: '',
      hospital: '',
      address: '',
      expertist: '',
    },
  });
  console.log(errors);
  const formSubmit = (data: DentistSchema) => {
    console.log(data);
  };
  return (
    <form
      className='w-[700px] h-[800px] flex flex-col gap-2 items-start justify-center 
    bg-white rounded-lg pr-24 pl-24 pb-5 mt-10 mb-10'
      onSubmit={handleSubmit(formSubmit)}
    >
      <div className='relative w-[160px] h-[160px] self-center mt-5 p-2'>
        <Image src={mockImg} alt='user' layout='fill'></Image>
        <div className='absolute bottom-2 right-4'>
          <CameraAltIcon
            className='bg-[#e6e6e6] w-8 h-8 p-1 rounded-full hover:cursor-pointer'
            style={{ color: '#4d4d4d' }}
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Name</p>
        <CustomTextField props={{ control, errors, label: 'name' }} />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Hospital</p>
        <CustomTextField props={{ control, errors, label: 'hospital' }} />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Address</p>
        <CustomTextField props={{ control, errors, label: 'address' }} />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Expertist</p>
        <CustomTextField props={{ control, errors, label: 'expertist' }} />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='text-base'>Tel.</p>
        <CustomTextField props={{ control, errors, label: 'tel' }} />
      </div>
      <Button
        type='submit'
        variant='contained'
        className='bg-sky-600 w-full mt-4'
      >
        Save Profile
      </Button>
    </form>
  );
}
