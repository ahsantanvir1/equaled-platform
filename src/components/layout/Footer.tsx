import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-accent-300" aria-hidden="true" />
              <span className="text-2xl font-bold">
                Equal<span className="text-accent-300">Ed</span>
              </span>
            </div>
            <p className="text-primary-100 mb-4">
              Quality education accessible to everyone. Learn from expert tutors and achieve your goals.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded"
                aria-label="Visit our Twitter profile"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 rounded"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/classes" className="text-primary-100 hover:text-white transition-colors">
                    Our Classes
                  </Link>
                </li>
                <li>
                  <Link href="/tutors" className="text-primary-100 hover:text-white transition-colors">
                    Find a Tutor
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-primary-100 hover:text-white transition-colors">
                    Pricing & Packages
                  </Link>
                </li>
                <li>
                  <Link href="/become-tutor" className="text-primary-100 hover:text-white transition-colors">
                    Become a Tutor
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-primary-100 hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/mailing-list" className="text-primary-100 hover:text-white transition-colors">
                    Join Mailing List
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary-100 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary-100 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-primary-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-primary-100 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-primary-100 hover:text-white transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  {CONTACT_INFO.address.street}
                  <br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-100 text-sm">
              &copy; {currentYear} EqualEd. All rights reserved.
            </p>
            <p className="text-primary-100 text-sm">
              A 501(c)(3) nonprofit organization serving Pennsylvania students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

