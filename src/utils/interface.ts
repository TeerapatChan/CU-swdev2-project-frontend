import { Dayjs } from "dayjs"

type BookingItem ={
    bookingDate: Dayjs
    user: string
    dentist: DentistDetail
    createdAt: string
}

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