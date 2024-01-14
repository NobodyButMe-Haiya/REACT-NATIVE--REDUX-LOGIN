import Config from 'react-native-config';
import {Alert} from 'react-native';

const Login = async (username, password) => {
  Alert.alert('path', `${Config.API_URL}/login.php`);
  try {
    const response = await fetch(`${Config.API_URL}/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });
    if (response.ok) {
      const data = await response.json();
      return {success: true, token: data.token};
    } else {
      return {success: false, error: 'Invalid credentials'};
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error:
        'Network error : ' + error.statusText + ' error code ' + error.status,
    };
  }
};
const Forget = async email => {
  try {
    const response = await fetch(`${Config.API_URL}/forgetPassword.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    });
    if (response.ok) {
      const data = await response.json();
      return {success: true, token: data.token};
    } else {
      return {success: false, error: 'Invalid email address '};
    }
  } catch (error) {
    console.error('Forget error:', error);
    return {success: false, error: 'Network error'};
  }
};
export default {Login, Forget};
