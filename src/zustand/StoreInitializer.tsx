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
        useUserStore.setState({ userProfile: { ...storeProps.userProfile } });
      if (storeProps.dentists)
        useDentistStore.setState({ dentists: storeProps.dentists });
      if (storeProps.myBooking)
        useMyBookingStore.setState({ myBooking: storeProps.myBooking });
      if (storeProps.bookings)
        useBookingsStore.setState({ bookings: storeProps.bookings });
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
