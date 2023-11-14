import { getServerSession } from 'next-auth/next';
import MenuItem from './MenuItem';
import getUserProfile from '@/libs/user/getUserProfile';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MenuLogin from './MenuLogin';

export default async function MenuBar() {
  const session = await getServerSession(authOptions);

  //state to check if user is logged in use session
  //check user or admin
  return (
    <div className='flex flex-row fixed top-0 left-0 right-0 z-20 bg-white h-[8vh] w-screen justify-around'>
      <div className='flex h-full text-lg items-center justify-center mt-auto mb-auto'>
        SMILECLINIC
      </div>
      <div className='flex flex-row'>
        <MenuItem name='Home' refLink='/'></MenuItem>
        {session ? (
          <MenuLogin></MenuLogin>
        ) : (
          <MenuItem name='Booking' refLink='/dentists'></MenuItem>
        )}
        <MenuItem name='My Booking' refLink='/mybooking'></MenuItem>
      </div>
      {/* check login or logout */}
      {session ? (
        <div className='flex h-full '>
          <MenuItem name='Log out' refLink='/api/auth/signout'></MenuItem>
        </div>
      ) : (
        <div className='flex h-full '>
          <MenuItem name='Log in' refLink='/signin'></MenuItem>
        </div>
      )}
    </div>
  );
}
