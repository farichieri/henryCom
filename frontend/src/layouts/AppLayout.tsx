import { SignInModal, SignUpModal } from '@/features/auth';
import { selectModalsState } from '@/features/modals';
import { useAppSelector } from '@/store';

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const { isSignInModalOpen, isSignUpModalOpen } =
    useAppSelector(selectModalsState);
  return (
    <div className='h-full'>
      {isSignInModalOpen && <SignInModal />}
      {isSignUpModalOpen && <SignUpModal />}
      {children}
    </div>
  );
};

export default AppLayout;
