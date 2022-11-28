import React ,{ useRef }from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";
import { Toast } from 'primereact/toast';
import Login from '../templates/login'
import CustomerDashboard from "../templates/customerDashboard";
import ROUTE from '../utils/constants/route'

function Root() {
  const notification = useRef(null);

  return (
    <section className="bumblebee__root">
      <Routes>
        <Route path="/" 
          element={ <Login notification={notification}/> }/>
        <Route path={ROUTE.LOGIN} 
          element={ <Login/> }/>
        <Route path={ROUTE.CUSTOMER_DASHBOARD} 
          element={ <CustomerDashboard/> }/>
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
