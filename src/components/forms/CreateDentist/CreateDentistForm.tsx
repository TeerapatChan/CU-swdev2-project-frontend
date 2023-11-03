'use client';
import Button from '@mui/material/Button';
import Image from 'next/image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';
import createDentist from '@/libs/dentists/createDentist';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CreateDentistInput from './CreateDentistInput';
import CreateDentistImage from './CreateDentistImage';

export default function CreateDentistForm({ token }: { token: string }) {
  const mockImg = '/img/user.png';
  const [selectedImage, setSelectedImage] = useState<File>();
  const [url, setUrl] = useState<string>('');
  const router = useRouter();
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

  const formSubmit = async (data: DentistSchema) => {
    try {
      const result = await createDentist({
        name: data.name,
        tel: data.tel,
        hospital: data.hospital,
        address: data.address,
        expertist: data.expertist,
        picture: url,
        token: token,
      });
      console.log(data);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='w-[700px] h-[800px] flex flex-col gap-2 items-start justify-center 
    bg-white rounded-lg pr-24 pl-24 pb-5 mt-10 mb-10'
      onSubmit={handleSubmit(formSubmit)}
    >
      <CreateDentistImage
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
      <CreateDentistInput control={control} errors={errors} />
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
