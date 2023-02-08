import {useState} from 'react';
import { useCookies } from 'react-cookie';

export default function useAuth() {
  const TOKEN_NAME = process.env.REACT_APP_TOKEN_NAME
  const [cookies, setCookie, removeCookie] = useCookies(TOKEN_NAME);
  
  const getToken = () => {
    return cookies?.accessToken || ''
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    const {accessToken, expiration} = userToken
    const expiresDate = new Date(expiration)
    setCookie(TOKEN_NAME, accessToken, { path: '/', expires: expiresDate });
    setToken(token);
    document.location.reload(true);
  };

  const removeToken = () => {
    removeCookie(TOKEN_NAME, {})
    setToken('')
    document.location.reload(true);
  }

  return {
    setToken: saveToken,
    removeToken,
    token
  }
}