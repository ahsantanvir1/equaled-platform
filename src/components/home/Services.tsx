import { BookOpen, Video, Clock, DollarSign, Award, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'All Subjects Covered',
      description: 'From math to languages, find expert tutors in every subject area for K-12 and college.',
    },
    {
      icon: Video,
      title: 'Online & In-Person',
      description: 'Learn from anywhere with online sessions or meet locally for in-person tutoring.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule. Available 7 days a week with automatic reminders.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Quality education at prices that work for every family. Free sessions available for eligible students.',
    },
    {
      icon: Award,
      title: 'Certified Tutors',
      description: 'All tutors are verified, background-checked, and passionate about helping students succeed.',
    },
    {
      icon: Users,
      title: 'Small Groups Available',
      description: 'One-on-one or small group sessions for collaborative learning with friends.',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50" aria-labelledby="services-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose EqualEd?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We&apos;re committed to making quality education accessible and effective for every Pennsylvania student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors">
                  <Icon className="h-7 w-7 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

