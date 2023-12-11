import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Contactform from './Contact/Contactform'
import Basic from './BasicDetails/Basic'
import Picture from './Photos/Picture'
import Facility from './Facility/Facility'
import Rate from './RatePlan/Rate'
import Hotel from './HotelRules/Hotel'
import Payment from './paymentPolicy/Payment'
import Park from './Parking/Park'
import Transportation from './Transpoartion/Transport'
import Document from './Document/Doc'
import RoomSetUp from './RoomSet-up/RoomSetUp'




function NestedRoutes() {

    return (

        <Routes>
            <Route path='/' element={<Contactform />} />
            <Route path='basic' element={< Basic />} />
            <Route path='photos' element={< Picture />} />
            <Route path='facility' element={< Facility />} />
            <Route path='room-setup' element={< RoomSetUp />} />
            <Route path='rate' element={< Rate />} />
            <Route path='hotel-rules' element={< Hotel />} />
            <Route path='payment' element={< Payment />} />
            <Route path='park' element={< Park />} />
            <Route path='transportation' element={< Transportation />} />
            <Route path='document' element={< Document />} />
        </Routes>

    )
}

export default NestedRoutes
