'use client';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';
import createDentist from '@/libs/dentists/createDentist';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CreateDentistInput from './CreateDentistInput';
import CreateDentistImage from './CreateDentistImage';
import { useEdgeStore } from '@/libs/edgestore';
import Status from '@/components/Status';
import toast from 'react-hot-toast';
import BackIcon from '@/components/BackIcon';

export default function CreateDentistForm({ token }: { token: string }) {
  const [selectedImage, setSelectedImage] = useState<File>();
  var url = '';
  const { edgestore } = useEdgeStore();
  const success = () => toast.success('Dentist Created');
  const fail = () => toast.error('Dentist Creation Failed');

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
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
      if (selectedImage) {
        const res = await edgestore.publicFiles.upload({
          file: selectedImage,
        });
        url = res.url;
      }
      const res = await createDentist({
        name: data.name,
        tel: data.tel,
        hospital: data.hospital,
        address: data.address,
        expertist: data.expertist,
        picture: url,
        token: token,
      });
      success();
      reset({
        name: '',
        tel: '',
        hospital: '',
        address: '',
        expertist: '',
      });
      setSelectedImage(undefined);
      console.log(data);
    } catch (error) {
      fail();
      console.log(error);
    }
  };

  return (
    <form
      className='w-[700px] h-[800px] flex flex-col gap-2 items-start justify-center 
    bg-white rounded-lg pr-24 pl-24 pb-5 mt-10 mb-10 relative'
      onSubmit={handleSubmit(formSubmit)}
    >
      <Status />
      <BackIcon />
      <CreateDentistImage
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
      <CreateDentistInput control={control} errors={errors} />
      <Button
        type='submit'
        variant='contained'
        className='bg-sky-600 w-full mt-4'
        onClick={() => {
          if (selectedImage === undefined) {
            toast.error('Please upload a profile picture');
          }
        }}
      >
        Save Profile
      </Button>
    </form>
  );
}
