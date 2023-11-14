'use client';
import MakeApptPopup from '@/components/MakeApptPopup';
import { useState } from 'react';
import { Button } from '@mui/material';
import { dentistsProps } from '@/utils/interface';


export default function MakeApptDialog({dentists, token}: {dentists : dentistsProps, token:string}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant='contained' className='bg-sky-600 w-full 'onClick={handleOpen}>
        Make an appointment
      </Button>
      <MakeApptPopup open={open} onClose={handleClose} dentists={dentists} token={token}/>
    </>
  );
}
