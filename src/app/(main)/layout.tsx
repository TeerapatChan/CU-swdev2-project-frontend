import MenuBar from '@/components/MenuBar';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MenuBar />
      {children}
    </div>
  );
}
