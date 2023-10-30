export default async function userRegister({
  name,
  email,
  password,
  tel,
}: {
  email: string;
  password: string;
  name: string;
  tel: string;
}) {
  const response = await fetch('http://localhost:5000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      tel: tel,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to register');
  }
  return await response.json();
}
