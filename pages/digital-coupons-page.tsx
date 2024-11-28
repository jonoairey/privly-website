import React from 'react';
import { Tags, Target, BarChart, Bell, Zap, Repeat } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Send personalized coupons to the right customers at the right time."
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track redemption rates and campaign performance instantly."
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description: "Send timely reminders about expiring coupons and special offers."
  }
];

const features = [
  {
    title: "Dynamic Campaigns",
    description: "Create and modify coupon campaigns instantly.",
    icon: Repeat
  },
  {
    icon: Zap,
    title: "Instant Redemption",
    description: "Quick and secure validation at point of sale."
  },
  {
    icon: Tags,
    title: "Flexible Offers",
    description: "Create percentage, fixed amount, or BOGO offers."
  }
];

export default function DigitalCoupons() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-indigo-700 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Digital Coupons
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Modern, trackable coupons that drive engagement and boost sales.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Smart Promotion Management
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
                Everything you need for successful digital coupon campaigns
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

        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Proven Results
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Average Redemption Rate
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                      35%
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Customer Engagement
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                      +65%
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      ROI Improvement
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                      3.2x
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Ready to modernize your promotions?
              </h2>
              <p className="mt-4 text-xl text-indigo-100">
                Get started with Privly today and transform your coupon campaigns.
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
