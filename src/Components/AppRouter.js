import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Home/Main';
import Login from './Login/Login';
import SignUp from './Sign-up/SignUp';
import Contact from './Contact/Contact';




const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact/*" element={<Contact />} />

            </Routes>
        </Router>
    );
};

export default AppRouter;
