import MenuBar from '@/components/MenuBar';

export default function IndexPage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MenuBar />
      {children}
    </div>
  );
}
