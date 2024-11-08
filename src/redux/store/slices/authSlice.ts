import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    pin?: string;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    pin: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      authenticate(state, action: PayloadAction<AuthState>) {
        console.log('===sliced data', action.payload.pin)
        state.pin = action.payload.pin;
        state.isAuthenticated = action.payload.isAuthenticated;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

export const { authenticate, logout } = authSlice.actions;
export default authSlice.reducer;