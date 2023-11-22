'use client'
import MenuItem from "./MenuItem";
import { userStore } from "@/zustand/store";
import { usePathname } from 'next/navigation';
export default function MenuLogin() {
    const session = userStore((state) => state.userProfile);
    if (!session || !session.token) return null;
    const profile = session
    const pathname = usePathname()
return (
  <div className='flex flex-row'>
    {/* check admin */}
    {profile.role == 'admin' ? (
      <div className='flex md:flex-row flex-colf'>
        <MenuItem name='Dentists' refLink='/dentists' isCurrentPath={pathname=='/dentists'}></MenuItem>
        <MenuItem name='Users Booking' refLink='/usersbooking' isCurrentPath={pathname=='/usersbooking'}></MenuItem>
      </div>
    ) : (
      <MenuItem name='Booking' refLink='/dentists' isCurrentPath={pathname=='/dentists'}></MenuItem>
    )}
  </div>
);
}