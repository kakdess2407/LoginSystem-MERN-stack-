import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Signup from './Signup';
import Userinfo from './Userinfo';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Update from './Update';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Userinfo/:id" element={<Userinfo />} />
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
        <Route path="/Update/:id" element={<Update/>}></Route>
      </Routes>
    </Router>
  </>
)
