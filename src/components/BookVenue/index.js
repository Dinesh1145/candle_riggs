import React, { useState } from 'react'
import banner_1 from "../../assets/images/book_venue_3.png"
import banner_2 from "../../assets/images/book_venue_4.png"
import group from "../../assets/images/group_book_venue.png"
import "./bookVenue.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
const arraySize = 5;

const BookVenue = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleLeftClick = (e) => {
        e.preventDefault()
        if (currentIndex === 0) {
            setCurrentIndex(arraySize - 1);
            return;
        }
        setCurrentIndex(prev => prev - 1);
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        if (currentIndex === arraySize - 1) {
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(prev => prev + 1);
    }

    return (
        <div className='book_venue_container'>
            <em className='title'>At 18 Candelriggs we make it happen</em>
            <div className='bookvenue_banner'>
                <div className='first_banner'>
                    <img src={banner_1} alt="first image" />
                </div>
                <div className='second_banner'>
                    <img src={banner_1} alt="first image" />
                </div>
            </div>
            <div>
                <p className='title' style={{ marginBottom: "20px" }}>Book Venue</p>
                <div className='carousel'>
                    <span className='btn left' onClick={handleLeftClick}><AiOutlineArrowLeft /></span>
                    <span className='btn right' onClick={handleRightClick}><AiOutlineArrowRight /></span>
                    {
                        [...Array(arraySize)].map((image, index) => {
                            return (currentIndex === index) ?
                                <div className='image_container'>
                                    <img src={index % 2 == 0 ? banner_1 : banner_2} alt="banner" />
                                </div> :
                                null
                        }
                        )
                    }
                </div>
            </div>
            <div className='description_div'>
                <div>
                    <img src={group} alt="group" />
                    <p className='content'>
                        A one-stop cabaret lounge in the heart of Merchant City, 18 Candleriggs (formerly known as Wild Cabaret) knows no bounds when it comes to unique dabbles, daring nights and dashing shows.<br /><br />
                        Echoing its eccentric entertainment, the decor is markedly Art Deco. Gilded in gold, with a bar boasting its name up in Hollywood-style lights, these two spaces epitomize showbiz and glistening sass. Sashay down to a table of baroque seats and let the show commence.<br /><br />
                        Events are the name of the game at 18 Candelriggs, where live music and cabaret reign supreme. From burlesque shows and circus troupes to comedy nights and luxe shows, it's at the top of its game when it comes to providing guests with a wholly unique drinking and dining experience in the city. Top hats? Sparkles? And feather boas? These all come as standard.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookVenue