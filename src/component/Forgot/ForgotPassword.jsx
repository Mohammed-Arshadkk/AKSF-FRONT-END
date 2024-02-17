import React, { useState } from "react";
import axios from "axios";
import black from "../../assets/black.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [canSendOTP, setCanSendOTP] = useState(true); // Add a state to control whether OTP can be sent

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      if (!canSendOTP) {
        setError(
          "You have already sent an OTP. Please wait before sending another."
        );
        return;
      }

      // Check if the email is already signed in your database
      const response = await axios.post("http://localhost:5000/sendotp", {
        email,
      });
      if (response.status === 200 && response.data.exists) {
        if (response.status === 200) {
          setSuccessMessage("OTP sent successfully!");
          setCanSendOTP(false);
        } else {
          setError("Failed to send OTP. Please try again later.");
        }
      } else {
        setError("Email not found in database.");
      }
    } catch (error) {
      setError("Error occurred while sending OTP.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Verify OTP logic
  //   try {
  //     const response = await axios.post("/verify-otp", { email, otp });
  //     if (response.status === 200 && response.data.valid) {
  //       setSuccessMessage("OTP verified successfully!");
  //     } else {
  //       setError("Invalid OTP. Please try again.");
  //     }
  //   } catch (error) {
  //     setError("Error occurred while verifying OTP.");
  //   }
  // };

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
          className={`w-full text-white border-2 py-2 rounded-md mb-4 ${
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
          // onClick={handleSubmit}
          className="w-full border-2 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
