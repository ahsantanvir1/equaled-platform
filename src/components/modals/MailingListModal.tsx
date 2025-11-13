'use client';

import { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

interface MailingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MailingListModal({ isOpen, onClose }: MailingListModalProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setFirstName('');
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      role="presentation"
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mailing-list-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-neutral-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary-600" aria-hidden="true" />
              </div>
              <h2 id="mailing-list-title" className="text-2xl font-bold text-neutral-900 mb-2">
                Join Our Mailing List
              </h2>
              <p className="text-neutral-600">
                Stay updated with the latest news, educational tips, and special offers.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="modal-firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="input-field"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="modal-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                  placeholder="Enter your email"
                />
              </div>

              <div className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Welcome aboard!</h3>
            <p className="text-neutral-600">
              Thank you for subscribing. Check your inbox for a confirmation email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

