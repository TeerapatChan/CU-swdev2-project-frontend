import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import UserBooking from '@/components/UserBooking';
import getBookings from '@/libs/bookings/getBookings';
import { BookingItem, DentistDetail } from '@/utils/interface';
import getDentists from '@/libs/dentists/getDentists';
import dayjs, { Dayjs } from 'dayjs';

export default async function UsersBooking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token)
    return (
      <div className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          Please Login First
        </div>
      </div>
    );
  const bookings = (await getBookings(session.user.token)).data;
  const dentists: DentistDetail[] = (await getDentists()).data;

  if (bookings.length == 0)
    return (
      <div className='bg-[url("/img/background.png")] h-[92vh] bg-cover flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          No User Booking Found
        </div>
      </div>
    );

  return (
    <div className='bg-[url("/img/background.png")] h-full bg-no-repeat bg-scroll'>
      <div className='w-full flex flex-col justify-center items-center gap-8 p-8'>
        {bookings.map((booking: BookingItem) => (
          <UserBooking
            bookingDate={dayjs(booking.bookingDate)}
            patientName={booking.user.name}
            dentists={{
              defaultDentist: booking.dentist.id,
              dentists: dentists,
            }}
            id={booking._id ? booking._id : ''}
            token={session.user.token}
          />
        ))}
      </div>
    </div>
  );
}
