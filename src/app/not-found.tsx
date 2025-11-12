import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-primary-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn btn-primary inline-flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/tutors"
            className="btn btn-outline inline-flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" aria-hidden="true" />
            Find Tutors
          </Link>
        </div>
      </div>
    </div>
  );
}

