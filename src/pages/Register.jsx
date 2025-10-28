import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "../store/useToast";
import { useAuthStore } from "../store/useAuthStore";

function Register() {
  const navigate = useNavigate();
  const { showToast } = useToastStore();
  const { register } = useAuthStore();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validateFields = () => {
    let valid = true;
    setEmailError("");
    setFullNameError("");
    setPasswordError("");
    setConfirmError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Enter a valid email address");
        valid = false;
      }
    }

    if (!fullName.trim()) {
      setFullNameError("Full Name is required");
      valid = false;
    } else if (password.length < 6) {
      setFullNameError("Full Name must be at least 6 characters");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmError("Confirm your password");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmError("Passwords do not match");
      valid = false;
    }

    return valid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      showToast("Please fix the errors before submitting", "error");
      return;
    }

    const res = await register(fullName, email, password);

    if (res.success) {
      showToast("Registration successful!", "success");
      navigate("/dashboard");
    } else {
      showToast(res.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              fullNameError
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullNameError && (
            <p className="text-red-500 text-sm">{fullNameError}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              emailError
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              passwordError
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              confirmError
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmError && (
            <p className="text-red-500 text-sm">{confirmError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-3">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
