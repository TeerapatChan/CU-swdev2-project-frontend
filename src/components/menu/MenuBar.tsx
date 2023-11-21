'use client';
import MenuItem from './MenuItem';
import MenuLogin from './MenuLogin';
import { userStore } from '@/zustand/store';
import { usePathname } from 'next/navigation';
export default function MenuBar() {
  const session = userStore((state) => state.userProfile);
  const pathname = usePathname()
  console.log(pathname)
  //state to check if user is logged in use session
  //check user or admin
  return (
    <div className='flex flex-row fixed top-0 left-0 right-0 z-20 bg-white h-[8vh] w-screen justify-around'>
      <div className='flex h-full text-2xl items-center justify-center mt-auto mb-auto font-Nova'>
        SMILE CLINIC
      </div>
      <div className='flex flex-row'>
        <MenuItem name='Home' refLink='/' isCurrentPath={pathname=='/'}></MenuItem>
        {session ? (
          <MenuLogin></MenuLogin>
        ) : (
          <MenuItem name='Booking' refLink='/dentists' isCurrentPath={pathname=='/dentists'}></MenuItem>
        )}
        <MenuItem name='My Booking' refLink='/mybooking' isCurrentPath={pathname=='/mybooking'}></MenuItem>
      </div>
      {/* check login or logout */}
      {session ? (
        <div className='flex h-full '>
          <MenuItem name='Log out' refLink='/signout' isCurrentPath={pathname=='/signout'}></MenuItem>
        </div>
      ) : (
        <div className='flex h-full '>
          <MenuItem name='Log in' refLink='/signin' isCurrentPath={pathname=='/signin'}></MenuItem>
        </div>
      )}
    </div>
  );
}
