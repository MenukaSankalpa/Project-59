const CategorySection = () => {
  const categories = [
    {
      title: "Sedans",
      description: "Luxury and performance combined",
      models: "3 Series • 5 Series • 7 Series • i4",
      icon: "🚗"
    },
    {
      title: "SUVs",
      description: "Adventure meets sophistication",
      models: "X1 • X3 • X5 • X7 • iX",
      icon: "🚙"
    },
    {
      title: "Sports Cars",
      description: "Pure driving excitement",
      models: "M2 • M3 • M4 • M5 • M8",
      icon: "🏎️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Perfect BMW
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From efficient sedans to powerful SUVs and thrilling sports cars, discover the BMW that matches your lifestyle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-elegant hover:shadow-bmw transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <p className="text-sm text-bmw-blue font-medium mb-6">{category.models}</p>
              <button className="text-bmw-blue font-semibold hover:text-bmw-dark-blue transition-colors group-hover:underline">
                Explore {category.title} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;