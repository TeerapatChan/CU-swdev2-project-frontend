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
  updateDentist: (dentist: DentistDetail) => void;
  deleteDentist: (id: string) => void;
  createDentist: (dentist: DentistDetail) => void;
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
  updateMyBooking: (params: {
    dentistID: string;
    dentistName: string;
    bookingDate: Date;
  }) => void;
};

type BookingsStore = {
  bookings: BookingItem[] | [];
  setBookings: (bookings: BookingItem[] | []) => void;
};

export const useUserStore = create<UserStore>(
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
      deleteDentist: (id: string) => {
        set((state: any) => {
          const dentists = state.dentists.filter(
            (dentist: DentistDetail) => dentist.id !== id,
          );
          return { dentists };
        });
      },
      createDentist: (dentist: DentistDetail) => {
        set((state: any) => {
          return { dentists: [...state.dentists, dentist] };
        });
      },
      updateDentist: (dentist: DentistDetail) => {
        set((state: any) => {
          const dentists = state.dentists.map((dentistItem: DentistDetail) => {
            if (dentistItem.id === dentist.id) {
              return dentist;
            }
            return dentistItem;
          });
          return { dentists };
        });
      },
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
      updateMyBooking: (params: {
        dentistID: string;
        dentistName: string;
        bookingDate: Date;
      }) => {
        set((state: any) => {
          const myBooking = state.myBooking;
          if (myBooking) {
            myBooking.bookingDate = params.bookingDate;
            myBooking.dentist._id = params.dentistID;
            myBooking.dentist.name = params.dentistName;
          }
          return { myBooking };
        });
      },
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
    }),
    {
      name: 'bookings-storage',
    },
  ) as any,
);
