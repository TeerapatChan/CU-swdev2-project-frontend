type BookingSchema = {
  name: string;
  email: string;
  tel: string;
};

type SignupSchema = {
  name: string;
  email: string;
  tel: string;
  password: string;
};

type LoginSchema = {
  email: string;
  password: string;
};

type DentistSchema = {
  name: string;
  tel: string;
  hospital: string;
  expertist: string;
  address: string;
};

export type { BookingSchema, SignupSchema, LoginSchema, DentistSchema };
