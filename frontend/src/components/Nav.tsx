import { setSignInModalOpen } from '@/features/modals';
import { useAppDispatch } from '@/store';
import Link from 'next/link';

interface Props {}

const Nav: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className='w-full max-w-xl flex items-center justify-center border rounded-full my-2 h-[var(--nav-height)] px-8 m-auto fixed left-1/2 -translate-x-1/2'>
      <ul>
        <li>
          <Link href='/'>henryCom</Link>
        </li>
      </ul>
      <button
        className='bg-tertiary text-primary rounded-full px-3 font-bold ml-auto py-1.5'
        onClick={() => dispatch(setSignInModalOpen(true))}
      >
        Log in
      </button>
    </nav>
  );
};

export default Nav;
