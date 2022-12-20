import React, { useState } from 'react'
import "./home.css"
import eventData from '../../Data/eventsData'
import SingleEvent from './SingleEvent'

const Home = () => {
    const [events] = useState(eventData)

    return (
        <div className='container'>
            <div className='home_banner'>
                <div className='banner_top'>
                    <div>
                        <h2 className='size_50'> The perfect night out in Glasgow !</h2>
                        <h3 className='size_35'>18 Candleriggs</h3>
                        <h3 className='size_35'>ON 24TH AND 15TH FEB</h3>
                        <button>Book Ticket</button>
                        <h3 className='size_30'>3 COURSE MEAL & SHOW INCLUDED $ 20 per person</h3>
                    </div>
                </div>
            </div>
            <div className='home_events'>
                <h3 className='event_name size_30'>What's On At Glasgow's Coolest Event Space.</h3>
                <div className='events'>
                    {events && events.map(eve => (
                        <SingleEvent key={eve.id} eve={eve} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home