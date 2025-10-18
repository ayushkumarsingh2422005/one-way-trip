'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';

export default function CabsPage() {
  const searchParams = useSearchParams();

  const pickupCity = searchParams.get('pickup') || '';
  const destinationCity = searchParams.get('destination') || '';
  const serviceType = searchParams.get('service') || 'outstation';
  const mobileNumber = searchParams.get('mobile') || '';

  const carOptions = [
    {
      id: 'sedan',
      name: 'Sedan',
      description: 'Comfortable 4-seater car perfect for city rides',
      image: "https://cabbazar.com/assets/img/vehicles/sedan.png",
      price: '₹12/km',
      features: ['AC', '4 Seats', 'Luggage Space', 'Professional Driver'],
      estimatedPrice: '₹1,200 - ₹1,800'
    },
    {
      id: 'suv',
      name: 'SUV',
      description: 'Spacious 6-seater SUV for family trips',
      image: "https://cabbazar.com/assets/img/vehicles/hatchback.png",
      price: '₹18/km',
      features: ['AC', '6 Seats', 'Extra Luggage', 'Professional Driver'],
      estimatedPrice: '₹1,800 - ₹2,700'
    },
    {
      id: 'tempo',
      name: 'Tempo Traveller',
      description: 'Large 12-seater vehicle for group travel',
      image: "https://cabbazar.com/assets/img/vehicles/suv.png",
      price: '₹25/km',
      features: ['AC', '12 Seats', 'Large Luggage', 'Professional Driver'],
      estimatedPrice: '₹2,500 - ₹3,750'
    }
  ];

  const handleBookNow = (carType: string) => {
    // Here you would typically redirect to a booking confirmation page
    alert(`Booking ${carType} from ${pickupCity} to ${destinationCity}`);
  };

  return (
    <div className="w-screen min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-20">
        <Header />
      </div>

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-transparent"></div> */}

        <div className="relative z-10 py-8">
          <div className="max-w-6xl mx-auto p-4 md:p-8 w-full h-full flex flex-col justify-center">
            {/* Trip Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">From:</span>
                  <span className="ml-2 font-semibold">{pickupCity}</span>
                </div>
                <div>
                  <span className="text-gray-600">To:</span>
                  <span className="ml-2 font-semibold">{destinationCity}</span>
                </div>
                <div>
                  <span className="text-gray-600">Service:</span>
                  <span className="ml-2 font-semibold capitalize">{serviceType}</span>
                </div>
                <div>
                  <span className="text-gray-600">Mobile:</span>
                  <span className="ml-2 font-semibold">{mobileNumber}</span>
                </div>
              </div>
            </div>

            {/* Car Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Vehicle</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {carOptions.map((car) => (
                  <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <div className="mb-2 flex justify-center">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{car.description}</p>
                      </div>

                      <div className="mb-4">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-yellow-600">{car.price}</span>
                          <p className="text-sm text-gray-500 mt-1">Estimated: {car.estimatedPrice}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {car.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => handleBookNow(car.name)}
                        className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                      >
                        Book {car.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What is included in the fare?</h3>
                  <p className="text-gray-600 text-sm">The fare includes fuel charges, driver charges, and night charges. All vehicles come with AC and professional drivers.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my booking?</h3>
                  <p className="text-gray-600 text-sm">Yes, you can cancel your booking up to 2 hours before the scheduled pickup time. Cancellation charges may apply.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What if the driver is late?</h3>
                  <p className="text-gray-600 text-sm">We track all our vehicles in real-time. If there's a delay, we'll notify you immediately and provide updates.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Do you provide child seats?</h3>
                  <p className="text-gray-600 text-sm">Child seats are available on request for an additional charge. Please mention this while booking.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600 text-sm">We accept all major credit/debit cards, UPI, net banking, and cash payments.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="w-screen bg-gray-900 text-white py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">cabbazar</h3>
                  <p className="text-sm text-gray-300">All India Cab Service</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Your trusted partner for comfortable and reliable cab services across India.
                Book your ride with confidence and travel in style.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cancellation Policy</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Outstation Cabs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Local Cabs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wedding Cars</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 cabbazar. All rights reserved. | Get ₹200 cashback on mobile app download</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
