'use client';

import Link from 'next/link';
import { X, Check, Star, TrendingUp, Zap } from 'lucide-react';

interface TutorMembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TutorMembershipModal({
  isOpen,
  onClose,
}: TutorMembershipModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Starter',
      price: 19,
      icon: Star,
      description: 'Perfect for new tutors getting started',
      features: [
        'Profile listing on platform',
        'Up to 10 students per month',
        'Basic scheduling tools',
        'Email support',
        '15% platform commission',
        'Monthly performance reports',
      ],
      color: 'bg-blue-100 text-blue-600',
      buttonClass: 'btn-secondary',
    },
    {
      name: 'Professional',
      price: 39,
      icon: TrendingUp,
      description: 'For established tutors growing their practice',
      features: [
        'Featured profile placement',
        'Unlimited students',
        'Advanced scheduling & calendar sync',
        'Priority email & chat support',
        '10% platform commission',
        'Detailed analytics & insights',
        'Custom availability settings',
        'Student progress tracking',
      ],
      color: 'bg-primary-100 text-primary-600',
      buttonClass: 'btn-primary',
      popular: true,
    },
    {
      name: 'Elite',
      price: 79,
      icon: Zap,
      description: 'For top tutors maximizing their impact',
      features: [
        'Premium featured placement',
        'Unlimited students',
        'Full suite of scheduling tools',
        '24/7 priority support',
        '5% platform commission',
        'Advanced analytics & reporting',
        'Marketing & promotional support',
        'Verified expert badge',
        'Custom branding options',
        'Direct messaging with students',
      ],
      color: 'bg-purple-100 text-purple-600',
      buttonClass: 'btn-primary',
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      role="presentation"
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className="bg-white rounded-2xl max-w-6xl w-full my-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutor-membership-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-t-2xl">
          <h2 id="tutor-membership-title" className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Tutor Membership Plans
          </h2>
          <p className="text-lg text-primary-100 text-center max-w-2xl mx-auto">
            Choose the plan that fits your tutoring goals. All plans include access to our platform,
            student management tools, and secure payment processing.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`card relative ${
                    plan.popular ? 'ring-2 ring-primary-500 shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${plan.color}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/become-tutor"
                    className={`${plan.buttonClass} w-full text-center block`}
                    onClick={onClose}
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-3 text-center">All Plans Include:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-primary-600 mr-2" aria-hidden="true" />
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-primary-600 mr-2" aria-hidden="true" />
                <span>Student review system</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-primary-600 mr-2" aria-hidden="true" />
                <span>Background check assistance</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-primary-600 mr-2" aria-hidden="true" />
                <span>Video conferencing integration</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-primary-600 mr-2" aria-hidden="true" />
                <span>Resource library access</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-primary-600 mr-2" aria-hidden="true" />
                <span>Mobile app access</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            All prices in USD. Cancel anytime. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
}

