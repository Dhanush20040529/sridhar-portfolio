import { useState } from 'react';
import { Instagram, Youtube, Palette, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [emailjsConfig, setEmailjsConfig] = useState({
    serviceId: 'service_5pjdlec',
    templateId: 'template_gyuwesm',
    publicKey: 'mYua5chbA4WjmCQiB',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your name',
        variant: 'destructive',
      });
      return;
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a message',
        variant: 'destructive',
      });
      return;
    }

    if (!emailjsConfig.serviceId.trim() || !emailjsConfig.templateId.trim() || !emailjsConfig.publicKey.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your EmailJS credentials',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'your-email@example.com', // Configure this
        },
        emailjsConfig.publicKey
      );

      toast({
        title: 'Message Sent!',
        description: 'Your message has been sent successfully via EmailJS.',
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending via EmailJS:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please check your EmailJS credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-5xl font-heading mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project and bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                  disabled={isLoading}
                  name='from_name"'
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                  disabled={isLoading}
                  name='from_email'
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="bg-background"
                  disabled={isLoading}
                  name='message'
                />
              </div>
             {/*  <div className="space-y-3 pt-2">
                <p className="text-sm text-muted-foreground">EmailJS Configuration:</p>
                <Input
                  placeholder="Service ID"
                  value={emailjsConfig.serviceId}
                  onChange={(e) => setEmailjsConfig({ ...emailjsConfig, serviceId: e.target.value })}
                  className="bg-background"
                  disabled={isLoading}
                />
                <Input
                  placeholder="Template ID"
                  value={emailjsConfig.templateId}
                  onChange={(e) => setEmailjsConfig({ ...emailjsConfig, templateId: e.target.value })}
                  className="bg-background"
                  disabled={isLoading}
                />
                <Input
                  placeholder="Public Key"
                  value={emailjsConfig.publicKey}
                  onChange={(e) => setEmailjsConfig({ ...emailjsConfig, publicKey: e.target.value })}
                  className="bg-background"
                  disabled={isLoading}
                />
              </div> */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="slide-up space-y-8">
            <div>
              <h3 className="text-2xl font-heading mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@sridhar.com"
                  className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  contact@sridhar.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  +91 98765 43210
                </a>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-3 h-5 w-5" />
                  Bangalore, India
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-full hover:bg-accent hover:text-primary transition-all"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-full hover:bg-accent hover:text-primary transition-all"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background rounded-full hover:bg-accent hover:text-primary transition-all"
                >
                  <Palette className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
