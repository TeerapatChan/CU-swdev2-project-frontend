export default async function createBooking({
  id,
  bookingData,
}: {
  id: string;
  bookingData: any;
}) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/dentists/${id}/bookings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
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
