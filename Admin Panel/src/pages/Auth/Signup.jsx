import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-page dark:bg-page px-4">
      <div className="w-full max-w-md rounded-lg bg-white dark:bg-card p-8 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-text-primary text-center mb-2">
            Create your account
          </h2>
          <p className="text-center text-sm text-[var(--text-secondary)] dark:text-text-secondary mb-6">
            Or{" "}
            <a
              className="font-medium text-[var(--text-secondary)] dark:text-text-secondary hover:underline"
              href="/log-in"
            >
              sign in to your existing account
            </a>
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-muted mb-1"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
                id="full-name"
                name="full-name"
                placeholder="John Doe"
                required=""
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-muted mb-1"
                htmlFor="email-address"
              >
                Email address
              </label>
              <input
                autoComplete="email"
                className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
                id="email-address"
                name="email"
                placeholder="john.doe@example.com"
                required=""
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-muted mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
                id="username"
                name="username"
                placeholder="johndoe"
                required=""
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-muted mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                autoComplete="new-password"
                className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
                id="password"
                name="password"
                placeholder="••••••••"
                required=""
                type="password"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-muted mb-1"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                autoComplete="new-password"
                className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required=""
                type="password"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-muted mb-1"
                htmlFor="role"
              >
                Role/Title
              </label>
              <select
                className="input w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-card dark:text-text-primary"
                id="role"
                name="role"
              >
                <option>Select your role</option>
                <option>Manager</option>
                <option>Front Desk</option>
                <option>Housekeeping</option>
                <option>Administrator</option>
              </select>
            </div>
          </div>
          <div>
            <button
              className="button_primary w-full bg-blue-500 hover:bg-accent/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
