import React from 'react';
import { Award, Clock, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Authentic Italian Pizza Since 1985
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Tony's Pizza, we've been serving authentic Italian pizza made with traditional recipes 
              passed down through generations. Our wood-fired ovens and premium ingredients ensure 
              every bite is a perfect blend of flavor and tradition.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From our hand-tossed dough made fresh daily to our signature marinara sauce, 
              we're committed to delivering the highest quality pizza experience to your door.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">38 Years</h3>
                <p className="text-gray-600">of Excellence</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">30 Min</h3>
                <p className="text-gray-600">Delivery Promise</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">Love & Care</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef preparing pizza"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Master Chef Tony</h3>
              <p className="text-lg">Third generation pizza master</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;