'use client';
import MenuItem from './MenuItem';
import MenuLogin from './MenuLogin';
import { userStore } from '@/zustand/store';

export default function MenuBar() {
  const session = userStore((state) => state.userProfile);

  //state to check if user is logged in use session
  //check user or admin
  return (
    <div className='flex flex-row fixed top-0 left-0 right-0 z-20 bg-white h-[8vh] w-screen justify-around'>
      <div className='flex h-full text-2xl items-center justify-center mt-auto mb-auto font-Nova'>
        SMILE CLINIC
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
          <MenuItem name='Log out' refLink='/signout'></MenuItem>
        </div>
      ) : (
        <div className='flex h-full '>
          <MenuItem name='Log in' refLink='/signin'></MenuItem>
        </div>
      )}
    </div>
  );
}
