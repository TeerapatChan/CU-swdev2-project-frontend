import BookingForm from '@/components/forms/BookingForm';
import 'main.css';

export default function BookingPage() {
  return (
    <div className="mt-[8vh] bg-[url('/img/booking-background.png')] h-[92vh] w-sereen bg-cover flex justify-center items-center">
      <BookingForm />
    </div>
  );
}
