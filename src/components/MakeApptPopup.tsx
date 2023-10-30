'use client';
import { Dialog, DialogTitle, Button } from '@mui/material';
import DateDentist from './DateDentist';
import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';

export default function MakeApptPopup({
  open,
  onClose,
  dentists,
}: {
  open: boolean;
  onClose?: () => void;
  dentists: any;
}) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [dentist, setDentist] = useState<string>('Select Dentist');
  return (
    <Dialog open={open} onClose={onClose}>
      <div className='flex flex-col gap-5 pr-12 pl-12 pt-10 pb-10 w-[600px] items-center'>
        <DialogTitle className='text-3xl font-bold'>
          Make an appointment
        </DialogTitle>
        <DateDentist
          onDateChange={(e) => setDate(e)}
          onDentistChange={(e) => setDentist(e)}
          dentists={dentists}
        />
        <Button variant='contained' className='bg-sky-600 w-full'>
          Submit
        </Button>
      </div>
    </Dialog>
  );
}
