export default async function deleteBooking({ id }: { id: string }) {
  const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete Booking with ID: ${id}`);
  }

  return { message: `Booking with ID ${id} has been deleted successfully.` };
}
