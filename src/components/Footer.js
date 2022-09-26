import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-gray-800'>
        <div  >
        <h1 className='py-2  text-white md:text-left px-5'> <span className='text-5xl font-extrabold  tracking-widest'>Fast</span> <span className='bg-gray-500 px-5 text-2xl  text-white rounded-r-full font-bold tracking-wider'>News</span> </h1>
        <div className='text-center text-white mt-1  md:flex items-center justify-center gap-3 px-5 mb-1   '>
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
            <div >
                <p className='text-white text-lg mb-2'>&copy; FastNews.com</p>
            </div>
        </div>
       

      
    </div>
  )
}

export default Footer
