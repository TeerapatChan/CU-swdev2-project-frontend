export default async function deleteDentist({
  id,
  token,
}: {
  id: string;
  token: string;
}) {
  const response = await fetch(`http://localhost:5000/api/v1/dentists/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete dentist with ID: ${id}`);
  }

  return { message: `Dentist with ID ${id} has been deleted successfully.` };
}
