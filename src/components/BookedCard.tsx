import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getBookings from '@/libs/bookings/getBookings';
import getUserProfile from '@/libs/user/getUserProfile';
import { BookingItem } from '@/utils/interface';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import { getServerSession } from 'next-auth';
import BackIcon from './BackIcon';
import EditDialog from './dialogs/edit/EditDialog';
import getDentists from '@/libs/dentists/getDentists';
import deleteBooking from '@/libs/bookings/deleteBooking';
import toast from 'react-hot-toast';

export default async function BookedCard() {
  const session = await getServerSession(authOptions);
  //Check if user is logged in
  if (!session || !session.user.token)
    return (
      <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
        Please Login First
      </div>
    );

  const token = session.user.token;
  const profile = await getUserProfile(token);
  const bookings = await getBookings(token);
  const success = () => toast.success('Appointment Deleted');
  const fail = () => toast.error('Failed to delete appointment');

  //Check if user has appointment
  if (bookings.count < 1)
    return (
      <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
        No Appointment
      </div>
    );

  const userBooking = bookings.data;
  const adminBooking = bookings.data.filter(
    (booking: BookingItem) => booking.user._id == profile.data._id,
  );
  const dentists = (await getDentists()).data;
  //Check if user is admin
  const role = profile.data.role;
  if (role == 'admin') {
    if (adminBooking.length < 1)
      return (
        <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
          No Appointment
        </div>
      );
  }
  const dentists_and_default = {
    defaultDentist:
      role == 'admin'
        ? adminBooking[0].dentist._id
        : userBooking[0].dentist._id,
    dentists: dentists,
  };

  const deleteAppointment = async () => {
    // try {
    //   const res = await deleteBooking({
    //     id: role == 'admin' ? adminBooking[0]._id : userBooking[0]._id,
    //     token: token,
    //   });
    //   success();
    // } catch {
    //   fail();
    //   console.log('error');
    // }
  };

  return (
    <div className='relative flex flex-col justify-center items-center bg-white w-[800px] h-[450px] shadow-lg rounded-2xl gap-4'>
      <BackIcon />
      <p className='font-semibold text-4xl'>Your appointment</p>
      <div className='flex flex-col w-[550px] h-fit gap-4 pt-10 text-xl'>
        <div className='flex flex-row justify-between'>
          <p className='text-[#777777]'>Name</p>
          <p>{profile.data.name}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[#777777]'>Email</p>
          <p>{profile.data.email}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[#777777]'>Tel</p>
          <p>{profile.data.tel}</p>
        </div>
        {profile.data.role === 'admin' ? (
          <div className='flex flex-col w-[550px] h-fit gap-4 text-xl'>
            <div className='flex flex-row justify-between'>
              <p className='text-[#777777]'>Booking Date</p>
              <p>
                {adminBooking.map((booking: BookingItem) =>
                  dayjs(booking.bookingDate).format('DD/MM/YYYY'),
                )}
              </p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-[#777777]'>Dentist</p>
              <p>
                {adminBooking.map(
                  (booking: BookingItem) => booking.dentist.name,
                )}
              </p>
            </div>
          </div>
        ) : (
          <div className='flex flex-col w-[550px] h-fit gap-4 text-xl'>
            <div className='flex flex-row justify-between'>
              <p className='text-[#777777]'>Booking Date</p>
              <p>
                {userBooking.map((booking: BookingItem) =>
                  dayjs(booking.bookingDate).format('DD/MM/YYYY'),
                )}
              </p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-[#777777]'>Dentist</p>
              <p>
                {userBooking.map(
                  (booking: BookingItem) => booking.dentist.name,
                )}
              </p>
            </div>
          </div>
        )}
        <div className='flex flex-row justify-between w-full gap-16 pt-5'>
          <EditDialog
            dentists={dentists_and_default}
            token={token}
            bookingID={
              role == 'admin' ? adminBooking[0]._id : userBooking[0]._id
            }
          />
          <Button
            variant='outlined'
            color='error'
            className='w-full p-2 border-2'
            onClick={deleteAppointment}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
