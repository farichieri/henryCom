import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface ModalsState {
  isSignUpModalOpen: boolean;
  isSignInModalOpen: boolean;
}

const initialState: ModalsState = {
  isSignUpModalOpen: false,
  isSignInModalOpen: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setSignUpModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isSignUpModalOpen = action.payload;
    },
    setSignInModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isSignInModalOpen = action.payload;
    },
  },
});

export const { setSignInModalOpen, setSignUpModalOpen } = modalsSlice.actions;

export const selectModalsState = (state: RootState) => state.modals;

export default modalsSlice.reducer;
