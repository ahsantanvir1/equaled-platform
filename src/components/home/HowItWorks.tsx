import { Search, Calendar, Video, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Find Your Tutor',
      description: 'Browse our vetted tutors by subject, grade level, and availability. Read reviews and compare qualifications.',
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Schedule a Session',
      description: 'Choose a time that works for you. Book one-time sessions or recurring weekly meetings. Get automatic reminders.',
    },
    {
      icon: Video,
      number: '03',
      title: 'Start Learning',
      description: 'Meet online or in-person. Work one-on-one or in small groups. Get personalized help tailored to your needs.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Track Progress',
      description: 'See your improvement over time. Rate your tutors. Achieve your learning goals and boost your confidence.',
    },
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="how-it-works-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with EqualEd is simple. Follow these four easy steps to begin your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-200 -ml-4 -z-10" aria-hidden="true" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 shadow-lg">
                    <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

