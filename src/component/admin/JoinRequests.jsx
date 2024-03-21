import { useEffect, useState } from "react";
import axios from "axios";

const JoinRequests = ({ onApproval }) => {
  // Receive onApproval as a prop
  const [error, setError] = useState("");
  const [requests, setRequests] = useState([]);

  const fetchJoinRequests = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/joinRequests"
      );
      setRequests(response.data.data);
    } catch (error) {
      setError("Failed to fetch join requests");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJoinRequests();
  }, []);

  const handleApproval = async (id, action) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/admin/approveRequests/${id}`,
        { action }
      );
      console.log(response.data);
      // After approval/rejection, fetch updated join requests
      fetchJoinRequests();
      if (action === "approve") {
        onApproval(); 
      }
    } catch (error) {
      setError("Failed to update join request status");
      console.error(error);
    }
  };

  return (
    <div>
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Display message when there are no requests */}
        {requests.length === 0 && (
          <div className="bg-red-500 text-white text-2xl font-semibold px-4 py-2 rounded">
            No requests found
          </div>
        )}

        {requests.map((request) => (
          <div key={request._id} className="bg-white rounded-3xl p-6 mb-5">
            {/* Display join request details */}
            <div className="pb-6">
              <h2 className="font-bold">Join Request Details</h2>
              <p>Club Name: {request.clubName}</p>
              <p>Phone Number: {request.phoneNumber}</p>
            </div>

            {/* Buttons to approve or reject join request */}
            <div className="flex justify-between items-center">
              <div>
                {/* Button to approve join request */}
                <button
                  className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => handleApproval(request._id, "approve")}
                >
                  Approve
                </button>
                {/* Button to reject join request */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleApproval(request._id, "reject")}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default JoinRequests;
