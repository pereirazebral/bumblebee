/* eslint-disable react-hooks/exhaustive-deps */
import React ,{ useEffect, useRef, useState }from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { Toast } from 'primereact/toast';
import Login from '../templates/login'
import CustomerDashboard from "../templates/customerDashboard";
import ROUTE from '../utils/constants/route'

function Root() {
  const navigate = useNavigate()
  const notification = useRef(null);
  const [user, setUser] = useState(null)

  const setUserContext = (user) => {
    setUser(user)
  };

  useEffect( () => {
    if(user){
      navigate('/area-do-cliente')
    }
  },[user])

  return (
    <section className="bumblebee__root">
        <Routes>
          <Route path="/" 
            element={ <Login notification={notification} 
              userContext={setUserContext}/>  }/>
          <Route path={ROUTE.LOGIN} 
            element={ <Login notification={notification}
              userContext={setUserContext}/> } />
          <Route path={ROUTE.CUSTOMER_DASHBOARD} 
            element={<CustomerDashboard user={user}
            notification={notification}/>}/>
        </Routes>
        <Toast ref={notification} position="bottom-left" />
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
