import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Pizza from './components/Pizza';
import Footer from './components/Footer';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                {/* <Route exact path="/login" element={<LoginPage />} /> */}
                {/* <Route exact path="/register" element={<RegisterPage />} /> */}
                </Routes>
            {/* <Cart />  */}
            <Pizza />
            <Footer />
        </>
    );
}

export default App;
