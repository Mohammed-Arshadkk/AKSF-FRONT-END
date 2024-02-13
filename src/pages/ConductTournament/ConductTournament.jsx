import React, { useState } from 'react';
import ground from '../../assets/gr.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ConductTournament = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        clubName: '',
        place: '',
        phoneNumber: '',
        startDate: '',
        endDate: '',
        secretaryName: '',
        presidentName: '',
        sponsorship: '',
        winnersPrice: '',
        runnersPrice: '',
    });

    const [error,setError] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
        try {
            const response = await axios.post("http://localhost:5000/conductTournament", formData);
            console.log('Response:', response);
            if(response.status===200){
                navigate("/committeeHome"); 
            }else if(response.status===400){
                console.log("hai");
            }
        } catch (error) {
            setError(error.response.data.error);
            console.error("Error occurred:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${ground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: '#fff' }}>
            <form className="max-w-md w-full bg-opacity-70 bg-black px-8 py-4  rounded " onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Tournament Committe Registration</h2>

                <div className="mb-4">
                    <label htmlFor="clubName" className="block text-sm font-semibold mb-1">Club Name:</label>
                    <input type="text" id="clubName" name="clubName" value={formData.clubName} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="place" className="block text-sm font-semibold mb-1">Place:</label>
                    <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black
                    " required />
                </div>

                <div className="mb-4">
                    <label htmlFor="number" className="block text-sm font-semibold mb-1">Phone Number:</label>
                    <input type="number" id="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-semibold mb-1">Starting Date:</label>
                    <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="endDate" className="block text-sm font-semibold mb-1">Ending Date:</label>
                    <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="secretaryName" className="block text-sm font-semibold mb-1">Secretary Name:</label>
                    <input type="text" id="secretaryName" name="secretaryName" value={formData.secretaryName} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="presidentName" className="block text-sm font-semibold mb-1">President Name:</label>
                    <input type="text" id="presidentName" name="presidentName" value={formData.presidentName} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="sponsorship" className="block text-sm font-semibold mb-1">Sponsorship:</label>
                    <input type="text" id="sponsorship" name="sponsorship" value={formData.sponsorship} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="winnersPrice" className="block text-sm font-semibold mb-1">Winners Prize Money:</label>
                    <input type="number" id="winnersPrice" name="winnersPrice" value={formData.winnersPrice} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="runnersPrice" className="block text-sm font-semibold mb-1">Runners-up Prize Money:</label>
                    <input type="number" id="runnersPrice" name="runnersPrice" value={formData.runnersPrice} onChange={handleChange} className="w-full px-4 py-2 rounded border text-black" required />
                </div>

                <div>
          {
            error && (
              <div className='flex  justify-center text-red-500'>
                {
                  error
                }
              </div>
            )
          }
        </div>

                <div className=" flex justify-center">
                    <button type="submit" value="Submit"  className="px-4 bg-green-500 text-white py-2 rounded cursor-pointer hover:bg-green-600" >Submit</button>
                </div>
                <div className="text-center mt-4 ">
      <p>If you already have an registered, <a href="/login" className="text-blue-400 hover:underline">login here</a></p>
    </div>
            </form>
        </div>
    );
};

export default ConductTournament;
