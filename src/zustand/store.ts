import { create } from 'zustand';
import { UserProfile } from '@/utils/interface';
import { persist } from 'zustand/middleware';

type UserStore = {
  userProfile: UserProfile | null;
  setUserProfile: (userProfile: UserProfile | null) => void; // Explicitly specify type here
};

export const userStore = create(
  persist(
    (set) => ({
      userProfile: null,
      setUserProfile: (userProfile: UserProfile | null) => set({ userProfile }), // Use UserProfile type or null
    }),
    {
      name: 'user-storage',
    },
  ),
);
