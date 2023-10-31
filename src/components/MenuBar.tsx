import MenuItem from "./MenuItem";

export default function MenuBar() {


    //state to check if user is logged in use session
    //check user or admin
    return (
      <div className='flex flex-row fixed top-0 left-0 right-0 z-20 bg-white h-[8vh] w-screen justify-around'>
        <div className='flex h-full text-lg items-center justify-center mt-auto mb-auto'>
          SMILECLINIC
        </div>
        <div className='flex flex-row'>
          <MenuItem name='Home' refLink='/'></MenuItem>
          {/* check admin */}
          <MenuItem name='Dentists' refLink='/dentists-profile-admin'></MenuItem>
          <MenuItem name='Users Booking' refLink='/usersbooking'></MenuItem>
          {/* check user  */}
          <MenuItem name='Booking' refLink='/dentists-profile-user'></MenuItem>
          
          <MenuItem name='My Booking' refLink='/mybooking'></MenuItem>
        </div>
        {/* check login or logout */}
        <div className='flex h-full '>
          <MenuItem name='Log in' refLink='/mock-signin'></MenuItem>
        </div>
      </div>
    );
}
