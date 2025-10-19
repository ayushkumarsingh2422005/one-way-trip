'use client';

import React from 'react';
import Link from 'next/link';

interface Car {
  id: string;
  name: string;
  type: string;
  features: string[];
  image: string;
  capacity: string;
}

interface CarCardsProps {
  from: string;
  to: string;
}

// Dynamic pricing based on route
const getPricing = (from: string, to: string, carId: string): number => {
  const pricing: { [key: string]: { [key: string]: number } } = {
    'Delhi-Ludhiana': {
      'artiga': 2500,
      'suv': 3500,
      'tempo-traveller': 4500
    },
    'Delhi-Panawal': {
      'artiga': 2200,
      'suv': 3200,
      'tempo-traveller': 4200
    },
    'Ludhiana-Delhi': {
      'artiga': 2500,
      'suv': 3500,
      'tempo-traveller': 4500
    },
    'Ludhiana-Panawal': {
      'artiga': 1800,
      'suv': 2800,
      'tempo-traveller': 3800
    },
    'Panawal-Delhi': {
      'artiga': 2200,
      'suv': 3200,
      'tempo-traveller': 4200
    },
    'Panawal-Ludhiana': {
      'artiga': 1800,
      'suv': 2800,
      'tempo-traveller': 3800
    }
  };
  
  const routeKey = `${from}-${to}`;
  return pricing[routeKey]?.[carId] || 0;
};

const cars: Car[] = [
  {
    id: 'artiga',
    name: 'Artiga',
    type: 'SEDAN (AC)',
    features: ['AC', 'Music System', 'Comfortable Seats'],
    image: '/car-sedan.jpg',
    capacity: '4+1 SEATER'
  },
  {
    id: 'suv',
    name: 'SUV',
    type: 'SUV (AC)',
    features: ['AC', 'Music System', 'Spacious Interior', 'Extra Luggage Space'],
    image: '/car-suv.jpg',
    capacity: '6+1 SEATER'
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    type: 'MINI BUS (AC)',
    features: ['AC', 'Music System', 'Large Space', 'Group Travel', 'Extra Comfort'],
    image: '/car-tempo.jpg',
    capacity: '12+1 SEATER'
  }
];

// Get discount percentage for each car
const getDiscount = (carId: string): number => {
  const discounts: { [key: string]: number } = {
    'artiga': 10,
    'suv': 15,
    'tempo-traveller': 20
  };
  return discounts[carId] || 0;
};

// Get original price (before discount)
const getOriginalPrice = (from: string, to: string, carId: string): number => {
  const currentPrice = getPricing(from, to, carId);
  const discount = getDiscount(carId);
  return Math.round(currentPrice / (1 - discount / 100));
};

const CarCards: React.FC<CarCardsProps> = ({ from, to }) => {
  const handleBookNow = (carId: string, carName: string) => {
    alert(`Booking ${carName} - Please contact us for confirmation!`);
  };

  return (
    <section id="cars" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-yellow-500 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Safety First</h3>
                  <p className="text-sm text-gray-800">Verified drivers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Confirmed Cab</h3>
                  <p className="text-sm text-gray-800">Guaranteed availability</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-black">Always On-time</h3>
                  <p className="text-sm text-gray-800">Punctual service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car) => {
              const discount = getDiscount(car.id);
              const originalPrice = getOriginalPrice(from, to, car.id);
              const currentPrice = getPricing(from, to, car.id);
              
              return (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Car Image with Discount Tag */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    {/* Discount Tag */}
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {discount}% OFF
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {/* Pricing */}
                    <div className="mb-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-gray-500 line-through text-sm">₹{originalPrice}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">₹{currentPrice}</span>
                        <span className="text-gray-500 text-sm">per trip</span>
                      </div>
                    </div>
                    
                    {/* Car Type */}
                    <div className="mb-3">
                      <h3 className="text-blue-600 font-semibold text-sm">{car.type}</h3>
                      <p className="text-gray-600 text-sm">({car.capacity})</p>
                    </div>
                    
                    {/* Similar Models */}
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm">
                        {car.id === 'artiga' && 'Swift, Dzire or Similar'}
                        {car.id === 'suv' && 'Innova, Ertiga or Similar'}
                        {car.id === 'tempo-traveller' && 'Tempo Traveller, Force or Similar'}
                      </p>
                    </div>
                    
                    {/* Included KM */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Included Km</span>
                        <span className="text-green-600 font-semibold">
                          {from === 'Delhi' && to === 'Ludhiana' ? '320 Km' :
                           from === 'Delhi' && to === 'Panawal' ? '280 Km' :
                           from === 'Ludhiana' && to === 'Panawal' ? '180 Km' :
                           '320 Km'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Book Now Button */}
                    <button
                      onClick={() => handleBookNow(car.id, car.name)}
                      className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition-colors duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom Info */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto border border-gray-200">
            <p className="text-gray-600 text-sm mb-4">
              All prices include driver, fuel, and toll charges.
            </p>
            <Link
              href="/cars"
              className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCards;
