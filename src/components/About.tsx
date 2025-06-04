import React from 'react';
import { Flame } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Flame className="h-12 w-12 text-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-8 text-amber-50">Our Story</h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-10"></div>
          
          <p className="text-zinc-300 mb-8 leading-relaxed">
            Maharaja Resto Bar brings you the authentic flavors of Natti style cuisine. Our journey began with a passion for traditional Indian cooking, specializing in dishes that celebrate our rich culinary heritage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-zinc-800 p-8 rounded-sm transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-medium text-amber-400 mb-4">Natti Style Special</h3>
              <p className="text-zinc-400">Our signature Natti style dishes are prepared with authentic spices and traditional cooking methods.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-sm transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-medium text-amber-400 mb-4">Family Atmosphere</h3>
              <p className="text-zinc-400">Enjoy your meal in our beautiful garden setting, perfect for family gatherings and celebrations.</p>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-sm transform transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-medium text-amber-400 mb-4">Local Flavors</h3>
              <p className="text-zinc-400">We source local ingredients to create authentic Karnataka-style dishes that delight your taste buds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About