import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-bgPrimary px-6">
      <h1 className="font-heading text-8xl md:text-9xl font-bold text-accent tracking-wider">
        404
      </h1>
      <p className="font-heading text-xl md:text-2xl font-bold text-primary mt-4 mb-2">
        Page Not Found
      </p>
      <p className="text-primary/50 text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-accent text-white font-medium px-8 py-3 rounded-lg hover:bg-accent/90 transition"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default ErrorPage;
