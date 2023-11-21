import MenuBar from '@/components/menu/MenuBar';


export default function MainLayout({
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
