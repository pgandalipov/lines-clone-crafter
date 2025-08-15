import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero hero-lines flex items-center justify-center overflow-hidden">
      {/* Анимированные линии */}
      <div className="absolute inset-0 lines-pattern opacity-30"></div>
      
      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Внедряем аналитику
            <br />
            и трансформируем
            <br />
            <span className="relative">
              данные в решения
              <span className="block">для бизнеса</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Превращаем потоки данных в стратегические преимущества. Создаем единую аналитическую экосистему для принятия обоснованных решений
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="heroOutline" size="lg" className="min-w-[200px]">
              УЗНАТЬ ПОДРОБНЕЕ
            </Button>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Радиальные линии */}
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 15) * (Math.PI / 180);
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
                strokeWidth="1"
                opacity="0.6"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
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