'use client';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';
import createDentist from '@/libs/dentists/createDentist';
import { useState } from 'react';
import CreateDentistInput from './CreateDentistInput';
import CreateDentistImage from './CreateDentistImage';
import { useEdgeStore } from '@/libs/edgestore';
import Status from '@/components/Status';
import toast from 'react-hot-toast';
import BackIcon from '@/components/BackIcon';
import { useDentistStore } from '@/zustand/store';
import getDentists from '@/libs/dentists/getDentists';

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
      const dentists = (await getDentists()).data;
      useDentistStore.setState({ dentists: dentists });
    } catch (error) {
      fail();
      console.log(error);
    }
  };

  return (
    <form
      className='w-[700px] h-[fit] flex flex-col gap-4 items-center bg-white rounded-lg relative my-4 py-8'
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
        className='bg-sky-600 w-[70%]'
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
