import { GoogleIcon } from '@/assets';

interface Props {
  onClick: () => void;
  text: string;
}

const GoogleButton: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className='justify-between shadow-md hover:bg-gray-500/10 duration-100 w-full flex border rounded-full h-12 items-center px-3'
    >
      <GoogleIcon customClass='h-7 w-7' />
      <span className='pl-2 pr-3 font-semibold text-black m-auto'>{text}</span>
    </button>
  );
};

export default GoogleButton;
