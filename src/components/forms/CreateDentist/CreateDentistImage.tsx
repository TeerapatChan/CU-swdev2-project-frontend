import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Image from 'next/image';

export default function CreateDentistImage({
  setSelectedImage,
  selectedImage,
}: {
  setSelectedImage: Function;
  selectedImage: File | undefined;
}) {
  const mockImg = '/img/user.png';
  return (
    <>
      <div className='relative w-[160px] h-[160px] self-center mt-5 p-2'>
        <Image
          src={!!selectedImage ? URL.createObjectURL(selectedImage) : mockImg}
          alt='user'
          layout='fill'
          className='rounded-full'
        ></Image>
        <div className='absolute bottom-2 right-4'>
          <label htmlFor='fileInput'>
            <CameraAltIcon
              className='bg-[#e6e6e6] w-8 h-8 p-1 rounded-full hover:cursor-pointer'
              style={{ color: '#4d4d4d' }}
            />
          </label>
          <input
            type='file'
            id='fileInput'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e: any) => {
              setSelectedImage(e.target.files[0]);
            }}
            required
          />
        </div>
      </div>
    </>
  );
}
