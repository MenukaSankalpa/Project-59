import { useApp } from "@/contexts/AppContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bmwM4 from "@/assets/bmw-m4-2024.jpg";
import bmwX5M from "@/assets/bmw-x5m-2024.jpg";
import bmw3Series from "@/assets/bmw-3series-2024.jpg";
import bmwIX from "@/assets/bmw-ix-2024.jpg";
import bmwI4 from "@/assets/bmw-i4-2024.jpg";
import bmw7Series from "@/assets/bmw-7series-2024.jpg";

const FeaturedModels = () => {
  const { selectedCountry, exchangeRate, currency } = useApp();
  
  const formatPrice = (usdPrice: number) => {
    const convertedPrice = Math.round(usdPrice * exchangeRate);
    const currencySymbols: { [key: string]: string } = {
      'USD': '$', 'EUR': '€', 'GBP': '£', 'JPY': '¥', 'CAD': 'C$', 'AUD': 'A$'
    };
    return `${currencySymbols[currency] || '$'}${convertedPrice.toLocaleString()}`;
  };

  const models = [
    {
      name: "BMW M4 Competition",
      year: "2024",
      type: "M Performance Coupe",
      basePrice: 74300,
      image: bmwM4,
      features: ["Twin Turbo S58 Engine", "503 HP", "0-60 in 3.8s", "M Carbon Fiber"],
      description: "The ultimate expression of BMW's racing heritage with track-bred performance.",
      specs: {
        engine: "3.0L Twin Turbo I6",
        transmission: "8-Speed M Steptronic",
        drivetrain: "Rear-Wheel Drive"
      }
    },
    {
      name: "BMW X5 M Competition",
      year: "2024", 
      type: "M Performance SAV",
      basePrice: 118500,
      image: bmwX5M,
      features: ["Twin Turbo V8", "617 HP", "0-60 in 3.6s", "M Active Suspension"],
      description: "Uncompromising performance meets luxury in this high-performance SAV.",
      specs: {
        engine: "4.4L Twin Turbo V8",
        transmission: "8-Speed M Steptronic",
        drivetrain: "M xDrive AWD"
      }
    },
    {
      name: "BMW 3 Series 330i",
      year: "2024",
      type: "Luxury Sedan", 
      basePrice: 36950,
      image: bmw3Series,
      features: ["TwinPower Turbo", "255 HP", "Sport Suspension", "Live Cockpit Pro"],
      description: "The benchmark for luxury sport sedans with perfect balance.",
      specs: {
        engine: "2.0L TwinPower Turbo I4",
        transmission: "8-Speed Steptronic",
        drivetrain: "Rear-Wheel Drive"
      }
    },
    {
      name: "BMW iX xDrive50",
      year: "2024",
      type: "Electric SAV",
      basePrice: 87100,
      image: bmwIX,
      features: ["516 HP", "324 Mile Range", "Panoramic Sky Lounge", "Curved Display"],
      description: "The future of electric luxury mobility with cutting-edge technology.",
      specs: {
        engine: "Dual Electric Motors",
        transmission: "Single-Speed",
        drivetrain: "xDrive AWD"
      }
    },
    {
      name: "BMW i4 M50",
      year: "2024",
      type: "Electric Gran Coupe",
      basePrice: 67300,
      image: bmwI4,
      features: ["536 HP", "270 Mile Range", "M Sport Package", "Adaptive M Suspension"],
      description: "Pure electric performance with M DNA and zero emissions.",
      specs: {
        engine: "Dual Electric Motors",
        transmission: "Single-Speed",
        drivetrain: "xDrive AWD"
      }
    },
    {
      name: "BMW 7 Series 750i xDrive",
      year: "2024",
      type: "Luxury Sedan",
      basePrice: 95400,
      image: bmw7Series,
      features: ["Twin Turbo V8", "523 HP", "Executive Lounge", "Theatre Screen"],
      description: "The pinnacle of luxury with innovative technology and supreme comfort.",
      specs: {
        engine: "4.4L Twin Turbo V8",
        transmission: "8-Speed Steptronic",
        drivetrain: "xDrive AWD"
      }
    }
  ];

  return (
    <section id="models" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Featured 2024-2025 Models
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            Discover our newest innovations in luxury, performance, and electric mobility with real-world pricing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card border-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {model.year} • {model.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                  {model.description}
                </p>
                
                {/* Specifications */}
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Specifications:</h4>
                  <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Engine:</span>
                      <span className="text-foreground font-medium">{model.specs.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drivetrain:</span>
                      <span className="text-foreground font-medium">{model.specs.drivetrain}</span>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 sm:gap-2">
                    {model.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs text-center">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground">Starting at</span>
                    <p className="text-xl sm:text-2xl font-bold text-primary">{formatPrice(model.basePrice)}</p>
                    <span className="text-xs text-muted-foreground">{currency} • {selectedCountry}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;