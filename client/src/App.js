import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import Dashboard from './pages/DashBoard';

function App() {
  return (
    <>
      <Routes>
      <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default App;
