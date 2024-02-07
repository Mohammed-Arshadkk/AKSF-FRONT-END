import {useState} from 'react'

function Otp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        otp: "",
      });
    
      const [error, setError] = useState("");
      const [showOTPInput, setShowOTPInput] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Basic validation: Check if password and confirmPassword match
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }
    
        // If validation passes, request OTP (here simulate it for demonstration)
        // In a real scenario, this would involve sending a request to a server
        // to generate and send an OTP to the user's email or phone number
        simulateOTPSend();
      };
    
      const simulateOTPSend = () => {
        // Simulating OTP generation and sending
        // In a real scenario, you would call your backend to send OTP
        setShowOTPInput(true);
      };
    
      const handleOTPSubmit = (e) => {
        e.preventDefault();
    
        // Here you would verify the OTP entered by the user
        // by sending it to your backend for validation
        // For demonstration purpose, let's just log the OTP
        console.log("OTP submitted:", formData.otp);
    
        // After OTP verification, you can proceed with user registration
        // or any other actions as needed
      };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form className="bg-teal-600 p-8 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm font-semibold">{error}</div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-white text-sm font-semibold mb-2"
          >
            Username:
          </label>
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

        {/* Other input fields (email, password, confirmPassword) */}

        {showOTPInput && (
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-white text-sm font-semibold mb-2"
            >
              OTP:
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        <div className="flex justify-center">
          {!showOTPInput ? (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            >
              Send OTP
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleOTPSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            >
              Verify OTP
            </button>
          )}
        </div>

        {/* Login link */}
        <div className="text-center mt-4 ">
          <p>
            If you already have an account,{" "}
            <a href="/login" className=" hover:underline text-white">
              login here
            </a>
            .
          </p>
        </div>
      </form>
    </div>
    </>
  )
}

export default Otp
