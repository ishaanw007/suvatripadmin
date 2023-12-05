import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import SmallCompo from './SmallCompo'
import Section from './Section'
import WhyList from './WhyList'
import Newsletter from './Newsletter'
import Footer from './Footer'

function Main() {
    return (
        <div className='rounded-[35px]'>
            <Navbar />
            <Header />
            <SmallCompo />
            <Section />
            <WhyList />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Main
