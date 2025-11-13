'use client';

import { useState } from 'react';
import { DollarSign, Clock, Award, GraduationCap, CheckCircle, AlertCircle } from 'lucide-react';
import { SUBJECTS } from '@/lib/constants';

export default function BecomeTutorPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subjects: [] as string[],
    gradelevels: [] as number[],
    experience: '',
    education: '',
    bio: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Set your own rates and earn $40-$80+ per hour. Get paid weekly.',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work when you want, where you want. Create your own schedule that fits your life.',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Access training resources, join a community of educators, and develop your teaching skills.',
    },
    {
      icon: GraduationCap,
      title: 'Make an Impact',
      description: 'Help students achieve their goals and build confidence in their abilities.',
    },
  ];

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12">
        <div className="card max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-success-600" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-lg text-neutral-600 mb-6">
            Thank you for your interest in joining EqualEd. We&apos;ll review your application and
            get back to you within 3-5 business days.
          </p>
          <p className="text-neutral-600 mb-8">
            Next steps:
            <ul className="list-disc list-inside mt-2 text-left max-w-md mx-auto">
              <li>Application review (1-2 days)</li>
              <li>Interview with our team (video call)</li>
              <li>Background check</li>
              <li>Profile setup and training</li>
              <li>Start tutoring!</li>
            </ul>
          </p>
          <a href="/" className="btn btn-primary inline-block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Tutor</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Share your knowledge and make a difference in students&apos; lives. Join our community
            of 500+ expert tutors.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Why Tutor with EqualEd?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Requirements</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-600 mr-2 flex-shrink-0" aria-hidden="true" />
                  Bachelor&apos;s degree or higher
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-600 mr-2 flex-shrink-0" aria-hidden="true" />
                  Strong knowledge in subject area(s)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-600 mr-2 flex-shrink-0" aria-hidden="true" />
                  Pass background check
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-600 mr-2 flex-shrink-0" aria-hidden="true" />
                  Excellent communication skills
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-600 mr-2 flex-shrink-0" aria-hidden="true" />
                  Passion for teaching
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="card">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Apply Now</h2>

            {status === 'error' && (
              <div className="alert alert-error mb-6" role="alert">
                <AlertCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                Failed to submit application. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="label label-required">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="email" className="label label-required">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="phone" className="label label-required">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="subjects" className="label label-required">
                  Subjects You Can Teach
                </label>
                <select
                  id="subjects"
                  name="subjects"
                  required
                  className="input"
                  onChange={handleChange}
                >
                  <option value="">Select a subject</option>
                  {SUBJECTS.slice(0, 20).map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  You can add more subjects after your application is approved
                </p>
              </div>

              <div>
                <label htmlFor="experience" className="label label-required">
                  Years of Teaching/Tutoring Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select...</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="education" className="label label-required">
                  Highest Education Level
                </label>
                <input
                  id="education"
                  name="education"
                  type="text"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="input"
                  placeholder="e.g., Bachelor's in Mathematics"
                />
              </div>

              <div>
                <label htmlFor="bio" className="label label-required">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  required
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  className="input resize-none"
                  placeholder="Share your teaching philosophy, specialties, and what makes you a great tutor&hellip;"
                />
              </div>

              <div className="text-xs text-neutral-600">
                By submitting this application, you consent to a background check and agree
                to our{' '}
                <a href="/terms" className="text-primary-600 hover:text-primary-700">
                  Terms of Service
                </a>
                .
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full"
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner mr-2" aria-hidden="true" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

