import React from 'react';

interface MenuItem {
  name: string;
  description: string;
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
      title: "Natti Style Specials",
      items: [
        {
          name: "Chicken Natti Style Dry",
          description: "Traditional spicy dry chicken preparation",
          price: "230",
          featured: true
        },
        {
          name: "Chicken Natti Style Fry",
          description: "Crispy fried chicken with authentic spices",
          price: "230"
        },
        {
          name: "Chicken Kabab",
          description: "Tender chicken kababs with special masala",
          price: "200"
        },
        {
          name: "Chicken Ghee Roast",
          description: "Spicy roasted chicken in clarified butter",
          price: "300",
          featured: true
        }
      ]
    },
    {
      title: "Biryani Specialties",
      items: [
        {
          name: "Maharaj Chicken Biryani Special",
          description: "Our signature biryani with aromatic spices",
          price: "250",
          featured: true
        },
        {
          name: "Mutton Biryani Special",
          description: "Tender mutton pieces in fragrant rice",
          price: "320"
        },
        {
          name: "Chicken Biryani",
          description: "Classic chicken biryani with raita",
          price: "220"
        },
        {
          name: "Special Chicken Dry/Fry",
          description: "Chef's special preparation",
          price: "250"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-serif mb-8 text-center text-amber-50">Natti Style Menu</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-16"></div>
        
        <div className="max-w-4xl mx-auto">
          {menuSections.map((section, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl text-amber-400 font-serif mb-8 text-center">{section.title}</h3>
              
              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 ${
                      item.featured ? 'bg-zinc-800/80' : 'hover:bg-zinc-800/50'
                    } transition-colors duration-300 border-b border-zinc-800`}
                  >
                    <div className="flex-1">
                      <h4 className="text-xl text-white mb-2 flex items-center">
                        {item.name}
                        {item.featured && (
                          <span className="ml-2 bg-amber-700 text-amber-50 text-xs px-2 py-1 rounded-sm uppercase">
                            Chef's Special
                          </span>
                        )}
                      </h4>
                      <p className="text-zinc-400 text-sm mb-4 md:mb-0">{item.description}</p>
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

export default Menu