import { Dayjs } from "dayjs"

type BookingItem ={
    bookingDate: Dayjs
    user: UserDetail
    dentist: DentistDetail
    createdAt: string
}

type UserDetail = {
  _id: string
  name: string
  email: string
  tel: string
};

type DentistDetail = {
  _id: string;
  name: string;
  address: string;
  tel: string;
  id: string;
};

type dentistsProps = {
  defaultDentist: string;
  dentists: DentistDetail[];
};
export type {dentistsProps,DentistDetail,BookingItem}