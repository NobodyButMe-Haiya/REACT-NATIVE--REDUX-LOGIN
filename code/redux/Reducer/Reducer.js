import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthenticationSlice'
import notificationReducer from './NotificationSlice';

/***
 * Combine all data transfer object into one global object session 
 */
const rootReducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
});

export default rootReducer;