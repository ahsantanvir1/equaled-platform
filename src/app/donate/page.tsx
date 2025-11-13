'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Users, TrendingUp, Award, DollarSign } from 'lucide-react';
import { DONATION_AMOUNTS } from '@/lib/constants';
import { calculateImpact, formatCurrency } from '@/lib/utils';

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'ONE_TIME' | 'MONTHLY'>('ONE_TIME');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const activeAmount = customAmount ? parseFloat(customAmount) : amount;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make Education Accessible
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Your donation provides free tutoring to under-privileged students in Pennsylvania. 
            Every dollar makes a real difference.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Make Your Donation
              </h2>

              {/* Donation Type */}
              <div className="mb-6">
                <label htmlFor="donation-type" className="label">Donation Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType('ONE_TIME')}
                    className={`btn ${
                      donationType === 'ONE_TIME'
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('MONTHLY')}
                    className={`btn ${
                      donationType === 'MONTHLY'
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label htmlFor="amount-selection" className="label">Select Amount</label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {DONATION_AMOUNTS.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => {
                        setAmount(preset.value);
                        setCustomAmount('');
                      }}
                      className={`btn ${
                        amount === preset.value && !customAmount
                          ? 'btn-primary'
                          : 'btn-secondary'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div>
                  <label htmlFor="customAmount" className="label">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <DollarSign
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      id="customAmount"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="0"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        if (e.target.value) {
                          setAmount(0);
                        }
                      }}
                      className="input pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Display */}
              <div className="bg-primary-50 p-4 rounded-lg mb-6">
                <p className="text-primary-900 font-semibold mb-1">Your Impact:</p>
                <p className="text-primary-700">
                  {calculateImpact(activeAmount)}
                </p>
              </div>

              {/* Anonymous Option */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700">
                    Make my donation anonymous
                  </span>
                </label>
              </div>

              {/* Donate Button */}
              <button
                className="btn btn-primary w-full text-lg"
                disabled={activeAmount < 1}
              >
                Donate {formatCurrency(activeAmount)}
                {donationType === 'MONTHLY' && '/month'}
              </button>

              <p className="text-xs text-gray-600 mt-4 text-center">
                Secure payment processing via Stripe. EqualEd is a 501(c)(3) nonprofit. 
                Your donation is tax-deductible.
              </p>
            </div>
          </div>

          {/* Impact Stories & Stats */}
          <div>
            <div className="card mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Where Your Money Goes
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Free Tutoring Sessions
                    </h3>
                    <p className="text-gray-600 text-sm">
                      85% of donations fund free one-on-one tutoring for under-privileged students
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Tutor Support & Training
                    </h3>
                    <p className="text-gray-600 text-sm">
                      10% supports tutor development and quality assurance
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Platform & Operations
                    </h3>
                    <p className="text-gray-600 text-sm">
                      5% maintains our technology platform and operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <h3 className="text-xl font-bold mb-4">2024 Impact So Far</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">5,243</div>
                  <div className="text-primary-100">Free sessions delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$262,150</div>
                  <div className="text-primary-100">Total donated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1,890</div>
                  <div className="text-primary-100">Students helped</div>
                </div>
              </div>
            </div>

            {/* Sponsor a Student */}
            <div className="card mt-6 border-2 border-primary-300">
              <Heart className="h-10 w-10 text-primary-600 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sponsor a Student
              </h3>
              <p className="text-gray-600 mb-4">
                Commit to supporting one student&apos;s education for an entire semester. 
                Receive quarterly updates on their progress.
              </p>
              <Link
                href="/sponsor"
                className="btn btn-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Donor Wall Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Thank You to Our Generous Donors
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Sarah M.',
                'Tech Corp',
                'John & Mary K.',
                'Anonymous',
                'Community Bank',
                'Dr. James L.',
                'The Smith Family',
                'Local Business',
                'Michelle P.',
                'Anonymous',
                'Robert W.',
                'Grace Foundation',
              ].map((name, i) => (
                <div key={i} className="p-3 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{name}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/donor-wall"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                View Full Donor Wall →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

