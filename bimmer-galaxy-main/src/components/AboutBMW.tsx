import { Card } from "@/components/ui/card";

const AboutBMW = () => {
  const timeline = [
    {
      year: "1916",
      title: "Founded as Bayerische Flugzeugwerke",
      description: "BMW began as an aircraft engine manufacturer during World War I."
    },
    {
      year: "1923",
      title: "First Motorcycle Production",
      description: "BMW R 32 motorcycle was the company's first motorcycle."
    },
    {
      year: "1928",
      title: "First Automobile",
      description: "BMW acquired Fahrzeugfabrik Eisenach and began car production."
    },
    {
      year: "1972",
      title: "The M Division",
      description: "BMW Motorsport GmbH (now BMW M) was founded for high-performance vehicles."
    },
    {
      year: "2013",
      title: "Electric Era Begins",
      description: "BMW i3 and i8 launched the BMW i sub-brand for electric mobility."
    },
    {
      year: "2025",
      title: "Full Electric Future",
      description: "BMW continues leading sustainable luxury mobility with expanded EV lineup."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Ultimate Driving Machine
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For over a century, BMW has defined the art of engineering. From our origins as an aircraft engine 
            manufacturer to becoming the world's leading premium automotive brand, we've never stopped pushing 
            the boundaries of innovation, performance, and luxury.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Heritage</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              BMW's story began in 1916 with a vision to create the extraordinary. Today, we continue that legacy 
              with vehicles that deliver sheer driving pleasure while pioneering sustainable mobility solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-bmw-blue mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Years of Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bmw-blue mb-2">8</div>
                <div className="text-sm text-muted-foreground">Global Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bmw-blue mb-2">31</div>
                <div className="text-sm text-muted-foreground">Production Sites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bmw-blue mb-2">2.5M+</div>
                <div className="text-sm text-muted-foreground">Annual Production</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Innovation DNA</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-bmw-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">EfficientDynamics</h4>
                  <p className="text-muted-foreground text-sm">Revolutionary technology combining performance with efficiency</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-bmw-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">BMW ConnectedDrive</h4>
                  <p className="text-muted-foreground text-sm">Intelligent connectivity and digital services</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-bmw-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">BMW i Sustainable Mobility</h4>
                  <p className="text-muted-foreground text-sm">Leading the electric revolution with premium EVs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">BMW Timeline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border-border bg-card">
                <div className="text-2xl font-bold text-bmw-blue mb-2">{item.year}</div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBMW;