import Link from 'next/link';
import { Star, MapPin, Clock, Award, BookOpen, ArrowLeft, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// This would normally fetch data from the database
async function getTutor(id: string) {
  // Mock data
  return {
    id,
    name: 'Sarah Johnson',
    subjects: ['Mathematics', 'Algebra', 'Calculus', 'Geometry'],
    gradelevels: [9, 10, 11, 12],
    education: "Master's in Mathematics Education",
    experience: 8,
    hourlyRate: 50,
    rating: 4.9,
    totalSessions: 120,
    totalReviews: 45,
    bio: `I'm a passionate mathematics educator with over 8 years of experience helping students 
    build confidence and excel in math. My approach focuses on understanding core concepts rather 
    than memorization, making math accessible and even enjoyable!
    
    I specialize in helping students who struggle with math anxiety and have successfully coached 
    dozens of students from failing grades to A's. Whether you're preparing for the SAT, tackling 
    AP Calculus, or just need help with homework, I'm here to support you.`,
    certifications: ['PA State Teaching License', 'SAT Math Prep Certified'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    location: 'Philadelphia, PA',
    availability: ['Monday', 'Wednesday', 'Friday'],
    sessionTypes: ['Online', 'In-Person'],
    backgroundCheck: true,
    reviews: [
      {
        id: 1,
        studentName: 'Alex M.',
        rating: 5,
        comment: 'Sarah helped me go from a C to an A in Algebra 2! She explains things so clearly and is very patient.',
        date: '2 weeks ago',
      },
      {
        id: 2,
        studentName: 'Jennifer P.',
        rating: 5,
        comment: 'Excellent tutor! My daughter\'s confidence in math has improved dramatically.',
        date: '1 month ago',
      },
      {
        id: 3,
        studentName: 'Michael T.',
        rating: 4,
        comment: 'Great at breaking down complex calculus problems. Highly recommend!',
        date: '1 month ago',
      },
    ],
  };
}

export default async function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = await getTutor(params.id);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link
            href="/tutors"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
            Back to Tutors
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="card">
              <div className="flex flex-col md:flex-row gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tutor.image}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                    {tutor.name}
                  </h1>
                  <div className="flex items-center text-neutral-600 mb-3">
                    <MapPin className="h-5 w-5 mr-1" aria-hidden="true" />
                    {tutor.location}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" aria-hidden="true" />
                      <span className="font-semibold">{tutor.rating}</span>
                      <span className="text-neutral-600 ml-1">
                        ({tutor.totalReviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <BookOpen className="h-5 w-5 mr-1" aria-hidden="true" />
                      {tutor.totalSessions} sessions
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Award className="h-5 w-5 mr-1" aria-hidden="true" />
                      {tutor.experience} years exp.
                    </div>
                  </div>
                  {tutor.backgroundCheck && (
                    <div className="inline-flex items-center px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Background Checked
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* About */}
            <div className="card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">About {tutor.name}</h2>
              <div className="prose max-w-none text-neutral-600">
                {tutor.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Qualifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Education</h3>
                  <p className="text-neutral-600">{tutor.education}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Certifications</h3>
                  <ul className="space-y-1">
                    {tutor.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-neutral-600">
                        <Award className="h-4 w-4 text-primary-600 mr-2" aria-hidden="true" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                      <span key={subject} className="badge badge-primary">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Reviews</h2>
              <div className="space-y-6">
                {tutor.reviews.map((review) => (
                  <div key={review.id} className="border-b border-neutral-200 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="font-semibold text-neutral-900">{review.studentName}</span>
                      <span className="text-gray-500 mx-2">•</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-neutral-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="card border-2 border-primary-300 sticky top-4">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-neutral-900 mb-1">
                  {formatCurrency(tutor.hourlyRate)}
                  <span className="text-lg font-normal text-neutral-600">/hour</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    Availability
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.availability.map((day) => (
                      <span key={day} className="badge badge-primary">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                    Session Types
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.sessionTypes.map((type) => (
                      <span key={type} className="badge bg-neutral-200 text-neutral-700">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link href={`/booking?tutorId=${tutor.id}`} className="btn btn-primary w-full mb-3">
                Book a Session
              </Link>
              <button className="btn btn-outline w-full">
                Message Tutor
              </button>
            </div>

            {/* Quick Info */}
            <div className="card bg-primary-50">
              <h3 className="font-semibold text-neutral-900 mb-3">Quick Info</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>✓ Responds within 24 hours</li>
                <li>✓ Accepts new students</li>
                <li>✓ Free 15-minute consultation</li>
                <li>✓ Session recordings available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

