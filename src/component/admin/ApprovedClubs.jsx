import axios from "axios";
import  { useEffect, useState } from "react";

const ApprovedClubs = () => {
  const [clubs,setClubs] = useState([]);
  const [reject,setReject]= useState(false)
  const [error,setError] = useState([]);

  useEffect(()=> {
    const fetchApprovedClubs = async () => {
      try {
        const response =await axios.get("http://localhost:5000/admin/approvedClubs");
        setClubs(response.data.data)
      } catch (error) {
        setError("Failed to fetch approved clubs");
        console.log(error);
      }
    }
    fetchApprovedClubs()
  }, [])

  useEffect(() => {
    const fetchRejectedClubs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/rejectedClubs");
        setReject(response.data);
      } catch (error) {
        setError('Failed to fetch the Rejected Clubs');
        console.log(error);
      }
    };
    fetchRejectedClubs();
  }, []);
  

  return (
    <div>
    <div className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {error && <div className="text-red-500">{error}</div>}
        {clubs.map((club) => (
          <div key={club._id} className="bg-white rounded-3xl p-8 mb-5">
            <h2 className="font-bold text-2xl text-black">{club.clubName}</h2>
            <h2 className="font-semibold">{club.place}</h2>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ApprovedClubs;
