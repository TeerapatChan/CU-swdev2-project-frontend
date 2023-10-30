export default async function createDentist({
  name,
  email,
  password,
  tel,
  picture,
}: {
  email: string;
  password: string;
  name: string;
  tel?: string;
  picture: string;
}) {
  const response = await fetch('http://localhost:5000/api/v1/dentists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      tel: tel,
      picture: picture,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to create dentist');
  }
  return await response.json();
}
