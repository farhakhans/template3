"use client";
import { useState } from "react";
import Footer from "../../component/Footer";
import Link from "next/link";
import Navbar from "../../component/Navbar";

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    country: "",
    gender: "",
  });

  const countries = [
    "Pakistan",
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Welcome to the community, " + formData.name + "!");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl w-full max-w-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center">Join Us</h1>
          <img
            src="/right tick.png"
            alt="Nike logo"
            className="w-14 h-8 mx-auto mt-4"
          />
          <div className="text-center mt-4">
            <span className="text-2xl font-bold">BECOME A NIKE MEMBER</span>
            <div className="mt-2">
              <p className="text-sm">
                Create your Nike Member profile and get first access to the
                very best of Nike products, inspiration and community.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full mt-8"
          >
            {/* Full Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-md"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded-md"
              required
            />

            {/* Date of Birth */}
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />

            {/* Country Selection */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {/* Gender Selection */}
            <div className="space-y-2">
              <p className="text-gray-700">Gender:</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Join Us
            </button>

            <p className="text-sm text-center mt-4">
              Not a Member?{" "}
              <Link href="/loginPage" className="text-black underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
