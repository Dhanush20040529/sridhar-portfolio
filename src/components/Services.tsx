import { Camera, Film, Palette, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography for events, portraits, products, and landscapes.',
  },
  {
    icon: Film,
    title: 'Cinematic Video Editing',
    description: 'Transform raw footage into compelling stories with expert editing.',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Enhance your visuals with professional color correction and grading.',
  },
  {
    icon: Plane,
    title: 'Drone Shoots',
    description: 'Capture breathtaking aerial perspectives with licensed drone operation.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-5xl font-heading mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive visual services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
