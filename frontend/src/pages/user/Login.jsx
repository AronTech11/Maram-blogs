import React, { useState } from "react";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password }).unwrap();
      const { user } = response;
      dispatch(setUser({ user }));
      navigate("/");
    } catch (err) {
      setMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-soft-gray/50 p-8">
          <div className="text-center mb-8">
            <h1 className="font-heading text-2xl font-bold text-primary">
              Welcome Back
            </h1>
            <p className="text-primary/50 text-sm mt-1">
              Sign in to your Maram Heritage account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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
                placeholder="Your password"
                required
              />
            </div>
            {message && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {message}
              </p>
            )}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-accent hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-primary/50 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-accent font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
