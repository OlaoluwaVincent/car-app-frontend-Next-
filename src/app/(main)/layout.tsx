import Header from '@/components/header/Header';

type Props = {
  children: React.ReactNode;
};
const layout = (props: Props) => {
  return (
    <div className='wrapper'>
      <Header />
      <section className='mainwrapper'>{props.children}</section>
    </div>
  );
};
export default layout;
