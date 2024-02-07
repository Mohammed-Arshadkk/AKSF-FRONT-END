import React from 'react'
import bg from '../assets/ground.png'
import Argentina from '../assets/Argentina.webp'
import green from '../assets/green.png'
import uruguay from '../assets/uruguay.png'
import canada from '../assets/canada.png'
import italy from '../assets/italy.png'
import hhh from '../assets/hhh.png'
import white from '../assets/white.png'
import msf from '../assets/msf.png'


function  Team() {
  return (

<div style={{backgroundImage:`url(${bg})`}} className='h-screen w-full bg-cover'> 
    <nav className='font-bold text-4xl flex justify-center p-4 '>
        TOURNAMENT TEAMS
    </nav>

<div className='grid grid-cols-4 p-10'>
<div className=' items-center m-10'>
    <img  src={green} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">Saudi Arabia </h2>
</div>
<div className=' items-center m-10'>
    <img  src={Argentina} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">Argentina </h2>
</div>
<div className=' items-center m-10'>
    <img  src={uruguay} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">Uruguay </h2>
</div>
<div className=' items-center m-10'>
    <img  src={canada} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">Canada </h2>
</div>
<div className=' items-center m-10'>
    <img  src={italy} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">Italy </h2>
</div>
<div className=' items-center m-10'>
    <img  src={hhh} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">Croatia </h2>
</div>
<div className=' items-center m-10'>
    <img  src={msf} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">green </h2>
</div>
<div className=' items-center m-10'>
    <img  src={white} alt="" />
    <h2 className="text-xl font-bold mb-2 bg-white flex justify-center">White </h2>
</div>

</div>
</div>
  )
}

export default Team
