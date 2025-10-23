import { useState } from 'react';
import { X, Play } from 'lucide-react';

const portfolioItems = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1000', title: 'Landscape Photography' },
  { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000', title: 'Portrait Session' },
  { id: 3, type: 'video', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000', title: 'Cinematic Video' },
  { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000', title: 'Product Photography' },
  { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000', title: 'Street Photography' },
  { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1000', title: 'Nature Photography' },
];

const Portfolio = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; item: typeof portfolioItems[0] | null }>({
    open: false,
    item: null,
  });

  const openLightbox = (item: typeof portfolioItems[0]) => {
    setLightbox({ open: true, item });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, item: null });
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-5xl font-heading mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my finest work in photography and video editing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-square slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {item.type === 'video' && (
                  <Play className="h-16 w-16 text-accent" />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-heading">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && lightbox.item && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.item.url}
              alt={lightbox.item.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl font-heading">
              {lightbox.item.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
