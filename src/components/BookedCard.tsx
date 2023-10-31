import { Button } from "@mui/material";

export default function BookedCard({}){
    const demo = {
        name: 'Mr. Farang Aloha',
        email: 'farang.a@gmail.com',
        tel: '0812345678',
        bookingDate: '20/10/2021',
        dentist: 'Dr. Sandee Sansao',
    }
    return (
      <div className='flex flex-col justify-center items-center bg-white w-[800px] h-[550px] justify-center items-center shadow-lg rounded-2xl gap-4'>
        <p className='font-semibold text-4xl'>Your appointment</p>
        <div className='flex flex-col w-[550px] h-fit gap-4 pt-10 text-xl'>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Name</p>
            <p >{demo.name}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Email</p>
            <p >{demo.email}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Tel</p>
            <p>{demo.tel}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Booking Date</p>
            <p >{demo.bookingDate}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-[#777777]'>Dentist</p>
            <p>{demo.dentist}</p>
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