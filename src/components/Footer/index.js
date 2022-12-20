import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='email_fill'>
                <p>Get Event Update</p>
                <div className='input_container'>
                    <input name="email" placeholder='Enter Email Address' type='email' />
                    <button className='btn_primary'>Submit</button>
                </div>

            </div>
            <div className='contact_details'>
                <p>Contacts Us</p>
                <p className='flex_center'><AiOutlineMail />events@18candleriggs.com</p>
                <p className='flex_center'><AiOutlinePhone />9876545678</p>
                <p className='flex_center'><FaFacebook /> <FaInstagram /></p>

            </div>
        </div>
    )
}

export default Footer