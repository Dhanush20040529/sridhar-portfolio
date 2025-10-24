import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sridharImg from '../images/sridhar-img.jpg'
import cv from '../../public/cv.pdf'

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/cv.pdf'; // Path in public folder
    link.download = 'Sridhar_Resume.pdf'; // File name for download
    link.click();
  };

  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <img
              src={sridharImg}
              alt="Sridhar"
              className="rounded-lg shadow-2xl w-90 object-cover h-[500px]"
            />
          </div>
          
          <div className="slide-up">
            <h2 className="text-5xl font-heading mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Hello! I'm Sridhar, a passionate photographer and video editor with over 8 years of experience 
              in visual storytelling. My journey began with a simple camera and an endless curiosity about 
              the world around me.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I believe that every frame tells a story, and every edit brings that story to life. My work 
              is driven by emotion, authenticity, and a deep respect for the craft.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-4 mb-6 rounded">
              <p className="italic text-foreground">
                "Photography is the art of frozen time... the ability to store emotion and feelings within a frame."
              </p>
            </div>
            <Button 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
