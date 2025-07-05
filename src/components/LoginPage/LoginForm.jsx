import React from 'react';
import useLogin from './useLogin';
import images from '../assets/images';

const LoginForm = () => {
  const {
    email,
    password,
    error,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit
  } = useLogin();

  return (
    <form id="LoginForm_1" className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div id="LoginForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="LoginForm_3">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div id="LoginForm_4">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      {error && (
        <div id="LoginForm_5" className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <div id="LoginForm_6">
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span id="LoginForm_7" className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : 'Sign in'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;