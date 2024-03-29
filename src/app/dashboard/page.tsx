import { getServerSideSession } from '@/utils/session';

export default async function Dashboard() {
  const userSession = await getServerSideSession();
  return (
    <main className='bg-slate-600 h-screen'>
      <h1>{userSession?.name}</h1>
    </main>
  );
}
