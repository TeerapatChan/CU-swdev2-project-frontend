'use client';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';

export default function DateDentist({
  onDateChange,
  onDentistChange,
  dentists,
}: {
  onDateChange: (date: any) => void;
  onDentistChange: (dentist: string) => void;
  dentists: any;
}) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [dentist, setDentist] = useState('BKK');
  return (
    <>
      <div className='w-full flex flex-row gap-10 justify-between mb-2'>
        <p className='self-center w-6/12'>Appointment Date</p>
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
        <p className='self-center w-6/12'>Dentist</p>
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
            {dentist &&
              dentists.map((dentist: any) => (
                <MenuItem value={dentist.name}>{dentist.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
