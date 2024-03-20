/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/red.png";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ isLoggedIn }) {
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [showStatsDropdown, setShowStatsDropdown] = useState(false);

  const navigate = useNavigate()

  const toggleNewsDropdown = () => {
    setShowNewsDropdown(!showNewsDropdown);
  };

  const toggleStatsDropdown = () => {
    setShowStatsDropdown(!showStatsDropdown);
  };

  const handleLinkClick = () => {
    if (!isLoggedIn) {
      alert("Please sign up or log in to access this feature!");
    
    }
   
  };

  return (
    <>
      <header className="flex justify-center items-center p-4">
        <img src={logo} alt="" className="mr-2 h-8" />
        <h1 className="font-bold text-2xl">ALL KERALA SEVENS FOOTBALL</h1>
      </header>

      <nav className="bg-blue-900 p-3 text-center flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
          <div className="bg-red-500 text-white p-2 mr-4 md:mr-10 font-bold rounded-md">
            AKSF
          </div>

          <div
            className="relative group"
            onMouseEnter={toggleNewsDropdown}
            onMouseLeave={toggleNewsDropdown}
          >
            <Link
              to="/user/news"
              onClick={() => handleLinkClick("/news")} // Pass the path to handleLinkClick function
              className="text-white px-2 py-1 hover:underline font-bold group-hover:text-yellow-300"
            >
              News
            </Link>
            {showNewsDropdown && (
              <div className="absolute bg-gray-100 text-black w-[130px] h-[80px] mt-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-center p-4">
                <p className="mb-1 text-sm font-semibold">Latest News</p>
                <p className="text-sm font-semibold">Injuries</p>
              </div>
            )}
          </div>
          <Link
            to="/user/scores"
            onClick={() => handleLinkClick("/scores")}
            className="text-white px-2 py-1 hover:underline font-bold hover:text-yellow-300"
          >
            Scores
          </Link>
          <Link
            to="/user/fixtures"
            onClick={() => handleLinkClick("/fixtures")}
            className="text-white px-2 py-1 hover:underline font-bold hover:text-yellow-300"
          >
            Fixtures
          </Link>
          <div
            className="relative group"
            onMouseEnter={toggleStatsDropdown}
            onMouseLeave={toggleStatsDropdown}
          >
            <Link
              to="/user/stats"
              onClick={() => handleLinkClick("/stats")}
              className="text-white px-2 py-1 hover:underline font-bold group-hover:text-yellow-300"
            >
              Stats
            </Link>
            {showStatsDropdown && (
              <div className="absolute bg-gray-100 text-black w-[130px] h-[80px] mt-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-center p-4">
                <p className="mb-1 text-sm font-semibold">Team Stats </p>
                <p className="mb-1 text-sm font-semibold">Player Stats</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center">
          <Link
            to="/user/stats"
            onClick={() => handleLinkClick("/stats")}
            className="text-white px-2 py-1 md:mr-4 hover:underline font-bold mb-2 md:mb-0 hover:text-yellow-300"
          >
            Watch Live
          </Link>
          <Link
            href="#signup"
            to={"/user/signup"}
            className="text-white mr-4 px-2 py-1 md:px-4 md:py-2 bg-green-500 rounded-md hover:bg-green-600 font-bold"
          >
            Signup
          </Link>
          <Link
            to="/user/conduct-tournament"
            className="text-white px-2 py-1 md:px-4 md:py-2 bg-green-500 rounded-md hover:bg-green-600 font-bold"
          >
            Conduct Tournament
          </Link>
        </div>
      </nav>

      {/* News Home */}
      <div className="container-fluid mb-4">
        <div className="text-blue-600 p-4 border-b-4">
          <h2 className="text-lg font-bold mb-2">News Home</h2>
        </div>
      </div>

      {/* Latest News */}
      <div className="mb-4 underline mx-4 md:mx-16">
        <h1 className="text-2xl font-bold">Latest News</h1>
      </div>
    </>
  );
}

export default Header;
