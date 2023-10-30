export default async function updateDentist({
  id,
  updatedData,
}: {
  id: string;
  updatedData: object;
}) {
  const response = await fetch(`http://localhost:5000/api/v1/dentists/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update dentist with ID: ${id}`);
  }
  return await response.json();
}
