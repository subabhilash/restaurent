import React, { useState } from 'react';

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const images: GalleryImage[] = [
    {
      url: '/garden.jpg',
      alt: 'Maharaja Garden Restaurant - Evening Ambiance',
      caption: 'Our Beautiful Garden Seating'
    },
    {
      url: '/resto 1.jpg',
      alt: 'Garden Restaurant with Sports Screening',
      caption: 'Sports Screening in Garden'
    },
    {
      url: '/resto 2.jpg',
      alt: 'Evening Garden Restaurant View',
      caption: 'Evening Garden Dining'
    },
    {
      url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      alt: 'Natti style chicken curry',
      caption: 'Signature Natti Style Curry'
    },
    {
      url: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      alt: 'Traditional biryani',
      caption: 'Roti curry'
    },
    {
      url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
      alt: 'Chicken kebabs',
      caption: 'Snacks'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-8 text-center text-amber-50">Experience Maharaja</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden cursor-pointer rounded-sm"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 className="text-white text-lg font-medium text-center">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="w-full h-auto rounded-sm"
            />
            <div className="bg-zinc-900/80 p-4 mt-2 rounded-sm">
              <h3 className="text-xl text-amber-400">{selectedImage.caption}</h3>
            </div>
            <button 
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;