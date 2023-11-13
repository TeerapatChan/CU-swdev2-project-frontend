import { DentistSchema } from '../../utils/FormSchema';
export default async function updateDentist({
  id,
  updatedData,
  picture,
  token,
}: {
  id: string;
  updatedData: DentistSchema;
  picture: string;
  token: string;
}) {
  const response = await fetch(`http://localhost:5000/api/v1/dentists/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({...updatedData, picture: picture}),
  });
  if (!response.ok) {
    throw new Error(`Failed to update dentist with ID: ${id}`);
  }
  return await response.json();
}
