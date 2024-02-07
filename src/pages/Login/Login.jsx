import React, { useState } from 'react';
import black from '../../assets/black.png'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for login (e.g., API call, validation, etc.)
    console.log('Login submitted:', formData);
  };

  const handleForgotPassword = () => {
    // Add logic for handling forgot password (e.g., redirect to a forgot password page)
    console.log('Forgot Password clicked');
  };

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
          <a href="#" className="text-blue-300 hover:underline" onClick={handleForgotPassword}>Forgot Password?</a>
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

export default Login;
