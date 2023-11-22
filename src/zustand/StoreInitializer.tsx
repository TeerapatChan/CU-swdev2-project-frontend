'use client';

import { useRef } from 'react';
import {
  useUserStore,
  useDentistStore,
  useMyBookingStore,
  useBookingsStore,
} from '@/zustand/store';
import { useEffect } from 'react';
import { stat } from 'fs';

export default function StoreInitializer(storeProps: any) {
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      if (storeProps.userProfile)
        useUserStore.getState().setUserProfile(storeProps.userProfile);
      if (storeProps.dentists)
        useDentistStore.getState().setDentists(storeProps.dentists);
      if (storeProps.myBooking)
        useMyBookingStore.getState().setMyBooking(storeProps.myBooking);
      if (storeProps.bookings)
        useBookingsStore.getState().setBookings(storeProps.bookings);
      initialized.current = true;
    }
  }, [
    storeProps.userProfile,
    storeProps.dentists,
    storeProps.myBooking,
    storeProps.bookings,
  ]);
  return null;
}
