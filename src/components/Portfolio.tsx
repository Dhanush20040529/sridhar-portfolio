import { useState } from 'react';
import { X, Play } from 'lucide-react';
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
import image4 from '../images/img4.jpg'
import image5 from '../images/img5.jpg'
import image6 from '../images/img6.jpg'
import video from '../videos/video1.mp4'
import thumbnail from '../images/thumbnail.jpg'

const portfolioItems = [
  { id: 1, type: 'image', url: image1, thumbnail: image1 },
  { id: 2, type: 'image', url: image2, thumbnail: image2 },
  { id: 3, type: 'video', url: video, thumbnail: thumbnail },
  { id: 4, type: 'image', url: image3, thumbnail: image3 },
  { id: 5, type: 'image', url: image4, thumbnail: image4 },
  { id: 6, type: 'image', url: image6, thumbnail: image6 },
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
                src={item.thumbnail}
              
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {item.type === 'video' && (
                  <Play className="h-16 w-16 text-accent" />
                )}
                
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
          <div className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {lightbox.item.type === 'video' ? (
              <video
                src={lightbox.item.url}
                controls
                autoPlay
                className="w-80 h-auto rounded-lg place-self-center"
              />
            ) : (
              <img
                src={lightbox.item.url}
              
                className="w-full h-auto rounded-lg object-contain"
              />
            )}
            <p className="text-white text-center mt-4 text-xl font-heading">
             
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
