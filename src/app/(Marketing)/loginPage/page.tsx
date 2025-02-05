"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Login({ params }: { params: { loginPage: string } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [signInMessage, setSignInMessage] = useState(''); // State for the sign-in message

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setSignInMessage(`Logged in successfully with:\nEmail: ${email}`);

    setEmail('');
    setPassword('');
  };

  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <img src="/right tick.png" alt="Nike Logo" className="h-10" />
          </div>
          <h1 className="text-center text-xl font-bold mb-6">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full p-2 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={() => setKeepSignedIn(!keepSignedIn)}
                  className="mr-2"
                />
                Keep me signed in
              </label>
              <Link href="/forgot-password" className="text-sm text-black hover:underline">
                Forgotten your password?
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              By logging in, you agree to Nike's <Link href="/privacy-policy" className="underline">Privacy Policy</Link> and <Link href="/terms-of-use" className="underline">Terms of Use</Link>.
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mt-4 hover:bg-gray-800"
            >
              SIGN IN
            </button>
          </form>
          {signInMessage && (
            <div className="mt-4 text-center text-green-600">
              <p>{signInMessage}</p>
            </div>
          )}
          <p className="text-sm text-center mt-4">
            Not a Member? <Link href="/joinUs" className="text-black underline">Join Us</Link>
          </p>
        </div>
      </div>
      
      {/* Back to Home Button */}
      <Link href="/">
        <button className="w-40 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4 mx-auto block">
          Back Home
        </button>
      </Link>
      
      <Footer />
      <p>{params.loginPage}</p>
    </div>
  );
}
