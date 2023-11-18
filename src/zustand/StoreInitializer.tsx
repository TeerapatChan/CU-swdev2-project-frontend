'use client';

import { useRef } from 'react';
import { userStore } from '@/zustand/store';
import { useEffect } from 'react';

export default function StoreInitializer(storeProps: any) {
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      userStore.setState({ userProfile: { ...storeProps.userProfile } });
      initialized.current = true;
    }
  });
  return null;
}
