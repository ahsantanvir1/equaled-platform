import { TrendingUp, Heart, Clock, DollarSign } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Heart,
      value: '5,000+',
      label: 'Free Sessions Delivered',
      description: 'Through community donations',
    },
    {
      icon: TrendingUp,
      value: '92%',
      label: 'Grade Improvement',
      description: 'Students see better grades',
    },
    {
      icon: Clock,
      value: '50,000+',
      label: 'Hours of Tutoring',
      description: 'Total learning time provided',
    },
    {
      icon: DollarSign,
      value: '$250K+',
      label: 'Donated to Students',
      description: 'In free tutoring support',
    },
  ];

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="impact-heading">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="impact-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making a real difference in Pennsylvania students&apos; lives through quality education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <Icon className="h-7 w-7 text-primary-600" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

