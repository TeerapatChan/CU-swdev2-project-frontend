import {
  BookingItem,
  DentistDetail,
  UserDetail,
  UserProfile,
} from '@/utils/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type sessionState = {
  BookingItems: BookingItem[];
  DentistItems: DentistDetail[];
  UserProfile?: UserProfile | null;
};

const initialState: sessionState = {
  BookingItems: [],
  DentistItems: [],
  UserProfile: null,
};
export const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserProfile>) => {
      state.UserProfile = action.payload;
    },
    userLogout: (state) => {
      state.UserProfile = null;
    },
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      // const newItem: BookingItem[] = [action.payload]
      // state.BookingItems = newItem
    },
    deleteBooking: (state, action: PayloadAction<BookingItem>) => {
      const remainItem: BookingItem[] = [];
      state.BookingItems = remainItem;
    },
  },
});
export const {
  addBooking: addBooking,
  deleteBooking: deleteBooking,
  userLogin: userLogin,
  userLogout: userLogout,
} = sessionSlice.actions;
export default sessionSlice.reducer;
