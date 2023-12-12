import { useAppDispatch } from '@/store';
import { useState } from 'react';

import {
  Modal,
  setSignInModalOpen,
  setSignUpModalOpen,
} from '@/features/modals';
import GoogleButton from './GoogleButton';

interface Props {}

const SignUpModal: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const closeModal = () => {
    dispatch(setSignUpModalOpen(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  const handleLoginWithGoogle = () => {
    console.log('login with google');
  };

  return (
    <Modal withCloseButton={true} onClose={closeModal}>
      <div className='text-primary flex flex-col p-8 max-w-[95vw] sm:p-14 bg-secondary rounded-3xl bg-white'>
        <div className='flex-1 space-y-2'>
          <h1 className='text-3xl font-bold'>Sign up</h1>
          <p className='text-sm text-gray-400'>Sign up to join henryCom!</p>
        </div>
        <div className='my-4'>
          <GoogleButton
            onClick={handleLoginWithGoogle}
            text='Continue with Google'
          />
        </div>
        <div className='flex items-center my-4'>
          <div className='h-[1px] w-full bg-gray-400'></div>
          <div className='mx-2 text-gray-400 text-sm'>OR</div>
          <div className='h-[1px] w-full bg-gray-400'></div>
        </div>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              className='w-full border border-gray-200 rounded-md px-4 py-2'
              value={input.email}
              onChange={handleChange}
            />
          </div>
          {/* <div className=''>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className='w-full border border-gray-200 rounded-md px-4 py-2'
              value={input.password}
              onChange={handleChange}
            />
          </div> */}
          <button className='bg-tertiary text-primary px-4 py-2 rounded-full font-bold mx-auto w-full hover:opacity-75 duration-100 active:opacity-100'>
            Continue
          </button>
        </form>
        <div className='mt-5 space-y-2'>
          <div>
            <span>Already have an account?</span>
            <button
              className='text-blue-400 mx-1'
              onClick={() => {
                dispatch(setSignInModalOpen(true));
                dispatch(setSignUpModalOpen(false));
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
