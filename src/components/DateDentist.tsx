import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function DateDentist() {
  return (
    <>
      <div className='w-full flex flex-row gap-10 justify-between'>
        <p className='self-center w-1/3'>Booking Date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='DD/MM/YYYY'
            slotProps={{ textField: { size: 'small' } }}
            className='w-full bg-white'
          />
        </LocalizationProvider>
      </div>
      <div className='w-full flex flex-row gap-10 justify-between'>
        <p className='self-center w-1/3'>Dentist</p>
        <FormControl variant='outlined' size='small' className='w-full'>
          <InputLabel htmlFor='dentist-select'>Select Dentist</InputLabel>
          <Select label='Select Dentist' inputProps={{ id: 'dentist-select' }}>
            <MenuItem value='Dr.Somsak Meekwamsuk'>
              Dr. Somsak Meekwamsuk
            </MenuItem>
            <MenuItem value='Dr.Somkiad Meekwamtuk'>
              Dr. Somkiad Meekwamtuk
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
