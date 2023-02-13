/* eslint-disable react-hooks/exhaustive-deps */
import React ,{ useEffect, useRef, useState }from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
//import { useNavigate } from 'react-router-dom'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import Login from '../templates/login'
import CustomerDashboard from "../templates/customerDashboard";
import ROUTE from '../utils/constants/route'
import { SigninContext } from '../contexts/ SigninContext'
import useToken from '../hooks/useAuth.hook';
import './index.css';
function Root() {
  //const navigate = useNavigate()
  const { token, setToken } = useToken();
  const notification = useRef(null);
  const [user, setUser] = useState(null)
  
  const setUserContext = (user) => {
    setUser(user)
  };
  

  
  return (
    <section className="bumblebee__root">
        <SigninContext.Provider
        value={{user}}>
        <Routes>
          <Route path="/" 
            element={ token !== '' ? <Navigate replace to={ROUTE.CUSTOMER_DASHBOARD}/> : <Login notification={notification} 
            setUserToken={setToken}/>}/>
          <Route path={ROUTE.LOGIN} 
            element={ token !== '' ? <Navigate replace to={ROUTE.CUSTOMER_DASHBOARD}/> :  <Login notification={notification}
            setUserToken={setToken}/> } />
          <Route path={ROUTE.CUSTOMER_DASHBOARD} 
            element={token === '' ?
            <CustomerDashboard notification={notification}/> : <Navigate replace to={ROUTE.LOGIN}/> } />
        </Routes>
        <Toast ref={notification} position="bottom-left" />
        </SigninContext.Provider>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('bumblebee'));
root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

export default root

reportWebVitals();
