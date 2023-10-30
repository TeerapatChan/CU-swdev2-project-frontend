export default async function deleteDentist({ id }: { id: string }) {
  const response = await fetch(`http://localhost:5000/api/v1/dentists/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete dentist with ID: ${id}`);
  }

  return { message: `Dentist with ID ${id} has been deleted successfully.` };
}
