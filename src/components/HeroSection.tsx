import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80; // Account for header height
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-gradient-hero hero-lines overflow-hidden">
      {/* Анимированные линии */}
      <div className="absolute inset-0 lines-pattern opacity-10"></div>
      
      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-10 leading-tight">
            <span className="block mb-6 opacity-95 hero-fade-in-delay-1">Умная аналитика</span>
            <span className="block mb-6 hero-fade-in-delay-2">
              и <span className="inline-block bg-white text-purple-600 px-8 py-4 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 font-semibold text-2xl md:text-3xl lg:text-4xl hero-float">AI-решения</span>
            </span>
            <span className="block opacity-95 hero-fade-in-delay-3">для вашего бизнеса</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-fade-in-delay-4">
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="min-w-[220px] text-lg py-6 px-8 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              onClick={scrollToServices}
            >
              УЗНАТЬ ПОДРОБНЕЕ
            </Button>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <svg
          className="w-full h-full opacity-8"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Радиальные линии */}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const x1 = 400 + Math.cos(angle) * 200;
            const y1 = 300 + Math.sin(angle) * 150;
            const x2 = 400 + Math.cos(angle) * 350;
            const y2 = 300 + Math.sin(angle) * 250;
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="white"
                strokeWidth="1.5"
                opacity="0.15"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '6s'
                }}
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;