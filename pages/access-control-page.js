import React from 'react';
import { Shield, Key, Smartphone, Clock, Lock, Settings } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and secure authentication protect your facilities."
  },
  {
    icon: Smartphone,
    title: "Phone-Based Access",
    description: "No more lost keycards or fobs. Access is always on your phone."
  },
  {
    icon: Clock,
    title: "Real-Time Control",
    description: "Grant or revoke access instantly, set time-based permissions."
  }
];

const features = [
  {
    title: "Instant Management",
    description: "Add or remove access rights in seconds for any user.",
    icon: Settings
  },
  {
    title: "Secure Validation",
    description: "NFC-based validation with encryption and fraud prevention.",
    icon: Lock
  },
  {
    title: "Multi-Location Support",
    description: "Manage access across multiple buildings and access points.",
    icon: Key
  }
];

export default function AccessControl() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-indigo-700 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Modern Access Control
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Replace outdated physical access systems with secure digital passes built into your phone.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Enterprise-Grade Security
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Complete Control
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Manage access rights across your entire organization
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Ready to upgrade your access control?
              </h2>
              <p className="mt-4 text-xl text-indigo-100">
                Get started with Privly today and transform your security.
              </p>
              <div className="mt-8">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
