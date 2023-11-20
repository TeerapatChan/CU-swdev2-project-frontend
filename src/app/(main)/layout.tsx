import MenuBar from '@/components/menu/MenuBar';


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
