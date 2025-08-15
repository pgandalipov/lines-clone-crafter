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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            О нас
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы — команда профессионалов, которая помогает компаниям цифровизировать бизнес-процессы 
            и достигать новых высот эффективности через внедрение современных ИТ-решений.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-card">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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