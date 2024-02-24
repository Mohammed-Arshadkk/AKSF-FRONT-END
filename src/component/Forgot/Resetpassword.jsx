import React, { useState } from 'react';
import black from "../../assets/black.png";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    if (newPassword === confirmPassword) {
      // Passwords match, proceed with reset
      setSubmitted(true);
      // Additional logic for resetting password
    } else {
      // Passwords don't match, show error or handle accordingly
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${black})` }}>
      <div className="max-w-md w-full">
        <form className="border-2 rounded-3xl shadow-md  px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Reset Password</h2>
          {submitted ? (
            <p className="text-green-500 mb-4">Password reset email sent successfully!</p>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  New Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="newPassword"
                  type="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
