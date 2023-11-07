export default async function getBookings(token: string) {
  const response = await fetch(`http://localhost:5000/api/v1/bookings`,
    {method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    }});
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}
