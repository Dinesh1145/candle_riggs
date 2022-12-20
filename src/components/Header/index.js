import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import "./header.css";
import { BiSearch } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai"

const pages = [
    { title: "Home", url: "/" },
    { title: " What's On", url: "/whats-on" },
    { title: "Book Venue", url: "/book-venue" },
    { title: "Gallery", url: "/gallery" },
    { title: "ContactUs", url: "/contactUs" }
]

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    const handleNavItemClick = (page) => {
        navigate(page.url)
        setShowMenu(false)
    }

    const handleLogoClick = () => navigate("/")

    const handleMenuClick = () => {
        setShowMenu(prev => !prev);
    }

    return (
        <div className='header'>
            <img className='logo' onClick={handleLogoClick} src={logo} alt="logo" />
            <div className='search_container'>
                <input className='search' name="search" placeholder='search' type="search" />
                <BiSearch className='search_icon' />
            </div>
            <BiSearch className='search_icon_1' />
            <div className='nav'>
                {pages && pages.map(page => (
                    <div className='nav_items' key={page.url} onClick={() => handleNavItemClick(page)}>{page.title}</div>
                ))}
            </div>
            <div className='menu_resp'>
                <span className='menu' onClick={handleMenuClick} >
                    <AiOutlineMenu />
                </span>
                <div className={`drop_down ${showMenu && "show"}`}>
                    {pages && pages.map(page => (
                        <div className='nav_items' key={page.url} onClick={() => handleNavItemClick(page)}>{page.title}</div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Header