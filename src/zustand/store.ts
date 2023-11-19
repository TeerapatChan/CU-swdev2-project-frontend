import { create } from 'zustand';
import {
  UserProfile,
  DentistDetail,
  BookingItem,
  UserDetail,
} from '@/utils/interface';
import { persist } from 'zustand/middleware';

type UserStore = {
  userProfile: UserProfile | null;
  setUserProfile: (userProfile: UserProfile | null) => void;
};

type DentistStore = {
  dentists: DentistDetail[] | [];
  setDentists: (dentists: DentistDetail[] | []) => void;
};

type myBooking = {
  _id: string;
  user: UserDetail;
  bookingDate: Date;
  dentist: {
    name: string;
    _id: string;
  };
};

type MyBookingStore = {
  myBooking: myBooking | null;
  setMyBooking: (myBookings: myBooking | null) => void;
};

type BookingsStore = {
  bookings: BookingItem[] | [];
  setBookings: (bookings: BookingItem[] | []) => void;
};

export const userStore = create<UserStore>(
  persist(
    (set) => ({
      userProfile: null,
      setUserProfile: (userProfile: UserProfile | null) => set({ userProfile }),
    }),
    {
      name: 'user-storage',
    },
  ) as any,
);

export const useDentistStore = create<DentistStore>(
  persist(
    (set) => ({
      dentists: [],
      setDentists: (dentists: DentistDetail[] | null) => set({ dentists }),
    }),
    {
      name: 'dentist-storage',
    },
  ) as any,
);

export const useMyBookingStore = create<MyBookingStore>(
  persist(
    (set) => ({
      myBooking: null,
      setMyBooking: (myBooking: myBooking | null) => set({ myBooking }),
    }),
    {
      name: 'myBooking-storage',
    },
  ) as any,
);

export const useBookingsStore = create<BookingsStore>(
  persist(
    (set) => ({
      bookings: [],
      setBookings: (bookings: BookingItem[]) => set({ bookings }),
      updateBookings: (booking: BookingItem) => {
        set((state: any) => {
          const bookings = state.bookings.map((b: BookingItem) => {
            if (b._id === booking._id) {
              return booking;
            }
            return b;
          });
          return { bookings };
        });
      },
    }),
    {
      name: 'bookings-storage',
    },
  ) as any,
);
