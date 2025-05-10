import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/user-login`, formData);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img
            alt="Tech Ex" 
            src="/screen.png" 
            className="mx-auto h-20 w-auto mb-6 rounded-lg"
          />
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Link
                  to="#"
                  className="text-sm font-medium text-green-500 hover:text-green-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white transition-colors duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-400">Need an account? </span>
          <Link
            to="/signup"
            className="font-medium text-green-500 hover:text-green-400 transition-colors"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;