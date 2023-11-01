export default async function createDentist({
  name,
  tel,
  hospital,
  address,
  expertist,
  picture,
}: {
  name: string;
  tel: string;
  hospital: string;
  address: string;
  expertist: string;
  picture: string;
}) {
  const response = await fetch('http://localhost:5000/api/v1/dentists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      tel: tel,
      hospital: hospital,
      address: address,
      expertist: expertist,
      picture: picture,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to create dentist');
  }
  return await response.json();
}
