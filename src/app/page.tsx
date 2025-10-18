'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function Home() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState('outstation');
  const [pickupCity, setPickupCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'
  ];

  const handleBookCab = () => {
    if (!pickupCity || !destinationCity || !mobileNumber) {
      alert('Please fill in all required fields');
      return;
    }

    // Create URL with search parameters
    const params = new URLSearchParams({
      pickup: pickupCity,
      destination: destinationCity,
      service: serviceType,
      mobile: mobileNumber
    });

    router.push(`/cabs?${params.toString()}`);
  };

  return (
    <div className="w-screen min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-20">
        <Header />
      </div>

      {/* Content */}
      <div 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: "url('./bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-transparent"></div>
        
        <div className="relative z-10 py-8 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-4 md:px-8">
          {/* Left Side - Text Content */}
          <div className="hidden lg:flex flex-1 text-white text-left lg:pr-16 order-2 lg:order-1 flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">cabbazar</h1>
                <p className="text-xl text-gray-300">All India Cab Service</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-3">Comfortable Rides</h2>
                <p className="text-lg text-gray-300">Travel in style with our premium cab service across India</p>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form Card */}
          <div className="w-full max-w-sm lg:max-w-sm md:w-96 bg-white rounded-2xl shadow-2xl p-4 md:p-8 flex flex-col justify-center order-1 lg:order-2">
            {/* Service Type Tabs */}
            <div className="flex mb-4 md:mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setServiceType('outstation')}
                className={`flex-1 py-2.5 md:py-2 px-3 md:px-4 rounded-md text-sm font-medium transition-colors ${serviceType === 'outstation'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Outstation
              </button>
              <button
                onClick={() => setServiceType('local')}
                className={`flex-1 py-2.5 md:py-2 px-3 md:px-4 rounded-md text-sm font-medium transition-colors ${serviceType === 'local'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Local / Airport
              </button>
            </div>

            {/* Pickup City */}
            <div className="mb-3 md:mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup City
              </label>
              <div className="relative">
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none bg-white text-base"
                >
                  <option value="">Select pickup city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Destination City */}
            <div className="mb-3 md:mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination City
              </label>
              <div className="relative">
                <select
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                  className="w-full p-3 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none bg-white text-base"
                >
                  <option value="">Select destination city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="mb-4 md:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <div className="flex">
                <select className="p-3 border border-gray-300 rounded-l-lg border-r-0 focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white text-base">
                  <option value="+91">IN +91</option>
                </select>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter mobile number"
                  className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base"
                />
              </div>
            </div>

            {/* Book Button */}
            <button
              onClick={handleBookCab}
              className="w-full bg-yellow-400 text-gray-900 py-3.5 md:py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-base"
            >
              Check Price & Book Cab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
