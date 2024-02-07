import React from 'react'
import logo from '../../assets/logos.png'

function Footer() {
  return (
    <div className='bg-blue-900 flex flex-col items-center text-white p-4 sm:p-8 md:p-12'>
    <img className='w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%]' src={logo} alt="" />
    <p className='text-center text-sm sm:text-base'>
      © 2024 NFL Enterprises LLC. NFL and the NFL shield design are registered trademarks of the National Football League. The team names, logos, and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. NFL footage © NFL Productions LLC.
    </p>
    
    <div className="mt-4 text-white underline-links flex flex-wrap gap-4 md:gap-8 lg:gap-10 font-bold p-4 ">
      <a href="#" className="hover:underline">PRIVACY POLICY</a>
      <a href="#" className="hover:underline">TERMS OF SERVICE</a>
      <a href="#" className="hover:underline">SUBSCRIPTION TERMS AND CONDITIONS</a>
      <a href="#" className="hover:underline">AD CHOICES</a>
      <a href="#" className="hover:underline">YOUR PRIVACY CHOICES</a>
    </div>
  </div>
  
        

      
    
    
  )
}

export default Footer
