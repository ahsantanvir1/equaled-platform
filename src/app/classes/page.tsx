'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Globe, 
  Palette, 
  Music, 
  Code,
  Languages,
  TrendingUp,
  Star,
  Clock,
  Users
} from 'lucide-react';

export default function ClassesPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: 'math',
      name: 'Mathematics',
      icon: Calculator,
      description: 'Algebra, Geometry, Calculus, Statistics',
      tutorCount: 120,
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      id: 'science',
      name: 'Science',
      icon: Atom,
      description: 'Physics, Chemistry, Biology, Earth Science',
      tutorCount: 95,
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200',
    },
    {
      id: 'english',
      name: 'English',
      icon: BookOpen,
      description: 'Reading, Writing, Literature, Grammar',
      tutorCount: 85,
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200',
    },
    {
      id: 'languages',
      name: 'Foreign Languages',
      icon: Languages,
      description: 'Spanish, French, German, Mandarin',
      tutorCount: 60,
      color: 'bg-pink-100 text-pink-600',
      borderColor: 'border-pink-200',
    },
    {
      id: 'social-studies',
      name: 'Social Studies',
      icon: Globe,
      description: 'History, Geography, Economics, Civics',
      tutorCount: 50,
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-200',
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: Code,
      description: 'Programming, Web Development, Algorithms',
      tutorCount: 75,
      color: 'bg-indigo-100 text-indigo-600',
      borderColor: 'border-indigo-200',
    },
    {
      id: 'arts',
      name: 'Arts',
      icon: Palette,
      description: 'Visual Arts, Drawing, Painting, Design',
      tutorCount: 40,
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200',
    },
    {
      id: 'music',
      name: 'Music',
      icon: Music,
      description: 'Theory, Piano, Guitar, Voice',
      tutorCount: 35,
      color: 'bg-yellow-100 text-yellow-600',
      borderColor: 'border-yellow-200',
    },
  ];

  // Sample tutors data - in production, this would come from your API
  const sampleTutors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      subject: 'math',
      rating: 4.9,
      sessions: 250,
      hourlyRate: 35,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      specialties: ['Algebra', 'Calculus', 'SAT Math'],
    },
    {
      id: 2,
      name: 'Michael Chen',
      subject: 'science',
      rating: 4.8,
      sessions: 180,
      hourlyRate: 40,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      specialties: ['Physics', 'Chemistry', 'AP Science'],
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      subject: 'english',
      rating: 5.0,
      sessions: 320,
      hourlyRate: 30,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      specialties: ['Writing', 'Literature', 'Essay Prep'],
    },
    {
      id: 4,
      name: 'David Kim',
      subject: 'computer-science',
      rating: 4.9,
      sessions: 150,
      hourlyRate: 45,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      specialties: ['Python', 'Web Dev', 'Data Structures'],
    },
  ];

  const filteredTutors = selectedSubject
    ? sampleTutors.filter((tutor) => tutor.subject === selectedSubject)
    : [];

  const selectedSubjectData = subjects.find((s) => s.id === selectedSubject);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Classes</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Explore our comprehensive range of subjects and find the perfect tutor for your learning needs.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Subjects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Expert Tutors</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">K-12</div>
            <div className="text-gray-600">Grade Levels</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Availability</div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <section className="container-custom py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Browse by Subject
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`card text-left transition-all hover:shadow-lg border-2 ${
                  selectedSubject === subject.id
                    ? subject.borderColor + ' ring-2 ring-primary-500'
                    : 'border-transparent'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${subject.color}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                <div className="flex items-center text-primary-600 font-semibold">
                  <Users className="h-4 w-4 mr-2" aria-hidden="true" />
                  <span>{subject.tutorCount} tutors</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tutors Section */}
        {selectedSubject && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedSubjectData?.name} Tutors
                </h2>
                <p className="text-gray-600">
                  {filteredTutors.length} expert tutor{filteredTutors.length !== 1 ? 's' : ''} available
                </p>
              </div>
              <button
                onClick={() => setSelectedSubject(null)}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Clear Filter
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredTutors.map((tutor) => (
                <div key={tutor.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tutor.image}
                        alt=""
                        className="w-20 h-20 rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tutor.name}</h3>
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-4 w-4 fill-current mr-1" aria-hidden="true" />
                          <span className="font-semibold">{tutor.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{tutor.sessions} sessions</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tutor.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary-600">
                          ${tutor.hourlyRate}
                          <span className="text-sm text-gray-500 font-normal">/hour</span>
                        </div>
                        <Link
                          href={`/tutors/${tutor.id}`}
                          className="btn-primary text-sm"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Browse All Link */}
            <div className="mt-8 text-center">
              <Link href="/tutors" className="btn-secondary inline-flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" aria-hidden="true" />
                Browse All Tutors
              </Link>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!selectedSubject && (
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We&apos;re constantly adding new subjects and tutors. Contact us to request a specific subject or tutor.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Contact Us
              </Link>
              <Link href="/tutors" className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors">
                Browse All Tutors
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

