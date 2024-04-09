import { getUserDetail } from '@/lib/queries';
import { getServerSideSession } from '@/utils/session';

type Props = {};
const Homepage = async (props: Props) => {
  const userSession = await getServerSideSession();
  if (!userSession) return;
  const data = await getUserDetail(userSession.sub);
  return <div>{data.email}</div>;
};
export default Homepage;
