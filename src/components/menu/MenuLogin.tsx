'use client';
import MenuItem from './MenuItem';
import { useUserStore } from '@/zustand/store';
import { usePathname } from 'next/navigation';
export default function MenuLogin() {
  const session = useUserStore((state) => state.userProfile);
  if (!session || !session.token) return null;
  const profile = session;
  const pathname = usePathname();
  return (
    <div className='flex flex-row'>
      {/* check admin */}
      {profile.role == 'admin' ? (
        <div className='flex flex-row'>
          <MenuItem
            name='Dentists'
            refLink='/dentists'
            isCurrentPath={pathname == '/dentists'}
          ></MenuItem>
          <MenuItem
            name='Users Booking'
            refLink='/usersbooking'
            isCurrentPath={pathname == '/usersbooking'}
          ></MenuItem>
        </div>
      ) : (
        <MenuItem
          name='Booking'
          refLink='/dentists'
          isCurrentPath={pathname == '/dentists'}
        ></MenuItem>
      )}
    </div>
  );
}
