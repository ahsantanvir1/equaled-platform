import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Parent of 8th grader',
      content: 'EqualEd has been a game-changer for my daughter. Her math grades improved from C to A, and she actually enjoys learning now! The tutors are patient and really care about her progress.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    },
    {
      id: 2,
      name: 'Alex Thompson',
      role: 'High School Junior',
      content: 'I was struggling with chemistry until I found my tutor on EqualEd. The online sessions are super convenient, and my tutor explains things in a way that actually makes sense. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop',
    },
    {
      id: 3,
      name: 'Robert Wilson',
      role: 'Parent',
      content: 'As a family on a tight budget, we\'re grateful for the free tutoring through donations. My son receives excellent help with his homework, and it hasn\'t cost us anything. Thank you to all the donors!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Families Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real students and parents who&apos;ve experienced the EqualEd difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-neutral-50 p-8 rounded-xl hover:shadow-lg transition-shadow relative"
            >
              <Quote className="h-10 w-10 text-primary-200 absolute top-6 left-6" aria-hidden="true" />
              
              <div className="flex items-center mb-4 mt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
                <span className="sr-only">{testimonial.rating} out of 5 stars</span>
              </div>

              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

