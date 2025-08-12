import React, { useState } from 'react';
import { Hero } from '../components/ui/Hero';
import { ImpactStats } from '../components/ui/ImpactStats';
import { Heart, Shield, Award, CreditCard } from 'lucide-react';
import { siteData } from '../data/content';

export const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    if (e.target.value) {
      setSelectedAmount(0);
    }
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Make a Difference Today"
        subtitle="Your donation directly impacts children's lives through quality education and sustainable learning opportunities."
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        height="large"
      />

      {/* Donation Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Impact Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See exactly how your donation will be used to transform lives and build better futures for children around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.donationTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleAmountSelect(tier.amount)}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${tier.amount}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tier.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="text-blue-600 font-medium text-sm bg-blue-50 rounded px-3 py-1">
                    {tier.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Your Donation
            </h2>

            <form className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Donation Amount
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        selectedAmount === amount
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Monthly/One-time Toggle */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    !isMonthly
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    isMonthly
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Donor Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Payment Method
                </label>
                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-gray-400 mr-2" />
                    <span className="text-gray-700">Credit Card</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Donation Summary
                </h3>
                <div className="flex justify-between items-center text-blue-700">
                  <span>
                    {isMonthly ? 'Monthly' : 'One-time'} donation:
                  </span>
                  <span className="text-2xl font-bold">
                    ${getCurrentAmount().toFixed(2)}
                  </span>
                </div>
                {isMonthly && (
                  <p className="text-blue-600 text-sm mt-2">
                    Annual impact: ${(getCurrentAmount() * 12).toFixed(2)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors transform hover:scale-[1.02] duration-200"
              >
                Complete Donation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Trust is Our Priority
            </h2>
            <p className="text-lg text-gray-600">
              We ensure your donation is secure and goes directly to our educational programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Donations</h3>
              <p className="text-gray-600">
                All transactions are encrypted and processed through secure payment gateways.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Impact</h3>
              <p className="text-gray-600">
                90% of every dollar goes directly to our educational programs and services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                Regular reports show exactly how your donation is making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};