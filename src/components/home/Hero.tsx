import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality Education for{' '}
              <span className="text-primary-200">Every Student</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              Connect with expert tutors, learn at your own pace, and unlock your full potential. 
              Free tutoring for under-privileged students through community support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/tutors"
                className="btn btn-outline bg-white text-primary-600 border-0 hover:bg-primary-50 inline-flex items-center justify-center group"
              >
                Find Your Tutor
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                href="/donate"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
              >
                Support a Student
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-primary-100">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Verified Tutors
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                WCAG 2.1 Accessible
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pennsylvania Focus
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-colors">
              <BookOpen className="h-10 w-10 md:h-12 md:w-12 mb-4" aria-hidden="true" />
              <h3 className="text-3xl md:text-4xl font-bold mb-2">500+</h3>
              <p className="text-primary-100">Expert Tutors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-colors">
              <Users className="h-10 w-10 md:h-12 md:w-12 mb-4" aria-hidden="true" />
              <h3 className="text-3xl md:text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-primary-100">Students Helped</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-colors col-span-2">
              <Award className="h-10 w-10 md:h-12 md:w-12 mb-4" aria-hidden="true" />
              <h3 className="text-3xl md:text-4xl font-bold mb-2">4.9/5 Rating</h3>
              <p className="text-primary-100">Average tutor rating from verified students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}

