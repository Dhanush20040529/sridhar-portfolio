import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "you’ve captured a genuine, joyful moment with such perfect timing and warmth. The lighting, composition, and natural expressions make it feel so alive and effortless — truly an impressive piece of photography!",
    name: 'Adhithi Aravind',
    role: 'influencer',
  },
  {
    quote: 'The cinematic quality of his video editing transformed our wedding footage into a timeless film. Every detail — the emotions, the music, the moments we almost forgot — came alive so beautifully.',
    name: 'Rahul & Ananya',
    role: 'Happy Couple',
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
