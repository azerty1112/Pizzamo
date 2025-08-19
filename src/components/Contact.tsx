import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Ready to order? Have questions? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-red-100 mb-2">(555) 123-PIZZA</p>
            <p className="text-sm text-red-200">Available 11 AM - 11 PM</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-red-100 mb-2">123 Pizza Street</p>
            <p className="text-red-100 mb-2">New York, NY 10001</p>
            <p className="text-sm text-red-200">Dine-in available</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p className="text-red-100 mb-1">Mon-Thu: 11 AM - 10 PM</p>
            <p className="text-red-100 mb-1">Fri-Sat: 11 AM - 11 PM</p>
            <p className="text-red-100">Sun: 12 PM - 9 PM</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-red-100 mb-2">info@tonyspizza.com</p>
            <p className="text-sm text-red-200">We reply within 24 hours</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Delivery Areas</h3>
            <p className="text-red-100 mb-4">We deliver to these neighborhoods:</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-red-200">
              <span>• Manhattan (Below 96th St)</span>
              <span>• Brooklyn Heights</span>
              <span>• Downtown Brooklyn</span>
              <span>• DUMBO</span>
              <span>• Carroll Gardens</span>
              <span>• Park Slope</span>
              <span>• Williamsburg</span>
              <span>• Greenpoint</span>
            </div>
            <p className="text-xs text-red-300 mt-4">
              Free delivery on orders over $25 • $4.99 delivery fee for orders under $25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;