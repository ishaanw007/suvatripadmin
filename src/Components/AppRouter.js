import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Main from './Main';
import Contact from './Contact';
import BasicDetails from './BasicDetails';
import Facil from './Facil';
import Login from './Login';
import Hotelrules from './Hotelrules';
import PaymentPolicy from './PaymentPolicy';
import Parking from './Parking';
import Transporation from './Transporation';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/facility' element={<Facil />} />
                <Route path='/basic' element={<BasicDetails />} />
                <Route path='/hotelrules' element={<Hotelrules />} />
                <Route path='/paymentpolicy' element={<PaymentPolicy />} />
                <Route path='/parking' element={<Parking />} />
                <Route path='/transporation' element={<Transporation />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
