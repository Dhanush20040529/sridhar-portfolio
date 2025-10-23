import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 slide-up">
        <h1 className="text-6xl md:text-8xl font-heading mb-4">sridhar</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Photographer & Video Editor
        </p>
        <p className="text-lg md:text-xl mb-12 text-accent font-medium">
          Capturing stories through lens and motion.
        </p>
        <Button 
          onClick={scrollToPortfolio}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-primary font-semibold"
        >
          View My Work
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
