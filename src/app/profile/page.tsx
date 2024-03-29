import { getServerSideSession } from '@/utils/session';
import { redirect } from 'next/navigation';

type Props = {};
const ProfilePage = async (props: Props) => {
  const userSession = await getServerSideSession();

  if (!userSession?.sub) {
    return redirect('/login');
  }
  return <div>ProfilePage</div>;
};
export default ProfilePage;
