import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getBookings from "@/libs/bookings/getBookings";
import getUserProfile from "@/libs/user/getUserProfile";
import { Button } from "@mui/material";
import { getServerSession } from "next-auth";

export default async function BookedCard(){
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return (
    <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
      Please Login First
    </div>
  );
  const profile = await getUserProfile(session.user.token);
  const userid = profile.data.id;
  const bookings = await getBookings(session.user.token);
  // console.log(bookings);
  if (bookings.count<1) return (
    <div className='flex justify-center items-center bg-white w-[800px] h-[200px] shadow-lg rounded-2xl text-4xl text-[#777777]'>
      No Appointment
    </div>
  );
  const bookingDetails = bookings.data;
  
    return (
      <div className='flex flex-col justify-center items-center bg-white w-[800px] h-[550px] shadow-lg rounded-2xl gap-4'>
        <p className='font-semibold text-4xl'>Your appointment</p>
        <div className='flex flex-col w-[550px] h-fit gap-4 pt-10 text-xl'>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Name</p>
            <p >{profile.data.name}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Email</p>
            <p >{profile.data.email}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Tel</p>
            <p>{profile.data.tel}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Booking Date</p>
            <p >{bookingDetails.map((booking:any)=>((booking.bookingDate).slice(0,10)))}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Dentist</p>
            <p>{bookingDetails.map((booking:any)=>(booking.dentist.name))}</p>
          </div>
          <div className='flex flex-row justify-between w-full gap-16 pt-5'>
          <Button variant='contained' className='bg-sky-600 w-full p-2'>
              Edit
            </Button>
            <Button variant='outlined' color='error' className='w-full p-2 border-2'>
              Delete
            </Button>
           </div> 
        </div>
      </div>
    );
}