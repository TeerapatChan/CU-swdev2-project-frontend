import MenuBar from '@/components/MenuBar';
import { userStore } from '@/zustand/store';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/user/getUserProfile';
import StoreInitializer from '@/zustand/StoreInitializer';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  var user = null;
  if (session) {
    const userProfile = await getUserProfile(session.user.token);
    const { _id, name, email, tel, role } = userProfile.data;
    const token = session.user.token;
    user = { _id, name, email, tel, role, token };
    userStore.setState({ userProfile: user });
  } else {
    userStore.setState({ userProfile: null });
  }
  return (
    <div>
      <StoreInitializer userProfile={user} />
      <MenuBar />
      {children}
    </div>
  );
}
