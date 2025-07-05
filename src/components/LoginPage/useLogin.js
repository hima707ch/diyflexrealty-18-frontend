import { useState } from 'react';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Handle successful login
      localStorage.setItem('token', data.token);
      // Redirect or update app state here

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    error,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit
  };
};

export default useLogin;