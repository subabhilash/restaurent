import React from 'react';
import { Menu as MenuIcon, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-4 text-amber-50">MAHARAJA RESTO BAR</h1>
            <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light mb-12 tracking-wide text-amber-50">FAMILY GARDEN RESTAURANT</p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm font-medium flex items-center mx-auto group">
              Explore Menu
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <ChevronDown className="h-8 w-8 text-amber-500" />
          </div>
        </section>
        
        <About />
        <Gallery />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;