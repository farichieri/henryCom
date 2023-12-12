import Link from 'next/link';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className='w-full mt-auto flex justify-center items-center border-t my-2 py-4 px-8 m-auto'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
