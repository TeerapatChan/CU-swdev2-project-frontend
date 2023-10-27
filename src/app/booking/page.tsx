import BookingForm from '@/components/forms/BookingForm';

export default function BookingPage() {
  return (
    <div className="bg-[url('/img/booking-background.png')] h-screen bg-cover flex justify-center items-center">
      <BookingForm />
    </div>
  );
}
