import React, { useState } from "react";
import black from "../../assets/balls.png";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post("/api/send-otp", { email });
      if (response.status === 200) {
        setSuccessMessage("OTP sent successfully!");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${black})`, backgroundSize: "cover" }}
    >
      <form className=" bg-white border-2 p-8 rounded-lg shadow-md max-w-md ">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Forgot Password</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={sendOtp}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4"
        >
          Send OTP
        </button>

        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-1/6 text-center border rounded border-gray-400 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <button
          // onClick={verifyOtp}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Verify OTP
        </button>

        <div>
          {error && (
            <div className="flex justify-center text-red-500">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  
  );
};

export default ForgotPassword;
