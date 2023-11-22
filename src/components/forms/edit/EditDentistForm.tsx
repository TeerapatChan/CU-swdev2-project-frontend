'use client';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';
import { useState } from 'react';
import EditDentistInput from './EditDentistInput';
import EditDentistImage from './EditDentistImage';
import { useEdgeStore } from '@/providers/edgestore';
import updateDentist from '@/libs/dentists/updateDentist';
import toast from 'react-hot-toast';
import Status from '@/components/Status';
import BackIcon from '@/components/BackIcon';
import { useDentistStore, useMyBookingStore } from '@/zustand/store';

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
  const { edgestore } = useEdgeStore();
  const success = () => toast.success('Update success');
  const fail = () => toast.error('Update fail');
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
      const updatedData = {
        id: id,
        name: data.name,
        tel: data.tel,
        hospital: data.hospital,
        address: data.address,
        expertist: data.expertist,
        picture: picture,
      };
      const myBooking = useMyBookingStore.getState().myBooking;

      useDentistStore.getState().updateDentist(updatedData);
      if (myBooking && myBooking.dentist._id === id) {
        useMyBookingStore.getState().updateMyBooking({
          dentistID: id,
          dentistName: updatedData.name,
          bookingDate: myBooking.bookingDate,
        });
      }
      success();
    } catch (error) {
      fail();
      console.log(error);
    }
  };

  return (
    <form
      className='w-[700px] h-fit flex flex-col gap-4 items-center bg-white rounded-lg relative my-4 py-8'
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
      <Button type='submit' variant='contained' className='bg-sky-600 w-[70%]'>
        Save Profile
      </Button>
    </form>
  );
}
