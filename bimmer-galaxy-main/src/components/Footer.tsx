const Footer = () => {
  return (
    <footer className="bg-bmw-dark-blue text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-bmw-blue font-bold text-sm">BMW</span>
              </div>
              <span className="text-xl font-bold">BMW</span>
            </div>
            <p className="text-white/80 text-sm">
              The Ultimate Driving Machine. Experience luxury, performance, and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Models</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Sedans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SUVs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports Cars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electric</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Find a Dealer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Build & Price</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 BMW. All rights reserved. | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;