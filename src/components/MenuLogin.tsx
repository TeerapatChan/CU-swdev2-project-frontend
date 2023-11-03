import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/user/getUserProfile";
import { getServerSession } from "next-auth";
import MenuItem from "./MenuItem";

export default async function MenuLogin() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;
    const profile = await getUserProfile(session.user.token);

return (
  <div className='flex flex-row'>
    {/* check admin */}
    {profile.data.role == 'admin' ? (
      <div className='flex flex-row'>
        <MenuItem name='Dentists' refLink='/dentists'></MenuItem>
        <MenuItem name='Users Booking' refLink='/usersbooking'></MenuItem>
      </div>
    ) : (
      <MenuItem name='Booking' refLink='/dentists'></MenuItem>
    )}
  </div>
);
}