export default async function updateBooking({
  id,
  dentist,
  bookingDate,
  token,
}: {
  id: string;
  dentist: string;
  bookingDate: Date;
  token: string;
}) {
  const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      bookingDate: bookingDate,
      dentist: dentist,
    }),
  });
  if (!response.ok) {
    throw new Error(`Failed to update dentist with ID: ${id}`);
  }
  return await response.json();
}
