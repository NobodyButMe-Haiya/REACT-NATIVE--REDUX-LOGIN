import {createSlice} from '@reduxjs/toolkit';
/**
 * Authentication Data Transfer Object / (Slice) / Model
 */
// global object session
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    error:'',
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    resetCredentials: state => {
      state.token = '';
      state.error = '';
      state.isAuthenticated = false;
    },
  },
});

export const {setToken,setError,setAuthenticated, resetCredentials} =
  authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;
