import React from 'react'
import Carditem from './CardItem'
// import './Cards.css'
const Cards = () => {
    return (
        <div className="cards">
            <Carditem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
        </div>
    )
}

export default Cards
