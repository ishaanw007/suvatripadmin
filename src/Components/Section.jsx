import React from 'react'
import laugh from './laugh.png'
import world from './world.png'
import building from './building.png'
import creditCard from './creditcard.png'
import mapMarker from './mapMarker.png'
import Wifi from './wifi.png'
function Section() {
    const arrayOfitem = [
        {
            title: 'Free',
            imgLink: laugh,
            color: '#d9f2ec'
        },
        {
            title: 'Reach with global guest',
            imgLink: world,
            color: '#ffe7e8'
        }, {
            title: 'List any property type in your budget',
            imgLink: building,
            color: '#e2ecfc'
        }, {
            title: 'Support International Payments cards',
            imgLink: creditCard,
            color: '#ffece1'
        },
        {
            title: 'Free Guidance and Online Resources',
            imgLink: mapMarker,
            color: '#efe3ff'
        },
        {
            title: 'Easy Compettion in the Market',
            imgLink: laugh,
            color: '#fdf4d9'
        },
        {
            title: 'Digital way to getting guest in your hotel',
            imgLink: Wifi,
            color: '#d9f2ec'
        }, {
            title: 'Digital way to getting guest in your hotel',
            imgLink: Wifi,
            color: '#e1f8ff'
        }

    ]
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='grid grid-cols-1 md:grid-cols-4 gap-10 w-full place-items-center p-20 bg-[#fff]'>
            {
                arrayOfitem.map((item, index) => {

                    const ownStyle = {
                        backgroundColor: item.color
                    }
                    return (
                        <div key={index} className='w-[300px] h-[270px] border-[1px] border-slate-200 rounded-lg cursor-pointer shadow-inner hover:shadow-md'>
                            <div className='p-3'>
                                <div style={ownStyle} className='p-16 rounded-lg'>
                                    <div className='w-[50px] h-[50px]  mx-auto'>
                                        <img src={item.imgLink} alt="img" className='w-full h-full' />
                                    </div>
                                </div>
                            </div>
                            <div className='mb-0'>
                                <p className='w-[200px] h-auto mx-auto text-center font-[700]'>{item.title}</p>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Section
