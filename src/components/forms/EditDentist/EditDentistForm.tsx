'use client';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import EditDentistInput from './EditDentistInput';
import EditDentistImage from './EditDentistImage';
import { useEdgeStore } from '@/libs/edgestore';
import updateDentist from '@/libs/dentists/updateDentist';
import toast from 'react-hot-toast';
import Status from '@/components/Status';
import BackIcon from '@/components/BackIcon';

export default function EditDentistForm({
  defaultValues,
  picture,
  token,
  id,
}: {
  defaultValues: DentistSchema;
  picture: string;
  token: string;
  id: string;
}) {
  const [selectedImage, setSelectedImage] = useState<File>();
  const router = useRouter();
  const { edgestore } = useEdgeStore();
  const notify = () => toast.success('Update success');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DentistSchema>({
    resolver: yupResolver(DentistYup),
    defaultValues: {
      ...defaultValues,
    },
  });

  const formSubmit = async (data: DentistSchema) => {
    try {
      if (selectedImage) {
        const res = await edgestore.publicFiles.upload({
          file: selectedImage,
          options: {
            replaceTargetUrl: picture,
          },
        });
        picture = res.url;
      }
      const res = await updateDentist({
        id: id,
        updatedData: {
          name: data.name,
          tel: data.tel,
          hospital: data.hospital,
          address: data.address,
          expertist: data.expertist,
        },
        picture: picture,
        token: token,
      });
      notify();
    } catch (error) {
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
      <EditDentistImage
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
        defaultImage={picture}
      />
      <EditDentistInput control={control} errors={errors} />
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
