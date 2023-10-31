import DentistWithEditCard from "@/components/DentistWithEditCard";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function DentistsForAdmin() {
  const demo = [
    { profilePic: '/img/cover.png', name: 'eiei', hospital: 'hos' },
    { profilePic: '/img/cover.png', name: 'eiei2', hospital: 'hos2' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
  ];
  return (
    <div className='bg-[url("/img/background.png")] bg-cover flex justify-center py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        <button className='flex flex-col h-[320px] w-[320px] justify-center
        items-center shadow-md rounded-lg gap-4 bg-white hover:shadow-lg'>
          <PersonAddIcon className='text-9xl relative right-4' />
          <p className="font-medium text-xl">Create Dentist</p>
        </button>
        {demo.map((dentist) => (
          <DentistWithEditCard
            profilePic={dentist.profilePic}
            name={dentist.name}
            hospital={dentist.hospital}
          />
        ))}
      </div>
    </div>
  );
}
