'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our tutoring services? Want to become a tutor?
            Or just want to say hello? We&apos;re here to help!
          </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-600">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href={`mailto:${CONTACT_INFO.supportEmail}`} className="hover:text-primary-600">
                      {CONTACT_INFO.supportEmail}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-600">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href={`tel:${CONTACT_INFO.tollFree}`} className="hover:text-primary-600">
                      Toll-free: {CONTACT_INFO.tollFree}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">
                    {CONTACT_INFO.address.street}
                    <br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
                    {CONTACT_INFO.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">{CONTACT_INFO.hours.weekday}</p>
                  <p className="text-gray-600">{CONTACT_INFO.hours.saturday}</p>
                  <p className="text-gray-600">{CONTACT_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {status === 'success' && (
              <div className="alert alert-success mb-6" role="alert">
                <CheckCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-error mb-6" role="alert">
                <AlertCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label label-required">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="label label-required">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="label label-required">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="input resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full"
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner mr-2" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

