import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* For Students/Parents */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of Pennsylvania students who are achieving their academic goals with EqualEd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/tutors"
                className="btn bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center group"
              >
                Browse Tutors
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                href="/packages"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
              >
                View Packages
              </Link>
            </div>
          </div>

          {/* For Donors */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help a Student Today
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Your donation provides free tutoring to under-privileged students. Every dollar makes a difference.
            </p>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-primary-200 flex-shrink-0 mt-1" aria-hidden="true" />
                <div className="text-left">
                  <p className="font-semibold mb-2">Impact of Your Donation:</p>
                  <ul className="space-y-1 text-primary-100">
                    <li>$15 = 1 tutoring session</li>
                    <li>$50 = 1 month of tutoring</li>
                    <li>$150 = 1 semester of tutoring</li>
                  </ul>
                </div>
              </div>
            </div>
            <Link
              href="/donate"
              className="btn bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center group"
            >
              Make a Donation
              <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Become a Tutor CTA */}
        <div className="mt-16 pt-16 border-t border-white/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Are You a Teacher or Subject Expert?
          </h3>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            Join our community of educators making a difference. Set your own schedule and earn competitive pay.
          </p>
          <Link
            href="/become-tutor"
            className="btn bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center"
          >
            Become a Tutor
          </Link>
        </div>
      </div>
    </section>
  );
}

