import React from 'react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  featured?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC = () => {
  const menuSections: MenuSection[] = [
    {
      title: "Chicken Dishes",
      items: [
        {
          name: "Chicken Natti Style Dry",
          price: "230",
          featured: true
        },
        {
          name: "Chicken Natti Style Fry",
          price: "230"
        },
        {
          name: "Chicken Kabab",
          price: "200"
        },
        {
          name: "Chicken Ghee Roast",
          price: "300",
          featured: true
        },
        {
          name: "Special Chicken Dry/Fry",
          price: "250"
        },
        {
          name: "Chicken Liver Kalgaraga",
          price: "220"
        },
        {
          name: "Maharaj Chicken Biryani Special",
          price: "250",
          featured: true
        },
        {
          name: "Chicken Biryani",
          price: "220"
        }
      ]
    },
    {
      title: "Mutton Dishes",
      items: [
        {
          name: "Mutton Botti Dry",
          price: "280"
        },
        {
          name: "Mutton Fry",
          price: "280"
        },
        {
          name: "Mutton Masala",
          price: "300"
        },
        {
          name: "Mutton Sukka",
          price: "340"
        },
        {
          name: "Mutton Dry",
          price: "340"
        },
        {
          name: "Mutton Chops",
          price: "300"
        },
        {
          name: "Mutton Ghee Roast",
          price: "350",
          featured: true
        },
        {
          name: "Thelle Mutton Masala",
          price: "300"
        },
        {
          name: "Thelle Mutton",
          price: "280"
        },
        {
          name: "Mutton Biryani Special",
          price: "320",
          featured: true
        }
      ]
    },
    {
      title: "Fish Dishes",
      items: [
        {
          name: "Fish Kabab",
          price: "200"
        },
        {
          name: "Fish Tava Fry (2 pieces)",
          price: "300",
          featured: true
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-serif mb-8 text-center text-amber-50">MAHARAJA RESTO BAR NATTI STYLE MENU</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-16"></div>
        
        <div className="max-w-4xl mx-auto">
          {menuSections.map((section, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl text-amber-400 font-serif mb-8 text-center">{section.title}</h3>
              
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 ${
                      item.featured ? 'bg-zinc-800/80' : 'hover:bg-zinc-800/50'
                    } transition-colors duration-300 border-b border-zinc-800`}
                  >
                    <div className="flex-1">
                      <h4 className="text-xl text-white flex items-center">
                        {item.name}
                        {item.featured && (
                          <span className="ml-2 bg-amber-700 text-amber-50 text-xs px-2 py-1 rounded-sm uppercase">
                            Chef's Special
                          </span>
                        )}
                      </h4>
                    </div>
                    <div className="text-xl font-medium text-amber-500 md:text-right">
                      ₹{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;