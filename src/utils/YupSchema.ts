import * as yup from 'yup';
import PhoneRegex from './PhoneRegex';

const BookingYup = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup
    .string()
    .required('Tel. is required')
    .matches(PhoneRegex, 'Tel. is not valid'),
});

const SignupYup = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup
    .string()
    .required('Tel. is required')
    .matches(PhoneRegex, 'Tel. is not valid'),
  password: yup.string().required(),
});

const LoginYup = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { BookingYup, SignupYup, LoginYup };
