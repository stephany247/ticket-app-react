import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "../store/useToast";
import { useAuthStore } from "../store/useAuthStore";

function Login() {
  const navigate = useNavigate();
  const { showToast } = useToastStore();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateFields = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    // Email validation
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

    // Password validation
    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      showToast("Please fix the errors before submitting", "error");
      return;
    }

    const res = await login(email, password);

    if (res.success) {
      showToast("Login successful!", "success");
      navigate("/dashboard");
    } else {
      showToast(res.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        <div className="space-y-1">
          <label htmlFor="email" className="block font-medium">
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
        <div className="space-y-1">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="pasword"
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
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 mt-4 rounded-md transition duration-200 cursor-pointer"
        >
          Login
        </button>

        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/auth/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
