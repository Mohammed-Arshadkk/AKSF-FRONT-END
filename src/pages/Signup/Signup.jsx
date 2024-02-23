// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import rain from "../../assets/black.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // regex Validation
  function regexValidtion(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      setError("");
    } else {
      setError(
        "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character "
      );
      return;
    }
  }

  // password Validation
  function passwordValidation() {
    regexValidtion(password);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      setError("");
    } else {
      setError("password does not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        userName,
        email,
        password,
      });

      if (response.status === 200) {
        const Token = response.data.token;
        console.log("Tok:", Token);
        localStorage.setItem("jwt", Token);

        navigate("/home");
      } else {
        setError(response.data.error);
      }
    } catch (e) {
      setError(e.response.data.error);
      console.log("error is occured", e);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black"
      style={{ backgroundImage: `url(${rain})`, backgroundSize: "cover" }}
    >
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-3xl p-8 shadow-md max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>
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
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-sm font-semibold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onBlur={passwordValidation}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-white text-sm font-semibold mb-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center">
          <span className="text-red-500" id="error">
            {error}
          </span>
        </div>
        <div className="text-center mt-4">
          <p className="text-white">
            If you already have an account,{" "}
            <Link
              href="/login"
              to={"/login"}
              className="hover:underline text-cyan-500"
            >
              login here
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};
export default Signup;
