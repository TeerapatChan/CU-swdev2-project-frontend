export default async function updateDentist({
  id,
  updatedData,
  token,
}: {
  id: string;
<<<<<<< Updated upstream
  updatedData: object;
||||||| Stash base
  updatedData: DentistSchema;
=======
  updatedData: DentistSchema;
  token: string;
>>>>>>> Stashed changes
}) {
  const response = await fetch(`http://localhost:5000/api/v1/dentists/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update dentist with ID: ${id}`);
  }
  return await response.json();
}
