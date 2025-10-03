import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  // removed video index state
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Single BMW super promotional video
  const heroVideo = { id: "dZSfBoTpGto", title: "BMW M - The Most Powerful Letter", duration: "2:30" };



  const toggleVideo = () => {
    const iframe = document.getElementById('hero-video') as HTMLIFrameElement;
    if (iframe) {
      if (isPlaying) {
        iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
      } else {
        if (!iframe.src.includes('autoplay=1')) {
          iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
        }
      }
      setIsPlaying(!isPlaying);
    }
  };


  const currentVideo = heroVideo;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* BMW Super Video Background with Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full transform transition-all duration-1000 ease-out animate-fade-in">
          <iframe
            id="hero-video"
            key={currentVideo.id}
            className="absolute inset-0 w-full h-full object-cover scale-110 sm:scale-105 md:scale-100 transition-all duration-500"
            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.id}&controls=0&rel=0&modestbranding=1&playsinline=1`}
            title="BMW Super Promotional Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => {
              setIsVideoLoaded(true);
              console.log('BMW video loaded:', currentVideo.title);
            }}
          />
        </div>
        {/* Premium gradient overlay for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>
      
      {/* Video Control */}
      <div className="absolute top-20 right-4 sm:top-24 sm:right-8 z-20">
        <button
          onClick={toggleVideo}
          className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>

      {/* Enhanced Video Info Banner with Animation */}
      <div className="absolute top-32 right-4 sm:top-40 sm:right-8 z-20 animate-slide-in-right">
        <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-lg border border-white/20 transition-all duration-300 hover:scale-105">
          <div className="text-xs sm:text-sm font-semibold text-bmw-light-blue mb-1">
            NOW PLAYING
          </div>
          <div className="text-sm sm:text-base font-medium">
            {currentVideo.title}
          </div>
          <div className="text-xs opacity-70 mt-1">
            Duration: {currentVideo.duration}
          </div>
        </div>
      </div>

      
      {/* Enhanced Content with Banner Animation */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Animated Title Banner */}
          <div className="relative overflow-hidden mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-slide-down">
              <span className="inline-block animate-fade-in delay-100">The</span>{" "}
              <span className="inline-block animate-fade-in delay-200">Ultimate</span>
              <span className="block text-bmw-light-blue bg-gradient-to-r from-bmw-light-blue to-blue-400 bg-clip-text text-transparent animate-float delay-300">
                Driving Machine
              </span>
            </h1>
            {/* Animated underline */}
            <div className="h-1 bg-gradient-to-r from-bmw-light-blue to-transparent animate-[fadeIn_1s_ease-out_1s_both] transform scale-x-0 animate-[scaleX_1s_ease-out_1.2s_both] origin-left"></div>
          </div>

          {/* Animated description */}
          <div className="relative overflow-hidden mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto lg:mx-0 animate-fade-in delay-500 transform translate-y-4 animate-[slideUp_0.8s_ease-out_0.5s_both]">
              Discover the latest BMW models for 2024 and 2025. Experience innovation, luxury, and performance like never before with BMW's super promotional collection.
            </p>
          </div>

          {/* Animated buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="bmw" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover:scale-105 transition-all duration-300 animate-[slideUp_0.6s_ease-out_0.8s_both] transform translate-y-4 hover:shadow-2xl hover:shadow-bmw-light-blue/30"
            >
              Explore Models
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover:scale-105 transition-all duration-300 animate-[slideUp_0.6s_ease-out_1s_both] transform translate-y-4 hover:shadow-2xl"
            >
              Build & Price
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden sm:block">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-80">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 w-2 h-2 bg-bmw-light-blue rounded-full animate-pulse-slow hidden lg:block"></div>
      <div className="absolute top-1/2 right-16 w-1 h-1 bg-white rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-bmw-blue/50 rounded-full animate-pulse-slow hidden lg:block"></div>
    </section>
  );
};

export default Hero;