
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import UserBooking from '@/components/UserBooking';
import getBookings from '@/libs/bookings/getBookings';
import { BookingItem, DentistDetail } from '@/utils/interface';
import getDentists from '@/libs/dentists/getDentists';
import dayjs, { Dayjs } from 'dayjs';
export default async function UsersBooking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token)
    return (
      <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
        Please Login First
      </div>
    );
  const bookings = (await getBookings(session.user.token)).data;
  const dentists:DentistDetail[] = (await getDentists()).data;
  // for (let i=0 ; i<bookings.length ; i++ ){
  //   // console.log(bookings[i].bookingDate);
  //   const date = dayjs(bookings[i].bookingDate)
  //   console.log(date,123456789);
  //   bookings[i].bookingDate = date
  // }
  return (
    <div className='bg-[#f3f3f3f3] h-100% flex flex-col justify-center items-center gap-8 p-8'>
      { 
        bookings.map((booking:BookingItem)=><UserBooking bookingDate={dayjs(booking.bookingDate)} userId={booking.user.name} dentists={{defaultDentist:booking.dentist.id,dentists:dentists}} />)}

    </div>
  );
}
