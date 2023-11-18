import { create } from 'zustand';
import { UserProfile } from '@/utils/interface';
import { persist } from 'zustand/middleware';

type UserStore = {
  userProfile: UserProfile | null;
  setUserProfile: (userProfile: UserProfile | null) => void; // Function to set UserProfile or null
};

export const userStore = create<UserStore>(
  persist(
    (set) => ({
      userProfile: null,
      setUserProfile: (userProfile: UserProfile | null) => set({ userProfile }), // Update userProfile
    }),
    {
      name: 'user-storage', // Set a name for the persisted data
    },
  ) as any, // You might need to cast this to any if the type definitions don't match directly
);
