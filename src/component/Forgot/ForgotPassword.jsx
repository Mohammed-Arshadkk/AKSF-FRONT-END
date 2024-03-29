/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import black from "../../assets/black.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [canSendOTP, setCanSendOTP] = useState(true); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      if (!canSendOTP) {
        setError("You have already sent an OTP. Please wait before sending another.");
        return;
      }
  
      const response = await axios.post("http://localhost:5000/sendotp", {
        email,
      });
  
      if (response.status === 200) {
        if (response.data.message === "OTP Sent Successfully") {
          setSuccessMessage("OTP sent successfully!");
          setCanSendOTP(false);
          setError("")
        } else {
          setError("Failed to send OTP. Please try again later.");
        }
      } else {
        setError("Error occurred while sending OTP.");
      }
    } catch (error) {
      setError("The email is not correct");
    }
  };
  

  // eslint-disable-next-line no-unused-vars 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/otpVerification", { email, otp });
      if (response.status === 200) {
        setSuccessMessage("OTP verified successfully!");
        navigate('/user/ResetPassword', { state: { email } })
        setError("")
        
        // Here you can proceed with further actions like allowing the user to reset the password.
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("Error occurred while verifying OTP.");
    }
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${black})` }}
    >
      <form className="border-2 p-8 rounded-3xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          OTP Verification
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb- text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={sendOtp}
          disabled={!canSendOTP} // Disable the button if canSendOTP is false
          className={`w-full text-white border-2 py-2 rounded-md mb-4 hover:bg-blue-500 ${
            !canSendOTP && "opacity-50 cursor-not-allowed"
          }`} // Add opacity and cursor style when disabled
        >
          Send OTP
        </button>

        <div className="mb-4">
          <label
            htmlFor="otp"
            className="block text-sm font-semibold mb-2 text-white"
          >
            OTP:
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full border-2 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
