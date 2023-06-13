import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.css';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';
import PageNotFound from './routes/PageNotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
