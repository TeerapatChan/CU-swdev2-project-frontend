'use client';
import MenuItem from './MenuItem';
import MenuLogin from './MenuLogin';
import { userStore } from '@/zustand/store';
import { usePathname } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MenuIcon = dynamic(() => import('@mui/icons-material/Menu'), {
  ssr: false,
});

export default function MenuBar() {
  const session = userStore((state) => state.userProfile);
  const pathname = usePathname()
  console.log(pathname)
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);
  const handleWindowResize = () => {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 1024);
    setIsOpenDropDown(window.innerWidth > 768);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize(); // Initial check

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);
  return (
    <div className='flex flex-col md:flex-row fixed top-0 left-0 right-0 z-20 bg-white md:h-[8vh] max-[768px]:py-4 w-screen justify-around'>
      <div className='flex h-full max-[768px]:mx-5 text-2xl items-center md:justify-center mt-auto mb-auto font-Nova'>
        SMILE CLINIC
      </div>
      <IconButton
        className='md:hidden absolute right-4 top-3'
        onClick={() => {
          setIsOpenDropDown(!isOpenDropDown);
        }}
      >
        <MenuIcon />
      </IconButton>
      <div
        className={`flex flex-col md:flex-row ${
          isOpenDropDown || windowWidth > 768 ? '' : 'hidden'
        }`}
      >
        <MenuItem
          name='Home'
          refLink='/'
          isCurrentPath={pathname == '/'}
        ></MenuItem>
        {session ? (
          <MenuLogin></MenuLogin>
        ) : (
          <MenuItem
            name='Booking'
            refLink='/dentists'
            isCurrentPath={pathname == '/dentists'}
          ></MenuItem>
        )}
        <MenuItem
          name='My Booking'
          refLink='/mybooking'
          isCurrentPath={pathname == '/mybooking'}
        ></MenuItem>
      </div>
      {/* check login or logout */}
      {session ? (
        <div
          className={`flex h-full  ${
            isOpenDropDown || windowWidth > 768 ? '' : 'hidden'
          }`}
        >
          <MenuItem
            name='Log out'
            refLink='/signout'
            isCurrentPath={pathname == '/signout'}
          ></MenuItem>
        </div>
      ) : (
        <div
          className={`flex h-full  ${
            isOpenDropDown || windowWidth > 768 ? '' : 'hidden'
          }`}
        >
          <MenuItem
            name='Log in'
            refLink='/signin'
            isCurrentPath={pathname == '/signin'}
          ></MenuItem>
        </div>
      )}
    </div>
  );
}


