import React, { useState } from "react";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password }).unwrap();
      navigate("/login");
    } catch (err) {
      setMessage("Registration failed. Email may already be in use.");
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-soft-gray/50 p-8">
          <div className="text-center mb-8">
            <h1 className="font-heading text-2xl font-bold text-primary">
              Join the Community
            </h1>
            <p className="text-primary/50 text-sm mt-1">
              Create your Maram Heritage account
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary/70 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-bgPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-3 text-sm"
                placeholder="Choose a username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/70 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-bgPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-3 text-sm"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/70 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-bgPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 px-4 py-3 text-sm"
                placeholder="Create a password"
                required
              />
            </div>
            {message && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-primary/50 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-accent font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
