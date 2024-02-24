import React from 'react';
import barcelona from '../assets/barcelona.png';
import real from '../assets/real.png';
import liverpool from '../assets/liverpool1.png';
import mm from '../assets/mm.png';

const CommitteeHome = () => {
  // Sample data, replace with actual data
  const winnersPrice = "$10,000";
  const runnersPrice = "$5,000";

  return (
    <div className="bg-white text-white min-h-screen">
      <nav className="bg-red-800 p-4">
        <ul className="flex   justify-around font-bold">
          <li className="text-white hover:text-gray-300"><a href="#teams">Teams</a></li>
          <li className="text-white hover:text-gray-300"><a href="#scores">Scores</a></li>
          <li className="text-white hover:text-gray-300"><a href="#fixtures">Fixtures</a></li>
          <li className="text-white hover:text-gray-300"><a href="#teamstats">Team Stats</a></li>
          <li className="text-white hover:text-gray-300"><a href="#playerstats">Player Stats</a></li>
        </ul>
      </nav>

      {/* Content Section */}
      <div className="p-4 container mx-auto text-black">
        <h1 className="text-4xl font-bold mb-6 text-center">Friends Club Tournament</h1>

        {/* Prize Money */}
        <div className="mb-8 text-center bg-gradient-to-r from-cyan-500 to-green-500 ">
          <h2 className="text-2xl font-bold mb-4">Prize Money</h2>
          <p>Winners: {winnersPrice}</p>
          <p>Runners-up: {runnersPrice}</p>
        </div>

        {/* Sponsorship Ads */}
        <h2 className="text-3xl font-bold mb-8 text-center">Sponsorship</h2>
        <div className='bg-blue-600 w-32 font-bold mx-auto'>
          <img src={mm} alt="" className='w-full' />
        </div>
        
        {/* Team Photos and Registration Link */}
        <h2 className="text-2xl font-bold mb-4 p-4">Teams</h2>
        <div className='flex flex-col md:flex-row justify-around'>
          <img className='w-72 mb-4 md:mb-0' src={barcelona} alt="" />
          <img className='w-72 mb-4 md:mb-0' src={real} alt="" />
          <img className='w-72 mb-4 md:mb-0' src={liverpool} alt="" />
        </div>
        <p className="mt-6 text-center"><a href="#registration" className="text-blue-500 hover:underline">Register your team</a></p>
      </div>
    </div>
  );
};

export default CommitteeHome;
