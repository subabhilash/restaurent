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
      url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
      alt: 'Natti style chicken curry',
      caption: 'Signature Natti Style Curry'
    },
    {
      url: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
      alt: 'Traditional biryani',
      caption: 'Special Maharaja Biryani'
    },
    {
      url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
      alt: 'Chicken kebabs',
      caption: 'Spicy Chicken Kebabs'
    },
    {
      url: 'https://images.pexels.com/photos/2474659/pexels-photo-2474659.jpeg',
      alt: 'Tandoori dishes',
      caption: 'Tandoori Specialties'
    },
    {
      url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      alt: 'Garden dining area',
      caption: 'Family Garden Seating'
    },
    {
      url: 'https://images.pexels.com/photos/2474657/pexels-photo-2474657.jpeg',
      alt: 'Special thali',
      caption: 'Maharaja Special Thali'
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-8 text-center text-amber-50">Our Specialties</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <h3 className="text-white text-lg font-medium text-center">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} className="w-full h-auto" />
            <div className="bg-zinc-900 p-4">
              <h3 className="text-xl text-amber-400">{selectedImage.caption}</h3>
            </div>
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery