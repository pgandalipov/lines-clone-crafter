import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Системная интеграция",
      description: "Соединяем все ваши ИТ-системы в единое целое. Больше никаких проблем с передачей данных между программами - всё работает как часы, а ваш бизнес становится эффективнее.",
      icon: "🔗",
      color: "bg-gradient-primary"
    },
    {
      title: "Импортозамещение", 
      description: "Заменяем зарубежное ПО на российские аналоги без потери качества. Сохраняем все ваши данные и функции, а вы получаете полную поддержку на русском языке.",
      icon: "🔄",
      color: "bg-gradient-primary"
    },
    {
      title: "Аутстаффинг команд",
      description: "Даём вам готовую команду разработчиков под любой проект. Мы берём на себя управление, координацию и ответственность - вы просто получаете результат.",
      icon: "👥",
      color: "bg-gradient-primary"
    },
    {
      title: "Аудит проекта",
      description: "Проверяем ваш ИТ-проект со всех сторон и находим слабые места. Получаете чёткий план, как сэкономить деньги и ускорить внедрение.",
      icon: "📊",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Решаем ваши ИТ-задачи быстро и качественно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-[1.02] transition-all duration-300 shadow-card hover:shadow-hero border-0 ${
                service.color.includes('primary') ? 'bg-gradient-primary text-white' : 'bg-white'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className={`text-lg md:text-xl font-bold mb-2 ${
                      service.color.includes('primary') ? 'text-white' : 'text-foreground'
                    }`}>
                      {service.title}
                    </CardTitle>
                  </div>
                  <div className="ml-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                      service.color.includes('primary') ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className={`text-sm leading-relaxed mb-4 ${
                  service.color.includes('primary') ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </CardDescription>
                <Button 
                  variant={service.color.includes('primary') ? "heroOutline" : "outline"} 
                  size="sm"
                  className="group-hover:scale-105 transition-transform duration-200"
                >
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;