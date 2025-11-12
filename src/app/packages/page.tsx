import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { PACKAGES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export default function PackagesPage() {
  const packages = Object.values(PACKAGES);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Affordable Tutoring Packages
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Choose a plan that fits your family&apos;s needs and budget. Cancel anytime, no contracts.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Free Tutoring Info */}
        <div className="bg-success-50 border-2 border-success-500 rounded-xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Free Tutoring Available
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Under-privileged students in Pennsylvania may qualify for <strong>completely free tutoring</strong> through our scholarship program, funded by community donations.
          </p>
          <Link
            href="/eligibility"
            className="btn btn-primary inline-flex items-center"
          >
            Check Eligibility
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`card ${
                'popular' in pkg && pkg.popular
                  ? 'border-4 border-primary-500 relative'
                  : 'border-2 border-gray-200'
              }`}
            >
              {'popular' in pkg && pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatCurrency(pkg.price)}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold text-primary-600">
                    {pkg.sessions}
                  </span>
                  <span className="text-gray-600 ml-2">sessions/month</span>
                </div>
                <p className="text-center text-sm text-gray-600">
                  {formatCurrency(pkg.price / pkg.sessions)} per session
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check
                      className="h-5 w-5 text-success-600 mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/checkout?plan=${pkg.tier}`}
                className={`btn w-full ${
                  'popular' in pkg && pkg.popular ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes! There are no long-term contracts. You can cancel or change your plan at any time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens to unused sessions?
              </h3>
              <p className="text-gray-600">
                Unused sessions roll over for one month. For example, if you only use 2 out of 4 sessions this month, you&apos;ll have 6 sessions available next month.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I share sessions with siblings?
              </h3>
              <p className="text-gray-600">
                Absolutely! Your package sessions can be used by any student in your household.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are there any additional fees?
              </h3>
              <p className="text-gray-600">
                No hidden fees! The price you see is what you pay. This includes access to all tutors, session recordings, and progress tracking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I know if I qualify for free tutoring?
              </h3>
              <p className="text-gray-600">
                Pennsylvania families with household income below federal poverty guidelines may qualify. <Link href="/eligibility" className="text-primary-600 hover:text-primary-700 font-medium">Check your eligibility here</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

