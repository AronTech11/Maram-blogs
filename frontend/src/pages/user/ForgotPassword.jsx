import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetLink, setResetLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");
    setResetLink("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        if (data.resetUrl) {
          setResetLink(data.resetUrl);
        }
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-soft-gray/50 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <h1 className="font-heading text-2xl font-bold text-primary">
              Forgot Password?
            </h1>
            <p className="text-primary/50 text-sm mt-2 leading-relaxed">
              Enter your email address and we&apos;ll generate a reset link for
              you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary/70 mb-1">
                Email Address
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

            {message && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-4 rounded-lg">
                <p className="font-medium">{message}</p>
                {resetLink && (
                  <div className="mt-3">
                    <p className="text-xs text-green-600 mb-2">
                      Click the link below to reset your password:
                    </p>
                    <Link
                      to={resetLink.replace(window.location.origin, "")}
                      className="text-accent font-medium text-sm hover:underline break-all"
                    >
                      Reset My Password →
                    </Link>
                  </div>
                )}
              </div>
            )}

            {error && (
              <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-primary/50">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-accent font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
            <p className="text-sm text-primary/50">
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
    </div>
  );
};

export default ForgotPassword;
