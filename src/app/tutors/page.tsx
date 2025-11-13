'use client';

import { useState } from 'react';
import { Search, Filter, Star, MapPin, DollarSign } from 'lucide-react';
import { SUBJECTS, GRADE_LEVELS } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';
import Link from 'next/link';

// Mock data for demonstration
const mockTutors = [
  {
    id: '1',
    name: 'Sarah Johnson',
    subjects: ['Mathematics', 'Algebra', 'Calculus'],
    gradelevels: [9, 10, 11, 12],
    education: "Master's in Mathematics Education",
    experience: 8,
    hourlyRate: 50,
    rating: 4.9,
    totalSessions: 120,
    bio: 'Passionate math tutor with a focus on building confidence and problem-solving skills.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    location: 'Philadelphia, PA',
  },
  {
    id: '2',
    name: 'Michael Chen',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    gradelevels: [8, 9, 10, 11, 12],
    education: 'PhD in Chemistry',
    experience: 6,
    hourlyRate: 55,
    rating: 4.8,
    totalSessions: 95,
    bio: 'Former research scientist making science accessible and fun for all students.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    location: 'Pittsburgh, PA',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    subjects: ['English', 'Literature', 'Writing'],
    gradelevels: [6, 7, 8, 9, 10, 11, 12],
    education: 'BA in English Literature',
    experience: 10,
    hourlyRate: 45,
    rating: 5.0,
    totalSessions: 200,
    bio: 'Published author helping students find their voice and love reading.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    location: 'Harrisburg, PA',
  },
  {
    id: '4',
    name: 'David Kim',
    subjects: ['Computer Science', 'Programming', 'Web Development'],
    gradelevels: [9, 10, 11, 12, 13],
    education: 'BS in Computer Science',
    experience: 5,
    hourlyRate: 60,
    rating: 4.7,
    totalSessions: 75,
    bio: 'Software engineer teaching the next generation of developers.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    location: 'Philadelphia, PA',
  },
];

export default function TutorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [maxRate, setMaxRate] = useState(100);
  const [showFilters, setShowFilters] = useState(false);

  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subjects.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSubject =
      selectedSubject === 'all' ||
      tutor.subjects.some((s) => s === selectedSubject);

    const matchesGrade =
      selectedGrade === 'all' ||
      tutor.gradelevels.includes(parseInt(selectedGrade));

    const matchesRate = tutor.hourlyRate <= maxRate;

    return matchesSearch && matchesSubject && matchesGrade && matchesRate;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Browse our network of 500+ verified expert tutors across Pennsylvania. 
            All tutors are background-checked and highly rated.
          </p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search tutors
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                  aria-hidden="true"
                />
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10"
                />
              </div>
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-secondary lg:hidden flex items-center justify-center"
              aria-expanded={showFilters}
            >
              <Filter className="h-5 w-5 mr-2" aria-hidden="true" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          <div className={`grid md:grid-cols-3 gap-4 mt-4 ${showFilters || 'hidden lg:grid'}`}>
            <div>
              <label htmlFor="subject" className="label">
                Subject
              </label>
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="input"
              >
                <option value="all">All Subjects</option>
                {SUBJECTS.slice(0, 15).map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="grade" className="label">
                Grade Level
              </label>
              <select
                id="grade"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="input"
              >
                <option value="all">All Grades</option>
                {GRADE_LEVELS.map((grade) => (
                  <option key={grade.value} value={grade.value}>
                    {grade.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="maxRate" className="label">
                Max Hourly Rate: {formatCurrency(maxRate)}
              </label>
              <input
                id="maxRate"
                type="range"
                min="20"
                max="100"
                step="5"
                value={maxRate}
                onChange={(e) => setMaxRate(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTutors.length}</span> tutor
            {filteredTutors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Tutors Grid */}
        {filteredTutors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <article
                key={tutor.id}
                className="card group hover:border-primary-300 border-2 border-transparent"
              >
                <div className="flex items-start space-x-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tutor.image}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {tutor.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                      {tutor.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                    <span className="ml-1 font-semibold">{tutor.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    {tutor.totalSessions} sessions
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    {tutor.experience} years exp.
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{tutor.bio}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Teaches:</div>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.slice(0, 3).map((subject) => (
                      <span key={subject} className="badge badge-primary">
                        {subject}
                      </span>
                    ))}
                    {tutor.subjects.length > 3 && (
                      <span className="badge bg-neutral-200 text-gray-700">
                        +{tutor.subjects.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-gray-900">
                    <DollarSign className="h-5 w-5 mr-1" aria-hidden="true" />
                    <span className="text-lg font-semibold">
                      {formatCurrency(tutor.hourlyRate)}/hr
                    </span>
                  </div>
                  <Link
                    href={`/tutors/${tutor.id}`}
                    className="btn btn-primary"
                  >
                    View Profile
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">
              No tutors found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSubject('all');
                setSelectedGrade('all');
                setMaxRate(100);
              }}
              className="btn btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

