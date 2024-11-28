import React from 'react';
import { Smartphone, Bell, BarChart, Ticket, Users, Calendar } from 'lucide-react';

const benefits = [
  {
    icon: Smartphone,
    title: "Always Available",
    description: "Tickets live in your attendees' phones - no more lost or forgotten tickets."
  },
  {
    icon: Bell,
    title: "Instant Updates",
    description: "Push updates about venue changes, start times, or special announcements."
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track attendance, engagement, and optimize your events."
  }
];

const features = [
  {
    title: "Dynamic Updates",
    description: "Change seat assignments, times, and locations instantly.",
    icon: Calendar
  },
  {
    title: "Seamless Check-in",
    description: "Quick NFC or QR code scanning for instant validation.",
    icon: Users
  },
  {
    title: "Event Management",
    description: "Comprehensive tools for managing multiple events and venues.",
    icon: Ticket
  }
];

export default function EventTickets() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-indigo-700 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Digital Event Tickets
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Create unforgettable events with modern, digital tickets that your attendees will never lose.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Benefits of Digital Tickets
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
                Powerful Features
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Everything you need to run successful events
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
                Ready to modernize your event ticketing?
              </h2>
              <p className="mt-4 text-xl text-indigo-100">
                Get started with Privly today and transform your events.
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
