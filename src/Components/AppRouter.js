import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Home/Main';
import Login from './Login/Login';
import SignUp from './Sign-up/SignUp';
import Contact from './Contact/Contact';
import BasicDetails from './BasicDetails/BasicDetails';
import Facil from './Facility/Facil';
import Hotelrules from './HotelRules/Hotelrules';
import PaymentPolicy from './paymentPolicy/PaymentPolicy';
import Parking from './Parking/Parking';
import Transporation from './Transpoartion/Transporation';
import Document from './Document/Document';



const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/facility" element={<Facil />} />
                <Route path="/basic" element={<BasicDetails />} />
                <Route path="/hotelrules" element={<Hotelrules />} />
                <Route path="/payment" element={<PaymentPolicy />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/transpoartion" element={<Transporation />} />
                <Route path="/document" element={<Document />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
