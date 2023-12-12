import { Nav, Footer, Sidebar } from '@/components';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen h-full'>
      <Nav />
      <Sidebar />
      <main className='h-full flex min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
