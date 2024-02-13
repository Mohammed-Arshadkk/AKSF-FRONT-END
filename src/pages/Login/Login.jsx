import React, { useState } from 'react';
import black from '../../assets/black.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () =>{
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    username: 'Mohammed Arshad kk',
    password: 'Arshad@1234'
  });

  const [error,setError] =useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login",formData)
    console.log('Login submitted:', formData);
    console.log(response);
    if(response.status == 200){
      navigate("/home")
    }
    

  }catch (e) {
    if(e.response&&e.response.data.message){
      setError(e.response.data.message)
    }else{
      setError(e.response.data.error);
      console.log("error is occured", e);
    }
   
  }
  }
  
  

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundImage:`url(${black})`,backgroundSize:"cover"}}>
      <form className="border-2 p-8 rounded-3xl shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-white text-sm font-semibold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-white">Remember me</label>
          </div>
          <a href="#" className="text-blue-300 hover:underline" onClick="">Forgot Password?</a>
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

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          >
            Login
          </button>
        </div>

      </form>
    </div>
  );
};


export default Login