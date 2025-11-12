import { Target, Heart, Users, Award, TrendingUp, BookOpen } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in education and service quality.',
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'Quality education should be available and affordable for everyone.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build a supportive community of learners and educators.',
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'We measure success by the positive change we create in students\' lives.',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Students Helped' },
    { value: '500+', label: 'Expert Tutors' },
    { value: '50+', label: 'Subjects Covered' },
    { value: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About EqualEd</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Our mission is to make quality education accessible to every student in Pennsylvania.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              At EqualEd, we believe that every student deserves access to quality education,
              regardless of their background or circumstances. We&apos;re breaking down barriers to
              learning by connecting students with expert tutors who are passionate about teaching.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, we&apos;ve helped over 10,000 students achieve their academic goals
              through personalized, affordable tutoring. Our platform makes it easy to find the
              perfect tutor, schedule sessions, and track progress—all in one place.
            </p>
            <p className="text-lg text-gray-600">
              Through community donations, we provide completely free tutoring to under-privileged
              students, ensuring that financial barriers never stand between a student and their education.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-12 rounded-2xl text-white shadow-xl">
            <blockquote className="text-2xl italic mb-4 leading-relaxed">
              &ldquo;Education is the most powerful weapon which you can use to change the world.&rdquo;
            </blockquote>
            <cite className="text-primary-200 not-italic">— Nelson Mandela</cite>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
                    <Icon className="h-10 w-10 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary-600 text-white rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                EqualEd was founded in 2020 by a group of educators and technologists who saw
                firsthand the educational disparities facing students in Pennsylvania. During the
                pandemic, these gaps became even more apparent, with many students struggling to
                access the support they needed.
              </p>
              <p>
                We started small, connecting a handful of volunteer tutors with students in need.
                The response was overwhelming—both from students who needed help and from educators
                eager to give back.                 What began as a grassroots effort quickly grew into a
                comprehensive platform serving thousands of students across the state.
              </p>
              <p>
                Today, EqualEd combines innovative technology with a heart for service. We&apos;ve built
                a sustainable model that generates revenue through affordable subscription packages
                while using community donations to provide free tutoring to those who need it most.
              </p>
              <p>
                Every student we serve, every session we deliver, and every goal we help achieve
                reinforces our belief that education is the great equalizer. We&apos;re committed to
                ensuring that every student in Pennsylvania has the opportunity to reach their
                full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-custom py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Our Leadership Team
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experienced educators and technologists committed to educational equity
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dr. Sarah Williams',
              role: 'Founder & CEO',
              bio: '20+ years in education, former principal',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            },
            {
              name: 'Michael Chen',
              role: 'Chief Technology Officer',
              bio: 'Software engineer passionate about ed-tech',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            },
            {
              name: 'Jennifer Martinez',
              role: 'Director of Programs',
              bio: 'Education policy expert and advocate',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            },
          ].map((member, index) => (
            <div key={index} className="card text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt=""
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

