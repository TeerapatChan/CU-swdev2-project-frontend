export default async function createBooking({
  id,
  bookingDate,
  token,
}: {
  id: string;
  bookingDate: Date;
  token: string;
}) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/dentists/${id}/bookings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookingDate }),
      },
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Failed to create booking: ${response.status} - ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
