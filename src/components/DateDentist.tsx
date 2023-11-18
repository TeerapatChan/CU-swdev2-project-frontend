'use client';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { MenuItem } from '@mui/material';
import { dentistsProps } from '@/utils/interface';

export default function DateDentist({
  onDateChange,
  onDentistChange,
  dentists,
  defaultDate,
}: {
  onDateChange: (date: any) => void;
  onDentistChange: (dentist: string) => void;
  dentists: dentistsProps;
  defaultDate: Dayjs;
}) {
  const [date, setDate] = useState<Dayjs>(dayjs(defaultDate));
  const [dentist, setDentist] = useState<string>(dentists.defaultDentist);

  return (
    <>
      <div className='w-full flex flex-row gap-10 justify-between mb-2'>
        <p className='self-center w-6/12'>Appointment Date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='DD/MM/YYYY'
            format='DD/MM/YYYY'
            value={date}
            slotProps={{ textField: { size: 'small', required: true } }}
            className='w-full bg-white'
            onChange={(e) => {
              if (e) {
                setDate(e);
                onDateChange(e);
              }
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
            {dentists &&
              dentists.dentists.map((dentist: any) => (
                <MenuItem value={dentist.id}>{dentist.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}
