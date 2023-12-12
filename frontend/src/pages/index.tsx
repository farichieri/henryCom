import Image from 'next/image';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/layouts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainLayout>
      <div className='flex items-center justify-center w-full h-full min-h-screen'>
        Home
      </div>
    </MainLayout>
  );
}
