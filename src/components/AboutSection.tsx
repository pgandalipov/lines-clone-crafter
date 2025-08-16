import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { number: "50+", label: "Завершенных проектов" },
    { number: "100+", label: "Специалистов в команде" },
    { number: "7", label: "Лет опыта" },
    { number: "24/7", label: "Техническая поддержка" }
  ];

  const features = [
    {
      title: "Экспертиза",
      description: "Глубокие знания современных технологий и лучших практик индустрии",
      icon: "🎯"
    },
    {
      title: "Надежность",
      description: "Проверенные решения с гарантией качества и долгосрочной поддержкой",
      icon: "🛡️"
    },
    {
      title: "Инновации",
      description: "Внедряем передовые технологии для повышения эффективности бизнеса",
      icon: "🚀"
    }
  ];

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            О нас
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base lg:text-lg">
            Мы — команда профессионалов, которая помогает компаниям цифровизировать бизнес-процессы 
            и достигать новых высот эффективности через внедрение современных ИТ-решений.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-hero transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-5 pb-4">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-[1.02] transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl mb-3 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;