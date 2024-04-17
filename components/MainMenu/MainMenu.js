import React from 'react'
import {FaHeart, FaHouseUser} from 'react-icons/fa'

export const MainMenu = (props) => {
  console.log("MAIN MENU: ", props)
  return (
    <header className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-20 flex">
      <div className='py-4 pl-5 flex text-pink-600'>
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
    </header>
  )
}