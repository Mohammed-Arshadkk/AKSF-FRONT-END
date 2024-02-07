import React from "react";

function TeamStats() {
  return (
    <div>
      <div className="bg-blue-900 font-bold text-3xl flex justify-center text-white h-20 items-center">
        TEAM STATUS
      </div>
      <div className="bg-gray-300 text-xl font-bold h-12 flex items-center p-4">
        2023 TEAM STATS OFFENSE
      </div>
      <p className="p-8 font-semibold text-xl">Year</p>

      <div className="px-9">
        <div className="relative">
          <p className="border-2 w-[7%] flex justify-center items-center p-2 font-bold">
            2023
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>



      
    </div>
  );
}

export default TeamStats;
