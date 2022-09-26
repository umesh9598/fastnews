import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div  >
        <h1 className='py-5  text-gray-600 md:text-left px-20'> <span className='text-5xl font-extrabold  tracking-widest'>Fast</span> <span className='bg-gray-500 px-5 text-2xl  text-white rounded-r-full font-bold tracking-wider'>News</span> </h1>
        <nav className=' bg-gray-800 text-white py-3  md:flex items-center justify-between   px-6 '>
            <div>
            <ul className='text-center  md:flex items-center gap-5   '>
                    <li className='text-white hover:text-yellow-400'> <NavLink to="/">Home</NavLink> </li>
                    <li className='text-white hover:text-yellow-400'><NavLink to="/sports">Sports</NavLink> </li>
                    <li className='text-white hover:text-yellow-400'><NavLink to="/politics">Politics</NavLink> </li>
                    <li className='text-white hover:text-yellow-400'><NavLink to="/finance">Finance</NavLink> </li>
                </ul>
            </div>
            <div className='text-center mt-1  md:flex items-center gap-5   '>
           <a href="https://www.facebook.com/UmeshPawar9598/" target="_blank" rel="noopener noreferrer">
             <i className="fa-brands fa-facebook px-1"></i> </a>
             <a href="https://twitter.com/itsumeshpawar" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter px-1"></i> </a>
            <a href="https://www.instagram.com/umesh__9598/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram px-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/umesh-pawar-4b635323a/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram px-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/umesh-pawar-4b635323a/"  target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin px-1"></i>
            </a>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
