'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Gift, Bell, BookOpen } from 'lucide-react';

export default function MailingListPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    'K-5 Education',
    '6-8 Education',
    'High School',
    'Test Prep (SAT/ACT)',
    'College Planning',
    'Special Needs',
    'STEM Subjects',
    'Arts & Humanities',
  ];

  const handleInterestToggle = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Get early access to special discounts and promotions for our tutoring services.',
    },
    {
      icon: Bell,
      title: 'Latest Updates',
      description: 'Be the first to know about new tutors, subjects, and platform features.',
    },
    {
      icon: BookOpen,
      title: 'Educational Tips',
      description: 'Receive expert study tips, learning resources, and educational insights.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Mail className="h-10 w-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mailing List</h1>
            <p className="text-xl text-primary-100">
              Stay connected with EqualEd and never miss important updates, tips, and exclusive offers.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits Section */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Why Subscribe?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-neutral-600">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                  <h3 className="font-bold text-neutral-900 mb-2">Privacy First</h3>
                  <p className="text-sm text-neutral-600">
                    We respect your privacy and will never share your information with third parties.
                    You can unsubscribe at any time with a single click.
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="card">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Subscribe Now
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="input-field"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input-field"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="input-field"
                      placeholder="Enter your email"
                    />
                  </div>

                  <fieldset>
                    <legend className="block text-sm font-medium text-neutral-700 mb-3">
                      Areas of Interest
                    </legend>
                    <div className="grid grid-cols-2 gap-2">
                      {interestOptions.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-neutral-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="text-xs text-gray-500 pt-2">
                    * Required fields
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe to Mailing List'}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Welcome to the EqualEd Community!
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Thank you for subscribing to our mailing list. We&apos;ve sent a confirmation email to{' '}
                <span className="font-semibold text-primary-600">{email}</span>
              </p>
              <div className="card bg-primary-50 border-primary-200">
                <h3 className="font-bold text-neutral-900 mb-2">What&apos;s Next?</h3>
                <ul className="text-left space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Check your inbox for a confirmation email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Click the confirmation link to verify your subscription</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Start receiving our updates, tips, and exclusive offers</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

