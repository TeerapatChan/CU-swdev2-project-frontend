'use client';
import Button from '@mui/material/Button';
import Image from 'next/image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CustomTextField from '../CustomTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DentistSchema } from '@/utils/FormSchema';
import { DentistYup } from '@/utils/YupSchema';
import createDentist from '@/libs/dentists/createDentist';
import { useRouter } from 'next/navigation';

<<<<<<< Updated upstream:src/components/forms/CreateDentistForm.tsx
export default function CreateDentistForm() {
  const mockImg = '/img/user.png';
||||||| Stash base:src/components/forms/CreateDentist/CreateDentistForm.tsx
export default function CreateDentistForm({ token }: { token: string }) {
  const mockImg = '/img/user.png';
  const [selectedImage, setSelectedImage] = useState<File>();
  const [url, setUrl] = useState<string>('');
=======
export default function CreateDentistForm({ token }: { token: string }) {
  const [selectedImage, setSelectedImage] = useState<File>();
>>>>>>> Stashed changes:src/components/forms/CreateDentist/CreateDentistForm.tsx
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
  console.log(errors);
  const formSubmit = async (data: DentistSchema) => {
    console.log(data);
    try {
      const result = await createDentist({
        name: data.name,
        tel: data.tel,
        hospital: data.hospital,
        address: data.address,
        expertist: data.expertist,
<<<<<<< Updated upstream:src/components/forms/CreateDentistForm.tsx
        picture: '',
||||||| Stash base:src/components/forms/CreateDentist/CreateDentistForm.tsx
        picture: url,
        token: token,
=======
        picture: '/img/user.png',
        token: token,
>>>>>>> Stashed changes:src/components/forms/CreateDentist/CreateDentistForm.tsx
      });
      console.log(data);
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
        <CustomTextField
          props={{ control, errors, label: 'tel', page: 'createDentist' }}
        />
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
