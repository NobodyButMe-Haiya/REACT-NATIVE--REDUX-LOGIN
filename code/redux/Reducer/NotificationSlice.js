import {createSlice} from '@reduxjs/toolkit';
/**
 * Authentication Data Transfer Object / (Slice) / Model
 */
const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
  },
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const {setNotifications} = notificationSlice.actions;
export const selectNotifications = state => state.notification.notifications;
export default notificationSlice.reducer;
