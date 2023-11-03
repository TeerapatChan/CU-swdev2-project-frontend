import { DentistSchema } from '@/utils/FormSchema';
import { Control, DeepMap, FieldErrors } from 'react-hook-form';
import CustomTextField from '../../CustomTextField';

export default function CreateDentistInput({
  control,
  errors,
}: {
  control: Control<DentistSchema>;
  errors: FieldErrors<DentistSchema>;
}) {
  return (
    <>
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
        <CustomTextField
          props={{ control, errors, label: 'tel', page: 'createDentist' }}
        />
      </div>
    </>
  );
}
