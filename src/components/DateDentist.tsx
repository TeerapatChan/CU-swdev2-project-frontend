import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

export default function DateDentist({
  onDateChange,
  onDentistChange,
}: {
  onDateChange: (date: any) => void;
  onDentistChange: (dentist: string) => void;
}) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [dentist, setDentist] = useState('BKK');
  return (
    <>
      <div className='w-full flex flex-row gap-10 justify-between mb-2'>
        <p className='self-center w-5/12'>Appointment Date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='DD/MM/YYYY'
            value={date}
            slotProps={{ textField: { size: 'small', required: true } }}
            className='w-full bg-white'
            onChange={(e) => {
              setDate(e);
              onDateChange(e);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className='w-full flex flex-row gap-10 justify-between mb-2'>
        <p className='self-center w-5/12'>Dentist</p>
        <FormControl
          variant='outlined'
          size='small'
          className='w-full'
          required
        >
          <InputLabel htmlFor='dentist-select'>Select Dentist</InputLabel>
          <Select
            label='Select Dentist'
            value={dentist}
            inputProps={{ id: 'dentist-select' }}
            onChange={(e) => {
              setDentist(e.target.value);
              onDentistChange(e.target.value);
            }}
          >
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
