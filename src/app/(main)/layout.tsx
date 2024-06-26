import type { Metadata } from 'next';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='wrapper'>
      <Header />
      <main className='mainwrapper'>{children}</main>
    </div>
  );
}
