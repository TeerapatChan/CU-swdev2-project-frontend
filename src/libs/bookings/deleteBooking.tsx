export default async function deleteBooking({
  id,
  token,
}: {
  id: string;
  token: string;
}) {
  const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete Booking with ID: ${id}`);
  }

  return { message: `Booking with ID ${id} has been deleted successfully.` };
}
