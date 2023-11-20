import { Dayjs } from 'dayjs';

type BookingItem = {
  _id: string;
  bookingDate: Date;
  user: UserDetail;
  dentist: {
    name: string;
    _id: string;
  };
};

type UserDetail = {
  _id: string;
  name: string;
  email: string;
  tel: string;
};

type DentistDetail = {
  name: string;
  address: string;
  tel: string;
  id: string;
  hospital: string;
  expertist: string;
  picture: string;
};

type UserProfile = {
  _id: string;
  name: string;
  email: string;
  tel: string;
  role: string;
  token: string;
};

type dentistsProps = {
  defaultDentist?: string;
  dentists: DentistDetail[] | [];
};

export type {
  dentistsProps,
  DentistDetail,
  BookingItem,
  UserDetail,
  UserProfile,
};
