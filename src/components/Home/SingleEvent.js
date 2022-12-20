import React from 'react'
import dummy_image_1 from "../../assets/images/dummy_image_1.png"
import "./singleEvent.css"
import { GiTicket } from "react-icons/gi"
import { IoIosBriefcase } from "react-icons/io"
import { BiTime } from "react-icons/bi"
const SingleEvent = ({ eve }) => {
    console.log(eve)
    return (
        <div className='event_container'>
            <img className='event_photo' src={dummy_image_1} alt={eve?.image_url ?? ""} />
            <div>
                <p className='title'>{eve?.title}</p>
                <p className="description">{eve?.description}</p>
                <p className='ticket_price'>
                    <span><GiTicket style={{ marginRight: "5px" }} />Ticket: {eve?.ticket_price}</span>
                    <span><BiTime style={{ marginRight: "5px" }} />Show 9pm | Doors 6pm</span>
                </p>
                <p className='date'><IoIosBriefcase style={{ marginRight: "5px" }} />{eve?.date}</p>

                <button className='btn_primary'>
                    Book Ticket
                </button>
            </div>


        </div>
    )
}

export default SingleEvent