import React from 'react'
import {Link}  from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div>
      <ul className='flex justify-end border h-16 bg-pink-100 ' >
        <li 
        className='mt-4 mx-5 infotext-black-500 transition duration-200 hover:text-red-500 hover:ease-in-out focus:text-neutral-200'>
           <Link className='text-xl ' 
           to={"/"}>Home</Link>
        </li>
        <li className='mt-4 mx-5 infotext-black-500 transition duration-200 hover:text-red-500 hover:ease-in-out focus:text-neutral-200'>
           <Link className='text-xl ' 
           to={"/HomeOwner"}>Owner</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar