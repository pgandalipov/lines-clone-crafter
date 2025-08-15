import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Системная интеграция",
      description: "Объединяем разрозненные ИТ-системы в единую инфраструктуру. Настраиваем взаимодействие программных решений и оборудования для бесперебойной и эффективной работы бизнеса.",
      icon: "🔗",
      color: "bg-gradient-primary"
    },
    {
      title: "Импортозамещение", 
      description: "Заменяем зарубежное ПО и оборудование на отечественные аналоги без потери функциональности и данных. Полная поддержка на всех этапах перехода: анализ, миграция, адаптация.",
      icon: "🔄",
      color: "bg-gradient-primary"
    },
    {
      title: "Аутстаффинг команд",
      description: "Предоставляем профессиональные ИТ-команды для реализации проектов любой сложности. Управляем, координируем, отвечаем за результат — вы фокусируетесь на бизнесе.",
      icon: "👥",
      color: "bg-gradient-primary"
    },
    {
      title: "Аудит проекта",
      description: "Проводим комплексную оценку ИТ-проекта: анализ архитектуры, рисков, бюджета и сроков. Выявляем узкие места, формируем рекомендации по оптимизации и повышению эффективности внедрения.",
      icon: "📊",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Услуги<span className="text-primary">|</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-300 shadow-card hover:shadow-hero border-0 ${
                service.color.includes('primary') ? 'bg-gradient-primary text-white' : 'bg-white'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className={`text-xl md:text-2xl font-bold mb-2 ${
                      service.color.includes('primary') ? 'text-white' : 'text-foreground'
                    }`}>
                      {service.title}
                    </CardTitle>
                  </div>
                  <div className="ml-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                      service.color.includes('primary') ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-base leading-relaxed ${
                  service.color.includes('primary') ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </CardDescription>
                <div className="mt-6">
                  <Button 
                    variant={service.color.includes('primary') ? "heroOutline" : "outline"} 
                    size="sm"
                    className="group-hover:scale-105 transition-transform duration-200"
                  >
                    Подробнее →
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

export default ServicesSection;