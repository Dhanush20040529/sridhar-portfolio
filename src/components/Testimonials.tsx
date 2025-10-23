import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sridhar's ability to capture emotion in every frame is unparalleled. His work transformed our brand's visual identity.",
    name: 'Priya Sharma',
    role: 'Marketing Director',
  },
  {
    quote: 'The cinematic quality of his video editing brought our wedding memories to life. We watch it every anniversary!',
    name: 'Rahul & Ananya',
    role: 'Happy Couple',
  },
  {
    quote: 'Professional, creative, and delivers beyond expectations. His drone footage gave our project a unique perspective.',
    name: 'Vikram Reddy',
    role: 'Real Estate Developer',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-5xl font-heading mb-4">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-secondary p-8 rounded-lg relative slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-accent mb-4 opacity-50" />
              <p className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
