import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import bmwM4 from "@/assets/bmw-m4-2024.jpg";
import bmwX5M from "@/assets/bmw-x5m-2024.jpg";
import bmw3Series from "@/assets/bmw-3series-2024.jpg";
import bmwIX from "@/assets/bmw-ix-2024.jpg";
import bmwI4 from "@/assets/bmw-i4-2024.jpg";
import bmw7Series from "@/assets/bmw-7series-2024.jpg";
import bmwX7 from "@/assets/bmw-x7-2024.jpg";
import bmwZ4 from "@/assets/bmw-z4-2024.jpg";

const AllModels = () => {
  const { selectedCountry, exchangeRate, currency } = useApp();
  
  const formatPrice = (usdPrice: number) => {
    const convertedPrice = Math.round(usdPrice * exchangeRate);
    const currencySymbols: { [key: string]: string } = {
      'USD': '$', 'EUR': '€', 'GBP': '£', 'JPY': '¥', 'CAD': 'C$', 'AUD': 'A$'
    };
    return `${currencySymbols[currency] || '$'}${convertedPrice.toLocaleString()}`;
  };

  const modelsByCategory = {
    sedans: [
      {
        name: "BMW 3 Series 330i xDrive",
        year: "2024",
        basePrice: 39950,
        image: bmw3Series,
        availableCountries: ["US", "DE", "GB", "JP", "CA", "AU"],
        features: ["TwinPower Turbo I4", "255 HP", "xDrive AWD", "Live Cockpit Pro"],
        description: "The benchmark for luxury sport sedans with perfect balance of performance and efficiency.",
        specs: { engine: "2.0L TwinPower Turbo", mpg: "26/36", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW 5 Series 540i xDrive",
        year: "2024",
        basePrice: 61200,
        image: bmw7Series,
        availableCountries: ["US", "DE", "GB", "CA", "AU"],
        features: ["TwinPower Turbo I6", "335 HP", "Executive Package", "Gesture Control"],
        description: "Perfect blend of performance and executive comfort with advanced technology.",
        specs: { engine: "3.0L TwinPower Turbo", mpg: "23/32", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW 7 Series 750i xDrive",
        year: "2024",
        basePrice: 95400,
        image: bmw7Series,
        availableCountries: ["US", "DE", "GB", "JP"],
        features: ["Twin Turbo V8", "523 HP", "Executive Lounge", "Theatre Screen"],
        description: "The pinnacle of luxury with innovative technology and supreme comfort.",
        specs: { engine: "4.4L Twin Turbo V8", mpg: "19/28", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW M3 Competition xDrive",
        year: "2024",
        basePrice: 74300,
        image: bmwM4,
        availableCountries: ["US", "DE", "GB", "JP", "CA"],
        features: ["M TwinPower Turbo I6", "503 HP", "M xDrive", "Carbon Fiber Roof"],
        description: "High-performance sedan that delivers track-bred capabilities.",
        specs: { engine: "3.0L M TwinPower Turbo", mpg: "16/23", drivetrain: "M xDrive AWD" }
      }
    ],
    suvs: [
      {
        name: "BMW X1 xDrive28i",
        year: "2024",
        basePrice: 38600,
        image: bmwX7,
        availableCountries: ["US", "DE", "GB", "CA", "AU"],
        features: ["TwinPower Turbo I4", "228 HP", "xDrive AWD", "Panoramic Moonroof"],
        description: "Compact luxury SAV with versatile capability and premium features.",
        specs: { engine: "2.0L TwinPower Turbo", mpg: "24/33", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW X3 xDrive30i",
        year: "2024",
        basePrice: 48550,
        image: bmwX7,
        availableCountries: ["US", "DE", "GB", "JP", "CA", "AU"],
        features: ["TwinPower Turbo I4", "248 HP", "Premium Package", "Harman Kardon"],
        description: "The perfect balance of size, performance, and luxury in the SAV segment.",
        specs: { engine: "2.0L TwinPower Turbo", mpg: "23/31", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW X5 xDrive40i",
        year: "2024",
        basePrice: 65700,
        image: bmwX5M,
        availableCountries: ["US", "DE", "GB", "JP", "CA"],
        features: ["TwinPower Turbo I6", "375 HP", "Air Suspension", "Laser Headlights"],
        description: "Luxury meets performance in this iconic Sports Activity Vehicle.",
        specs: { engine: "3.0L TwinPower Turbo", mpg: "21/26", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW X7 xDrive40i",
        year: "2024",
        basePrice: 77850,
        image: bmwX7,
        availableCountries: ["US", "DE", "GB", "JP"],
        features: ["TwinPower Turbo I6", "375 HP", "7-Seater", "Crystal Interior Trim"],
        description: "The ultimate luxury SAV with commanding presence and unmatched comfort.",
        specs: { engine: "3.0L TwinPower Turbo", mpg: "20/25", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW X5 M Competition",
        year: "2024",
        basePrice: 118500,
        image: bmwX5M,
        availableCountries: ["US", "DE", "GB", "JP"],
        features: ["M TwinPower Turbo V8", "617 HP", "M Active Suspension", "Carbon Package"],
        description: "Uncompromising performance meets luxury in this high-performance SAV.",
        specs: { engine: "4.4L M TwinPower Turbo", mpg: "13/18", drivetrain: "M xDrive AWD" }
      }
    ],
    electric: [
      {
        name: "BMW i4 eDrive40",
        year: "2024",
        basePrice: 52200,
        image: bmwI4,
        availableCountries: ["US", "DE", "GB", "CA", "AU"],
        features: ["340 HP", "270 Mile Range", "DC Fast Charging", "iDrive 8"],
        description: "Pure electric performance in an elegant gran coupe silhouette.",
        specs: { engine: "Single Electric Motor", mpg: "116 MPGe", drivetrain: "Rear-Wheel Drive" }
      },
      {
        name: "BMW i4 M50",
        year: "2024",
        basePrice: 67300,
        image: bmwI4,
        availableCountries: ["US", "DE", "GB", "CA"],
        features: ["536 HP", "270 Mile Range", "M Sport Package", "Adaptive M Suspension"],
        description: "Pure electric performance with M DNA and zero emissions.",
        specs: { engine: "Dual Electric Motors", mpg: "104 MPGe", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW iX xDrive50",
        year: "2024",
        basePrice: 87100,
        image: bmwIX,
        availableCountries: ["US", "DE", "GB", "JP"],
        features: ["516 HP", "324 Mile Range", "Panoramic Sky Lounge", "Curved Display"],
        description: "The future of electric luxury mobility with cutting-edge technology.",
        specs: { engine: "Dual Electric Motors", mpg: "84 MPGe", drivetrain: "xDrive AWD" }
      },
      {
        name: "BMW i7 xDrive60",
        year: "2024",
        basePrice: 107300,
        image: bmw7Series,
        availableCountries: ["US", "DE", "GB"],
        features: ["536 HP", "321 Mile Range", "Theatre Screen", "Executive Lounge"],
        description: "Electric luxury flagship with unmatched comfort and innovative features.",
        specs: { engine: "Dual Electric Motors", mpg: "79 MPGe", drivetrain: "xDrive AWD" }
      }
    ],
    sports: [
      {
        name: "BMW Z4 sDrive30i",
        year: "2024",
        basePrice: 52950,
        image: bmwZ4,
        availableCountries: ["US", "DE", "GB", "JP", "CA"],
        features: ["TwinPower Turbo I4", "255 HP", "Convertible Soft Top", "Sport Package"],
        description: "Pure roadster experience with perfect 50:50 weight distribution.",
        specs: { engine: "2.0L TwinPower Turbo", mpg: "25/32", drivetrain: "Rear-Wheel Drive" }
      },
      {
        name: "BMW M2 Competition",
        year: "2024",
        basePrice: 65000,
        image: bmwM4,
        availableCountries: ["US", "DE", "GB", "JP"],
        features: ["M TwinPower Turbo I6", "453 HP", "Manual Available", "M Performance Package"],
        description: "Pure driving pleasure in its most concentrated form with track-focused engineering.",
        specs: { engine: "3.0L M TwinPower Turbo", mpg: "18/25", drivetrain: "Rear-Wheel Drive" }
      },
      {
        name: "BMW M4 Competition",
        year: "2024",
        basePrice: 74300,
        image: bmwM4,
        availableCountries: ["US", "DE", "GB", "JP", "CA"],
        features: ["M TwinPower Turbo I6", "503 HP", "M Track Package", "Carbon Fiber"],
        description: "The ultimate expression of BMW's racing heritage with track-bred performance.",
        specs: { engine: "3.0L M TwinPower Turbo", mpg: "16/23", drivetrain: "Rear-Wheel Drive" }
      },
      {
        name: "BMW M8 Competition Coupe",
        year: "2024",
        basePrice: 142500,
        image: bmwM4,
        availableCountries: ["US", "DE", "GB"],
        features: ["M TwinPower Turbo V8", "617 HP", "Carbon Package", "M Driver's Package"],
        description: "The most powerful BMW M car with uncompromising performance and luxury.",
        specs: { engine: "4.4L M TwinPower Turbo", mpg: "15/22", drivetrain: "M xDrive AWD" }
      }
    ]
  };

  const isAvailableInCountry = (availableCountries: string[]) => {
    return availableCountries.includes(selectedCountry);
  };

  const renderModelGrid = (models: any[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {models.map((model, index) => {
          const available = isAvailableInCountry(model.availableCountries);
          return (
            <Card 
              key={index} 
              className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                available ? 'hover:scale-[1.02] bg-card border-border' : 'bg-muted/50 border-muted'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className={`w-full h-40 sm:h-48 object-cover transition-transform duration-700 ${
                    available ? 'group-hover:scale-110' : 'grayscale'
                  }`}
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {model.year}
                </div>
                {!available && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Badge variant="secondary" className="text-xs sm:text-sm font-medium">
                      Not Available in {selectedCountry}
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-3 sm:p-4 lg:p-5">
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 ${
                  available ? 'text-foreground group-hover:text-primary transition-colors' : 'text-muted-foreground'
                }`}>
                  {model.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 ${
                  available ? 'text-muted-foreground' : 'text-muted-foreground/70'
                }`}>
                  {model.description}
                </p>
                
                {/* Specifications */}
                {model.specs && (
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-muted/30 rounded-lg">
                    <h4 className={`font-semibold text-xs sm:text-sm mb-2 ${
                      available ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      Specifications:
                    </h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Engine:</span>
                        <span className={`font-medium ${available ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {model.specs.engine}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>MPG:</span>
                        <span className={`font-medium ${available ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {model.specs.mpg}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Features */}
                <div className="mb-3 sm:mb-4">
                  <h4 className={`font-semibold text-xs sm:text-sm mb-2 ${
                    available ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {model.features.slice(0, 3).map((feature: string, idx: number) => (
                      <span 
                        key={idx} 
                        className={`px-2 py-1 rounded-md text-xs text-center ${
                          available 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="w-full sm:w-auto">
                    <span className={`text-xs sm:text-sm ${
                      available ? 'text-muted-foreground' : 'text-muted-foreground/70'
                    }`}>
                      Starting at
                    </span>
                    <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                      available ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {available ? formatPrice(model.basePrice) : 'N/A'}
                    </p>
                  </div>
                  <Button 
                    variant={available ? "outline" : "secondary"} 
                    size="sm"
                    disabled={!available}
                    className={`w-full sm:w-auto ${
                      available ? "hover:bg-primary hover:text-primary-foreground transition-all duration-300" : ""
                    }`}
                  >
                    {available ? 'Learn More' : 'Unavailable'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <section id="all-models" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Complete BMW Lineup 2024-2025
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            Explore our comprehensive range of vehicles with real pricing in {currency}. 
            Models and pricing may vary by region.
          </p>
        </div>

        <Tabs defaultValue="sedans" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12 mx-auto max-w-2xl h-auto">
            <TabsTrigger value="sedans" className="text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-3">
              Sedans
            </TabsTrigger>
            <TabsTrigger value="suvs" className="text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-3">
              SUVs
            </TabsTrigger>
            <TabsTrigger value="electric" className="text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-3">
              Electric
            </TabsTrigger>
            <TabsTrigger value="sports" className="text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-3">
              M Series
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="sedans" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Sedans & Coupes</h3>
              <p className="text-muted-foreground">Sophisticated design meets dynamic performance</p>
            </div>
            {renderModelGrid(modelsByCategory.sedans)}
          </TabsContent>
          
          <TabsContent value="suvs" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Sports Activity Vehicles</h3>
              <p className="text-muted-foreground">Versatility without compromise</p>
            </div>
            {renderModelGrid(modelsByCategory.suvs)}
          </TabsContent>
          
          <TabsContent value="electric" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Electric Vehicles</h3>
              <p className="text-muted-foreground">The future of sustainable luxury mobility</p>
            </div>
            {renderModelGrid(modelsByCategory.electric)}
          </TabsContent>
          
          <TabsContent value="sports" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">M Performance</h3>
              <p className="text-muted-foreground">The most powerful letter in the world</p>
            </div>
            {renderModelGrid(modelsByCategory.sports)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-muted-foreground mb-4">
            * Prices shown in {currency} for {selectedCountry}. 
            Actual prices may vary by dealer and local specifications.
          </p>
          <Button variant="bmw" size="lg" className="hover:scale-105 transition-transform">
            Find Your Local Dealer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllModels;