import React, { useState, useEffect } from "react";
import axios from "axios"; // Corrected import statement

function Admin() {
  const [tournamentRequests, setTournamentRequests] = useState([]);

  // Function to fetch tournament requests from the server
  const fetchTournamentRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin"); // Adjusted endpoint URL
      setTournamentRequests(response.data);
    } catch (error) {
      console.error("Error fetching tournament requests:", error);
    }
  };

  // Function to approve a tournament request
  const approveRequest = async (clubName) => {
    try {
      await axios.post("/admin/approve", { clubName }); // Adjusted endpoint URL
      // After approval, you might want to update the list of requests
      fetchTournamentRequests();
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };

  // Function to reject a tournament request
  const rejectRequest = async (clubName) => {
    try {
      await axios.post("/admin/reject", { clubName }); // Adjusted endpoint URL
      // After rejection, you might want to update the list of requests
      fetchTournamentRequests();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  // useEffect hook to fetch tournament requests when the component mounts
  useEffect(() => {
    fetchTournamentRequests();
  }, []);

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Tournament Requests</h1>
        <ul>
          {tournamentRequests.map((request, index) => (
            <li key={index} className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{request.clubName}</p>
                  <p className="text-gray-600">Place: {request.place}</p>
                  <p className="text-gray-600">
                    Start Date: {request.startDate}
                  </p>
                  <p className="text-gray-600">End Date: {request.endDate}</p>
                </div>

                {/* Button container div start */}
                <div>
                  <button
                    onClick={() => approveRequest(request.clubName)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => rejectRequest(request.clubName)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Reject
                  </button>
                </div>
                {/* Button container div end */}


              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Admin;
