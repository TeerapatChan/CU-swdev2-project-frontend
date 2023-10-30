export default async function userLogIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch('http://localhost:5000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }
  return await response.json();
}
