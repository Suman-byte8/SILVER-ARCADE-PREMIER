import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-page dark:bg-page px-4">
      <div className="w-full max-w-md rounded-lg bg-white dark:bg-card p-8 shadow-lg">
        <h1 className="p-2 text-center text-3xl font-bold text-[var(--text-primary)] dark:text-text-primary">
          Admin Login
        </h1>
        <p className="p-2 text-center text-[var(--text-secondary)] dark:text-text-secondary">
          Welcome back! Please enter your details.
        </p>
        <form>
          <div className="mb-4 py-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 dark:text-muted"
              for="username"
            >
              Username or Email
            </label>
            <input
              className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
              id="username"
              placeholder="e.g., admin or admin@hotel.com"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 dark:text-muted"
              for="password"
            >
              Password
            </label>
            <input
              className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to={"/"} className="button_primary w-full bg-blue-500 hover:bg-accent/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center" type="submit">
              Login
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link
              className="text-sm text-[var(--text-secondary)] dark:text-text-secondary hover:underline"
              to={"/forgot-password"}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
